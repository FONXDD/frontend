"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function About() {
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);

  // Education data (แก้ไขกลับเป็นข้อมูลต้นฉบับของคุณ)
  const education = [
    {
      id: 1,
      degree: "Information Technology",
      institution: "Chiang Mai Technical College",
      year: "2024",
      description: "Specialized in Web Development and Network Systems.",
      icon: (
        // ใช้ SVG แทน Emoji เพื่อความสวยงามในธีมใหม่
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      ),
    },
  ];

  // Skills data
  const skills = [
    { name: "React & Next.js", level: 95, color: "bg-cyan-500" },
    { name: "Node.js", level: 90, color: "bg-emerald-500" },
    { name: "UI/UX Design", level: 85, color: "bg-purple-500" },
    { name: "TypeScript", level: 88, color: "bg-blue-500" },
    { name: "Database Design", level: 82, color: "bg-orange-500" },
    { name: "Mobile Development", level: 75, color: "bg-pink-500" },
  ];

  // Stats data
  const stats = [
    {
      number: "2+",
      label: "Projects Completed",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      number: "3+",
      label: "Years Experience",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      number: "20+",
      label: "Happy Clients",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      number: "5",
      label: "Technologies Mastered",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* --- Hero Section --- */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left side - Text */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-50 rounded-full text-sm font-bold text-cyan-700 mb-8 tracking-wide uppercase">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2 animate-pulse"></span>
                About Developer
              </div>

              <h1 className="text-5xl sm:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                Hello, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  Tanakorn Sunto
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
                Full Stack Developer & UI/UX Designer <br />
                ผู้สร้างสรรค์ประสบการณ์ดิจิทัลที่ผสมผสานระหว่าง <br />
                <span className="font-semibold text-slate-900">
                  "เทคโนโลยีที่ทันสมัย"
                </span>{" "}
                และ{" "}
                <span className="font-semibold text-slate-900">
                  "การออกแบบที่เข้าใจมนุษย์"
                </span>
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-black transition-all duration-300 transform hover:scale-105 shadow-xl shadow-slate-200"
                >
                  Contact Me
                </a>
                <a
                  href="/resume.pdf"
                  className="px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:border-slate-900 hover:text-slate-900 transition-all duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* Right side - Photo */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
              {/* Background Blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-cyan-200/50 to-blue-200/50 rounded-full blur-3xl opacity-60"></div>

              <div className="relative w-72 h-72 sm:w-96 sm:h-96 transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
                <div className="absolute inset-0 border-4 border-slate-900 rounded-[2.5rem] transform translate-x-4 translate-y-4"></div>
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-200">
                  <Image
                    src="/fonxdd.jpg"
                    alt="Tanakorn Sunto"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating Badge */}
                <div
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce"
                  style={{ animationDuration: "3s" }}
                >
                  <div className="p-2 bg-cyan-100 rounded-full text-cyan-600">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">
                      Developer
                    </p>
                    <p className="text-sm font-black text-slate-900">FONXDD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Stats Section --- */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                ref={(el) => (sectionRefs.current[index] = el)}
                data-section-id={index + 1}
                className={`flex flex-col items-center justify-center p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-300 ${
                  visibleSections.includes(index + 1)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-cyan-500 mb-3 bg-cyan-50 p-3 rounded-full">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-slate-500 font-medium text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto">
        {/* --- Skills Section --- */}
        <section className="py-20 px-4 sm:px-8 border-r border-slate-100 bg-slate-50/50">
          <div className="max-w-xl mx-auto lg:ml-auto lg:mr-8">
            <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <span className="p-2 bg-slate-900 rounded-lg text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </span>
              Technical Skills
            </h2>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  ref={(el) => (sectionRefs.current[index + 20] = el)}
                  data-section-id={index + 20}
                  className={`transition-all duration-700 ${
                    visibleSections.includes(index + 20)
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-slate-700">{skill.name}</h3>
                    <span className="text-sm font-bold text-slate-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`h-2.5 rounded-full ${skill.color} shadow-sm relative`}
                      style={{
                        width: visibleSections.includes(index + 20)
                          ? `${skill.level}%`
                          : "0%",
                        transition: "width 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-full bg-gradient-to-r from-transparent to-white/30"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Education Section --- */}
        <section className="py-20 px-4 sm:px-8 bg-white">
          <div className="max-w-xl mx-auto lg:mr-auto lg:ml-8">
            <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <span className="p-2 bg-slate-900 rounded-lg text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </span>
              Education
            </h2>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  ref={(el) => (sectionRefs.current[index + 10] = el)}
                  data-section-id={edu.id + 10}
                  className={`relative pl-8 border-l-2 border-slate-100 transform transition-all duration-700 ${
                    visibleSections.includes(edu.id + 10)
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="absolute -left-[21px] top-0 p-2 bg-cyan-500 rounded-full border-4 border-white shadow-md">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="text-xl font-bold text-slate-900">
                        {edu.degree}
                      </h3>
                      <span className="text-xs font-bold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-600 mb-4">
                      {edu.institution}
                    </h4>
                    <p className="text-slate-500 leading-relaxed text-sm">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* --- Philosophy Section --- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-900/20 to-transparent"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-10 text-cyan-400">
            <svg
              className="w-12 h-12 mx-auto opacity-50"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01699V12.9172C9.01699 12.3649 9.46471 11.9172 10.017 11.9172H14.017C14.5693 11.9172 15.017 11.4695 15.017 10.9172V7.00002C15.017 6.44773 14.5693 6.00002 14.017 6.00002H10.017C9.46471 6.00002 9.01699 6.44773 9.01699 7.00002V8H9.01699V8.00002H6.01699V7.00002C6.01699 4.79088 7.80785 3.00002 10.017 3.00002H14.017C16.2261 3.00002 18.017 4.79088 18.017 7.00002V10.9172C18.017 13.1264 16.2261 14.9172 14.017 14.9172V18C14.017 19.6569 15.3601 21 17.017 21H14.017ZM7.01699 16H10.017C11.1216 16 12.017 16.8954 12.017 18V21H9.01699C7.36014 21 6.01699 19.6569 6.01699 18V16ZM7.01699 13H10.017V15H7.01699V13ZM10.017 9H7.01699V12H10.017V9Z" />
            </svg>
          </div>

          <blockquote className="text-3xl md:text-4xl font-bold italic mb-8 leading-snug">
            "Design is not just what it looks like and feels like.{" "}
            <br className="hidden md:block" />
            <span className="text-cyan-400">Design is how it works.</span>"
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
            {[
              {
                title: "User First",
                desc: "เข้าใจปัญหาของผู้ใช้คือกุญแจสำคัญสู่ความสำเร็จ",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Pixel Perfect",
                desc: "ใส่ใจทุกรายละเอียดตั้งแต่โค้ดบรรทัดแรกจนถึงพิกเซลสุดท้าย",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                ),
              },
              {
                title: "Always Learning",
                desc: "เทคโนโลยีไม่เคยหยุดนิ่ง การเรียนรู้ก็เช่นกัน",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
              >
                <div className="text-cyan-400 mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-black text-slate-900 mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            สนใจร่วมงานหรือต้องการพูดคุยเกี่ยวกับโปรเจค? <br />
            ผมพร้อมเสมอที่จะเปลี่ยนไอเดียของคุณให้เป็นความจริง
          </p>
          <a
            href="mailto:hello@fonxdd.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-cyan-600 transition-all duration-300"
          >
            <span>Say Hello</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
