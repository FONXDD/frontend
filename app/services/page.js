"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Services() {
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);

  // ข้อมูลบริการด้านการท่องเที่ยว
  const servicesData = [
    {
      id: 1,
      category: "Planning",
      title: "Custom Itineraries",
      description:
        "ออกแบบทริปส่วนตัวตามใจคุณ ไม่ว่าจะเป็นทริปครอบครัว ฮันนีมูน หรือผจญภัย เราจัดให้ได้ทุกรูปแบบ",
      features: [
        "Personalized Schedule",
        "Route Optimization",
        "Local Recommendations",
        "Hidden Gems Access",
      ],
      // Map Icon
      icon: (
        <svg className="w-10 h-10 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
      ),
      price: "Free Consultation",
      duration: "1-3 Days Planning",
    },
    {
      id: 2,
      category: "Transport",
      title: "Flight Booking",
      description:
        "จองตั๋วเครื่องบินทั่วโลกในราคาที่ดีที่สุด พร้อมบริการจัดการเรื่องที่นั่งและน้ำหนักกระเป๋า",
      features: [
        "Domestic & International",
        "Best Price Guarantee",
        "Seat Selection",
        "Change/Refund Support",
      ],
      // Plane Icon
      icon: (
        <svg className="w-10 h-10 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
      ),
      price: "Global Coverage",
      duration: "Instant Booking",
    },
    {
      id: 3,
      category: "Stay",
      title: "Luxury Accommodation",
      description:
        "คัดสรรที่พักระดับพรีเมียม ตั้งแต่โรงแรม 5 ดาว รีสอร์ทหรู ไปจนถึงบูทีคโฮเทลที่มีเอกลักษณ์",
      features: [
        "Exclusive Deals",
        "Room Upgrades",
        "Late Check-out",
        "Special Amenities",
      ],
      // Hotel Icon
      icon: (
        <svg className="w-10 h-10 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
      ),
      price: "Best Rate",
      duration: "Flexible Dates",
    },
    {
      id: 4,
      category: "Experience",
      title: "Private Tours",
      description:
        "เปิดประสบการณ์ท่องเที่ยวแบบ Exclusive กับไกด์ท้องถิ่นมืออาชีพและรถรับส่งส่วนตัว",
      features: [
        "Private Driver/Van",
        "Local Expert Guide",
        "Flexible Timing",
        "Skip-the-line Tickets",
      ],
      // Flag/Tour Icon
      icon: (
        <svg className="w-10 h-10 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 21v-8a2 2 0 012-2h14a2 2 0 012 2v8M3 13V6a2 2 0 012-2h14a2 2 0 012 2v7m-9-3h2" /></svg>
      ),
      price: "Custom Quote",
      duration: "Full Service",
    },
    {
      id: 5,
      category: "Documents",
      title: "Visa Assistance",
      description:
        "บริการให้คำปรึกษาและยื่นวีซ่า ลดความยุ่งยากเรื่องเอกสาร เพิ่มโอกาสผ่านวีซ่าให้สูงขึ้น",
      features: [
        "Document Review",
        "Application Filling",
        "Interview Prep",
        "Fast Track Options",
      ],
      // Passport Icon
      icon: (
        <svg className="w-10 h-10 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
      ),
      price: "Starting ฿1,500",
      duration: "3-15 Days",
    },
    {
      id: 6,
      category: "Safety",
      title: "Travel Insurance",
      description:
        "เดินทางอุ่นใจด้วยประกันภัยการเดินทางที่ครอบคลุม ทั้งสุขภาพ อุบัติเหตุ และเที่ยวบินล่าช้า",
      features: [
        "Medical Coverage",
        "Flight Delay/Cancel",
        "Lost Baggage",
        "24/7 Assistance",
      ],
      // Shield Icon
      icon: (
        <svg className="w-10 h-10 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
      ),
      price: "Starting ฿300",
      duration: "Per Trip/Yearly",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description:
        "Tell us about your dream destination, budget, and preferences.",
    },
    {
      step: "02",
      title: "Planning",
      description:
        "We craft a tailor-made itinerary and select the best options for you.",
    },
    {
      step: "03",
      title: "Booking",
      description:
        "Once approved, we handle all reservations and documentation.",
    },
    {
      step: "04",
      title: "Bon Voyage",
      description:
        "Enjoy your trip with 24/7 support from our team whenever you need.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = parseInt(entry.target.dataset.sectionId);
            setVisibleSections((prev) => [...new Set([...prev, sectionId])]);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20">
      
      {/* --- Hero Section --- */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-50 to-transparent opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-cyan-50 rounded-full text-sm font-bold text-cyan-700 mb-6 tracking-wide uppercase">
            Our Services
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
            We Design <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Unforgettable Journeys
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
            มากกว่าแค่การเดินทาง คือการสร้างประสบการณ์ที่ไร้รอยต่อ 
            เราดูแลทุกรายละเอียดเพื่อให้คุณได้สัมผัสโลกใบนี้ในแบบที่คุณต้องการ
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-black transition-all duration-300 hover:scale-105 shadow-xl shadow-slate-200">
              Plan My Trip
            </button>
            <button className="px-10 py-4 border-2 border-slate-200 text-slate-900 rounded-full font-bold hover:border-slate-900 hover:bg-slate-50 transition-all duration-300">
              Explore Packages
            </button>
          </div>
        </div>
      </section>

      {/* --- Services Grid --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Premium Travel Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need for a perfect vacation, all in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                data-section-id={service.id}
                className={`bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out border border-slate-100 group ${
                  visibleSections.includes(service.id)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Header: Icon & Category */}
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-cyan-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                    </div>
                    <div className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-600 uppercase tracking-wider">
                        {service.category}
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-500 leading-relaxed mb-8 min-h-[4.5rem]">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-slate-700 font-medium"
                    >
                      <svg className="w-4 h-4 text-cyan-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-100 pt-6 mt-auto">
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-sm font-bold text-slate-900">
                      {service.price}
                    </span>
                    <span className="text-sm text-slate-500">
                      {service.duration}
                    </span>
                  </div>

                  <button className="w-full px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-cyan-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-200">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Process Section --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-slate-100 rounded-full text-sm font-bold text-slate-600 mb-6 uppercase tracking-wider">
              How it Works
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Your Journey Starts Here
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Simple steps to your dream vacation. We handle the complexity, you enjoy the experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
             {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-100 -z-10"></div>

            {processSteps.map((step, index) => (
              <div
                key={index}
                className="text-center group relative"
                ref={(el) =>
                  (sectionRefs.current[servicesData.length + index] = el)
                }
                data-section-id={100 + index}
              >
                <div
                  className={`inline-flex items-center justify-center w-24 h-24 bg-white border-4 border-slate-50 text-slate-900 rounded-full text-2xl font-black mb-8 transform transition-all duration-700 shadow-xl ${
                    visibleSections.includes(100 + index)
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-50 translate-y-10"
                  } group-hover:border-cyan-200 group-hover:text-cyan-600`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {step.step}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-500 leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Stats Section --- */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900 via-slate-900 to-slate-950"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-slate-800/50">
            {[
              { number: "200+", label: "Destinations" },
              { number: "15k+", label: "Happy Travelers" },
              { number: "10+", label: "Years Experience" },
              { number: "24/7", label: "Global Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center px-4">
                <div className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-3 font-mono tracking-tighter">
                  {stat.number}
                </div>
                <div className="text-cyan-400 font-bold uppercase tracking-widest text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA / Contact Form --- */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 mb-8 tracking-tight">
            Ready to Explore?
          </h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Tell us about your ideal trip, and let's make it happen.
            We are here to help you discover the world.
          </p>

          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 overflow-hidden border border-slate-100 max-w-3xl mx-auto p-1">
            <div className="p-8 sm:p-12 bg-slate-50/50 rounded-[2.3rem]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl text-slate-900 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 focus:outline-none transition-all duration-300 placeholder:text-slate-400 font-medium"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl text-slate-900 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 focus:outline-none transition-all duration-300 placeholder:text-slate-400 font-medium"
                />
              </div>

              <textarea
                placeholder="Where do you want to go? Tell us your plans..."
                rows="4"
                className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl text-slate-900 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 focus:outline-none transition-all duration-300 mb-8 resize-none placeholder:text-slate-400 font-medium"
              ></textarea>

              <button className="w-full px-8 py-5 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-lg rounded-xl font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-[1.01]">
                Send Message
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 font-medium">
              Or reach us directly at{" "}
              <a
                href="mailto:hello@fonxdd.com"
                className="text-cyan-600 hover:text-cyan-700 font-bold transition-colors"
              >
                hello@fonxdd.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}