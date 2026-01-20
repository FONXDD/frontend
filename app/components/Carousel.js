"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef(null);

  const slides = [
    {
      id: 1,
      location: "Chiang Mai, Thailand",
      title: "Mist of Mon Jam",
      description: "สัมผัสลมหนาวและทะเลหมอกบนยอดดอย สูดอากาศบริสุทธิ์ให้เต็มปอด พร้อมวิวทิวเขาแบบพาโนรามา",
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070&auto=format&fit=crop",
      tags: ["Nature", "Mountain", "Relax"],
    },
    {
      id: 2,
      location: "Krabi, Thailand",
      title: "Emerald Paradise",
      description: "ดำดิ่งสู่ความงามของทะเลอันดามัน น้ำใสราวกระจกและหาดทรายขาวละเอียดที่รอให้คุณมาสัมผัส",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop",
      tags: ["Beach", "Adventure", "Summer"],
    },
    {
      id: 3,
      location: "Bangkok, Thailand",
      title: "City of Angels",
      description: "หลงใหลในแสงสีและวัฒนธรรมยามค่ำคืน ความผสมผสานที่ลงตัวระหว่างวัดวาอารามและตึกระฟ้าที่ไม่เคยหลับใหล",
      image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=2050&auto=format&fit=crop",
      tags: ["Urban", "Culture", "Nightlife"],
    },
  ];

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 6000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    startAutoPlay();
  };

  return (
    <div className="relative w-full h-[85vh] sm:h-[90vh] overflow-hidden bg-black text-white group">
      
      {/* --- Background Slider --- */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear ${
              index === currentSlide ? "scale-110" : "scale-100"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Overlay ปรับให้เข้มขึ้นเพื่อให้ตัวหนังสืออ่านง่ายเมื่ออยู่ตรงกลาง */}
          <div className="absolute inset-0 bg-black/40 sm:bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        </div>
      ))}

      {/* --- Main Content Area (Centered) --- */}
      {/* ใช้ flex justify-center items-center เพื่อดึงทุกอย่างเข้ากลาง */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-4 sm:px-12 pointer-events-none">
        <div className="max-w-4xl w-full text-center pointer-events-auto">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              // ลบ absolute positioning ออก เพื่อให้ flex container จัดการ
              // ใช้ display: none/block แทน เพื่อไม่ให้พื้นที่ซ้อนทับกัน
              className={`transition-all duration-700 ease-out flex flex-col items-center ${
                index === currentSlide
                  ? "opacity-100 translate-y-0 block"
                  : "opacity-0 translate-y-8 absolute inset-0 hidden pointer-events-none" 
              }`}
            >
              {/* Location Tag */}
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
                 <span className="w-8 sm:w-12 h-[2px] bg-cyan-400 inline-block shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
                 <p className="text-cyan-300 font-bold tracking-[0.2em] text-sm sm:text-base uppercase drop-shadow-md">
                    {slide.location}
                 </p>
                 <span className="w-8 sm:w-12 h-[2px] bg-cyan-400 inline-block shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-200 drop-shadow-xl tracking-tight leading-tight">
                {slide.title}
              </h1>

              {/* Description */}
              <p className="text-gray-100 text-base sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-light">
                {slide.description}
              </p>

              {/* Tags & Button */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <Link
                   href="/travel"
                   className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-black font-bold text-sm sm:text-lg rounded-full hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                >
                  Explore Now
                </Link>
                
                {/* Tags (Desktop only for cleaner mobile look) */}
                <div className="flex flex-wrap justify-center gap-2">
                   {slide.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-1.5 bg-black/30 backdrop-blur-md rounded-full text-xs sm:text-sm border border-white/20 text-gray-200">
                        #{tag}
                      </span>
                   ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Navigation Thumbnails (Bottom Right) --- */}
      <div className="absolute bottom-8 right-8 z-30 hidden sm:flex flex-col gap-4 items-end">
        <div className="flex flex-col gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => handleSlideChange(index)}
              className={`relative group overflow-hidden rounded-xl transition-all duration-500 ease-out border border-white/20 ${
                index === currentSlide
                  ? "w-32 h-20 ring-2 ring-cyan-400 scale-105 opacity-100 shadow-xl"
                  : "w-20 h-14 opacity-50 hover:opacity-100 hover:scale-105"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay on thumbnail */}
              <div className={`absolute inset-0 bg-black/20 transition-opacity ${index === currentSlide ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}></div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Mobile Dots Navigation (แทน Thumbnail ที่อาจจะรกในมือถือ) */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2 sm:hidden">
         {slides.map((_, index) => (
            <button
               key={index}
               onClick={() => handleSlideChange(index)}
               className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-cyan-400 w-8" : "bg-white/40"
               }`}
            />
         ))}
      </div>

    </div>
  );
}