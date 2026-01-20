"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image"; // แนะนำให้ใช้ next/image ถ้าทำจริง แต่ในนี้ใช้ img tag เพื่อความง่ายในการ copy paste

export default function Destinations() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  // ข้อมูลสถานที่ท่องเที่ยว
  const cardsData = [
    {
      id: 1,
      category: "Japan",
      title: "Kyoto Ancient Temples",
      description: "ดื่มด่ำกับวัฒนธรรมดั้งเดิมและใบไม้เปลี่ยนสีในเมืองหลวงเก่า",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
      badge: "Best Seller",
      price: "฿25,900",
      link: "#",
    },
    {
      id: 2,
      category: "Switzerland",
      title: "Alpine Adventure",
      description: "สัมผัสหิมะแรกและวิวภูเขาระดับโลกที่ Zermatt และ Interlaken",
      image:
        "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop",
      badge: "Trending",
      price: "฿89,000",
      link: "#",
    },
    {
      id: 3,
      category: "Maldives",
      title: "Crystal Clear Lagoon",
      description: "พักผ่อนในวิลลากลางน้ำ พร้อมบริการระดับ 5 ดาวสุดส่วนตัว",
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2667&auto=format&fit=crop",
      badge: "Luxury",
      price: "฿45,000",
      link: "#",
    },
    {
      id: 4,
      category: "Iceland",
      title: "Northern Lights Hunt",
      description: "ล่าแสงเหนือและแช่น้ำพุร้อน Blue Lagoon ในดินแดนน้ำแข็ง",
      image:
        "https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=2127&auto=format&fit=crop",
      badge: "Seasonal",
      price: "฿72,000",
      link: "#",
    },
    {
      id: 5,
      category: "Italy",
      title: "Venice Canal Tour",
      description: "ล่องเรือกอนโดลาชมความงามของสถาปัตยกรรมยุคเรเนสซองส์",
      image:
        "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=2783&auto=format&fit=crop",
      badge: "Romantic",
      price: "฿55,900",
      link: "#",
    },
    {
      id: 6,
      category: "Vietnam",
      title: "Halong Bay Cruise",
      description: "ล่องเรือสำราญชมอ่าวฮาลอง มรดกโลกทางธรรมชาติที่สวยงาม",
      image:
        "https://thesinhtour.com/en/wp-content/uploads/2024/05/sky-cruise-halong-bay-6.jpg",
      badge: "Popular",
      price: "฿12,900",
      link: "#",
    },
  ];

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Best Seller":
        return "bg-rose-500 text-white shadow-rose-200";
      case "Trending":
        return "bg-blue-600 text-white shadow-blue-200";
      case "Luxury":
        return "bg-black text-white shadow-gray-400";
      case "Seasonal":
        return "bg-purple-600 text-white shadow-purple-200";
      case "Romantic":
        return "bg-pink-500 text-white shadow-pink-200";
      case "Popular":
        return "bg-orange-500 text-white shadow-orange-200";
      default:
        return "bg-gray-800 text-white";
    }
  };

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            setVisibleCards((prev) => [...new Set([...prev, cardId])]);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* --- Section Header --- */}
        <div className="text-center mb-20">
          <span className="text-cyan-600 font-bold tracking-widest text-sm uppercase mb-3 block">
            Discover the World
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Popular Destinations
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            เปิดประสบการณ์ใหม่กับการเดินทางที่คัดสรรมาเป็นพิเศษ
            เพื่อความทรงจำที่ล้ำค่าของคุณและคนที่คุณรัก
          </p>
        </div>

        {/* --- Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {cardsData.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => (cardRefs.current[index] = el)}
              data-card-id={card.id}
              className={`group bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 ease-out transform ${
                visibleCards.includes(card.id)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-[280px] overflow-hidden cursor-pointer">
                {/* Image */}
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>

                {/* Badge (Top Left) */}
                <div
                  className={`absolute top-5 left-5 px-4 py-1.5 ${getBadgeColor(card.badge)} text-xs font-bold rounded-full shadow-lg backdrop-blur-sm border border-white/10`}
                >
                  {card.badge}
                </div>

                {/* Category (Top Right) */}
                <div className="absolute top-5 right-5 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold rounded-lg uppercase tracking-wide">
                  {card.category}
                </div>

                {/* Price Tag (Bottom Right) */}
                <div className="absolute bottom-5 right-5 bg-white text-slate-900 px-4 py-2 rounded-xl font-bold text-sm shadow-xl transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  Start {card.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300 line-clamp-1">
                  {card.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-6 text-sm line-clamp-2">
                  {card.description}
                </p>

                {/* Footer Link */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <a
                    href={card.link}
                    className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-cyan-600 transition-colors duration-300 group/link"
                  >
                    View Details
                    <svg
                      className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>

                  {/* Rating or Icon */}
                  <div className="flex items-center gap-1 text-amber-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs font-bold text-slate-400">
                      4.8
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- CTA Bottom --- */}
        <div className="text-center mt-20">
          <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-black hover:scale-105 transition-all duration-300 shadow-xl shadow-slate-300">
            Load More Trips
          </button>
        </div>

        {/* --- Stats Section (Travel Themed) --- */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200">
            {[
              { number: "50+", label: "Destinations" },
              { number: "10k+", label: "Happy Travelers" },
              { number: "4.9", label: "Average Rating" },
              { number: "24/7", label: "Support Team" },
            ].map((stat, index) => (
              <div key={index} className="text-center px-4">
                <div className="text-3xl sm:text-5xl font-black text-slate-900 mb-2 font-mono tracking-tighter">
                  {stat.number}
                </div>
                <div className="text-slate-500 font-medium text-sm sm:text-base uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
