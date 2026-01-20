"use client";

import React, { useState, useEffect, useRef } from "react";

// Modal Component (Redesigned)
const Modal = ({ isOpen, onClose, type, title, message }) => {
  if (!isOpen) return null;

  const getModalStyles = () => {
    switch (type) {
      case "success":
        return {
          icon: (
            <svg
              className="w-12 h-12 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ),
          bgColor: "bg-white",
          buttonColor: "bg-green-600 hover:bg-green-700",
        };
      case "error":
        return {
          icon: (
            <svg
              className="w-12 h-12 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ),
          bgColor: "bg-white",
          buttonColor: "bg-red-600 hover:bg-red-700",
        };
      default:
        return {
          icon: (
            <svg
              className="w-12 h-12 text-cyan-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ),
          bgColor: "bg-white",
          buttonColor: "bg-cyan-600 hover:bg-cyan-700",
        };
    }
  };

  const styles = getModalStyles();

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-[2rem] shadow-2xl max-w-sm w-full mx-auto transform transition-all scale-100 p-8 text-center border border-slate-100 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 to-blue-500"></div>

        <div className="mb-6 flex justify-center">
          <div className="p-3 bg-slate-50 rounded-full">{styles.icon}</div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>

        <p className="text-slate-500 mb-8 leading-relaxed">{message}</p>

        <button
          onClick={onClose}
          className={`w-full py-3.5 px-6 rounded-xl text-white font-bold shadow-lg transition-all duration-300 transform hover:scale-[1.02] ${styles.buttonColor}`}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default function Contact() {
  const [visibleSections, setVisibleSections] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRefs = useRef([]);

  // Updated Form Data for Travel Context
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelers: "2",
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [modal, setModal] = useState({
    isOpen: false,
    type: "info",
    title: "",
    message: "",
  });

  const showModal = (type, title, message) => {
    setModal({ isOpen: true, type, title, message });
  };

  const closeModal = () => {
    setModal({ ...modal, isOpen: false });
  };

  const contactMethods = [
    {
      id: 1,
      title: "Talk to Expert",
      description: "Call us for immediate assistance",
      value: "+66 94 883 5739",
      link: "tel:+66948835739",
      icon: (
        <svg
          className="w-8 h-8 text-cyan-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Email Us",
      description: "Send us your travel plans",
      value: "hello@fonxdd.com",
      link: "mailto:hello@fonxdd.com",
      icon: (
        <svg
          className="w-8 h-8 text-cyan-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Visit Office",
      description: "Come say hello in Chiang Mai",
      value: "359/9 ตำบลหนองหาร อำเภอสันทราย จังหวัดเชียงใหม่",
      link: "#",
      icon: (
        <svg
          className="w-8 h-8 text-cyan-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Line Official",
      description: "Chat with us anytime",
      value: "@FONXDD",
      link: "#",
      icon: (
        <svg
          className="w-8 h-8 text-cyan-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "กรุณากรอกชื่อผู้ติดต่อ";
    if (!formData.email.trim()) newErrors.email = "กรุณากรอกอีเมล";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
    if (!formData.message.trim())
      newErrors.message = "กรุณาระบุรายละเอียดเพิ่มเติม";
    if (!formData.destination.trim())
      newErrors.destination = "กรุณาระบุจุดหมายปลายทาง";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      showModal(
        "success",
        "Request Sent Successfully!",
        "ทีมงานของเราได้รับข้อมูลแล้ว จะติดต่อกลับภายใน 24 ชั่วโมงเพื่อวางแผนทริปให้คุณครับ",
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        destination: "",
        travelers: "2",
        date: "",
        message: "",
      });
    } catch (error) {
      showModal(
        "error",
        "Submission Failed",
        "เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <Modal {...modal} onClose={closeModal} />

      {/* --- Hero Section --- */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-50 to-transparent opacity-60 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-cyan-50 rounded-full text-sm font-bold text-cyan-700 mb-6 uppercase tracking-wider">
            Contact Us
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-slate-900 mb-8 tracking-tight">
            Start Your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Dream Journey
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12">
            พร้อมออกเดินทางหรือยัง?
            ปรึกษาผู้เชี่ยวชาญของเราเพื่อออกแบบทริปที่สมบูรณ์แบบสำหรับคุณโดยเฉพาะ
          </p>
        </div>
      </section>

      {/* --- Contact Methods Grid --- */}
      <section className="py-12 bg-slate-50 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={method.id}
                href={method.link}
                ref={(el) => (sectionRefs.current[index] = el)}
                data-section-id={method.id}
                className={`bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-slate-100 group ${
                  visibleSections.includes(method.id)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 p-4 bg-cyan-50 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  {method.description}
                </p>
                <p className="text-cyan-600 font-bold group-hover:text-cyan-700">
                  {method.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- Contact Form Section --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text & Info */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Let's Plan Your Trip
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                กรอกข้อมูลเบื้องต้นเพื่อให้ทีมงานของเราช่วยวางแผนการเดินทางที่เหมาะสมกับงบประมาณและความต้องการของคุณ
                เราจะติดต่อกลับโดยเร็วที่สุด
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-2xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-cyan-500">
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
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Fast Response</p>
                    <p className="text-sm text-slate-500">Within 24 Hours</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-2xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-cyan-500">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Expert Team</p>
                    <p className="text-sm text-slate-500">
                      10+ Years Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100 rounded-bl-[100%] -mr-16 -mt-16 opacity-50 pointer-events-none"></div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      ชื่อผู้ติดต่อ *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className={`w-full px-5 py-3 rounded-xl border-2 bg-slate-50 focus:bg-white transition-all outline-none ${errors.name ? "border-red-300 focus:border-red-500" : "border-slate-100 focus:border-cyan-500"}`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      อีเมล *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                      className={`w-full px-5 py-3 rounded-xl border-2 bg-slate-50 focus:bg-white transition-all outline-none ${errors.email ? "border-red-300 focus:border-red-500" : "border-slate-100 focus:border-cyan-500"}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      เบอร์โทรศัพท์
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="08x-xxx-xxxx"
                      className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-cyan-500 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      จำนวนผู้เดินทาง
                    </label>
                    <select
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-cyan-500 transition-all outline-none text-slate-600"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3-5">3-5 People</option>
                      <option value="6-10">6-10 People</option>
                      <option value="10+">10+ Group</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      จุดหมายปลายทาง *
                    </label>
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      placeholder="e.g. Japan, Krabi"
                      className={`w-full px-5 py-3 rounded-xl border-2 bg-slate-50 focus:bg-white transition-all outline-none ${errors.destination ? "border-red-300 focus:border-red-500" : "border-slate-100 focus:border-cyan-500"}`}
                    />
                    {errors.destination && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.destination}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      วันที่เดินทาง (โดยประมาณ)
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-cyan-500 transition-all outline-none text-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    รายละเอียดเพิ่มเติม *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Tell us about your preferences, budget, or special requests..."
                    className={`w-full px-5 py-3 rounded-xl border-2 bg-slate-50 focus:bg-white transition-all outline-none resize-none ${errors.message ? "border-red-300 focus:border-red-500" : "border-slate-100 focus:border-cyan-500"}`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending Request...
                    </>
                  ) : (
                    "Send Request"
                  )}
                </button>

                <p className="text-center text-xs text-slate-400 mt-4">
                  We respect your privacy. Your information is safe with us.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Common Questions
            </h2>
            <p className="text-slate-600">เรื่องน่ารู้ก่อนการเดินทาง</p>
          </div>

          <div className="grid gap-4">
            {[
              {
                q: "How do I book a trip?",
                a: "Simply fill out the form above or contact us via Line/Phone. Our team will discuss your preferences and send a custom itinerary.",
              },
              {
                q: "Can I customize the tour package?",
                a: "Absolutely! We specialize in tailor-made trips. You can choose hotels, activities, and duration that fit your style.",
              },
              {
                q: "Do you help with Visa applications?",
                a: "Yes, we provide full support for visa applications as part of our premium packages, including document review and appointment booking.",
              },
              {
                q: "What is your cancellation policy?",
                a: "Cancellation terms depend on the specific package and airline rules. We will provide full details before booking confirmation.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-cyan-200 transition-colors"
              >
                <h3 className="font-bold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
