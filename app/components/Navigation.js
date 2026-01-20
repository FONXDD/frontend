"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      // ปรับค่า Scroll ให้ effect ทำงานไวขึ้น
      setIsScrolled(window.scrollY > 20);
    };

    const checkAuthStatus = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };
    
    checkAuthStatus();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("storage", checkAuthStatus);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("storage", checkAuthStatus);
    };
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    closeMobileMenu();
    router.push("/");
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }, // เปลี่ยนจาก Contact เป็น Work ให้ดู Pro ขึ้น
  ];

  return (
    <>
      {/* Container หลักกำหนดตำแหน่ง fixed
        top-4 หรือ top-6 เพื่อให้ลอยห่างจากขอบบน
      */}
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
        
        <nav
          className={`relative w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled
              ? "max-w-5xl bg-white/70 backdrop-blur-xl shadow-xl shadow-black/5 border border-white/40"
              : "max-w-6xl bg-white/60 backdrop-blur-md shadow-lg shadow-black/5 border border-white/20"
          } rounded-full py-3 px-2 sm:px-3 flex items-center justify-between`}
        >
          {/* --- LEFT: LOGO --- */}
          <div className="flex items-center pl-4 sm:pl-6">
            <Link href="/" className="group flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm transform group-hover:rotate-12 transition-transform duration-300">
                F
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-black">
                FONXDD
              </span>
            </Link>
          </div>

          {/* --- CENTER: MENU (Desktop) --- */}
          {/* ย้ายมาอยู่ตรงกลาง แยกส่วนชัดเจน */}
          <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-1 bg-gray-100/50 p-1.5 rounded-full border border-gray-200/50">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-5 py-1.5 text-sm font-medium text-gray-500 hover:text-black hover:bg-white rounded-full transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* --- RIGHT: ACTIONS --- */}
          <div className="flex items-center gap-2 pr-2 sm:pr-3">
            {/* Search Button (Circle) */}
            <button className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-black transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>

            {/* Auth Actions */}
            <div className="hidden md:flex items-center gap-2">
               {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-5 py-2.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-full text-sm font-bold transition-all"
                  >
                    <span>Logout</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                  </button>
               ) : (
                 <>
                   <Link href="/login" className="px-5 py-2.5 text-sm font-bold text-slate-700 hover:text-black transition-colors">
                     Log in
                   </Link>
                   <Link href="/register" className="px-6 py-2.5 bg-black text-white rounded-full text-sm font-bold shadow-lg shadow-black/20 hover:scale-105 hover:shadow-xl transition-all duration-300">
                     Start Now
                   </Link>
                 </>
               )}
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-800 bg-gray-100/50 hover:bg-gray-200 rounded-full transition-all"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* --- Mobile Menu Fullscreen Overlay (เปลี่ยนสไตล์เป็น Modal) --- */}
      <div
        className={`fixed inset-0 z-40 bg-white/90 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden flex flex-col justify-center items-center ${
          isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-8"
        }`}
      >
        <button 
          onClick={closeMobileMenu}
          className="absolute top-8 right-8 p-2 text-gray-500 hover:text-black bg-gray-100 rounded-full"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="w-full max-w-sm px-6 space-y-6 text-center">
          <div className="space-y-3">
            {menuItems.map((item, idx) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                className="block text-3xl font-black text-slate-900 hover:text-indigo-600 transition-colors tracking-tight"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="h-px w-20 bg-gray-200 mx-auto my-8"></div>

          <div className="flex flex-col gap-3">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="w-full py-4 text-white bg-red-600 rounded-2xl font-bold text-lg shadow-xl shadow-red-200"
              >
                Sign Out
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={closeMobileMenu}
                  className="w-full py-4 text-slate-700 bg-gray-50 hover:bg-gray-100 rounded-2xl font-bold text-lg border border-gray-100"
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  onClick={closeMobileMenu}
                  className="w-full py-4 text-white bg-black rounded-2xl font-bold text-lg shadow-xl shadow-black/20"
                >
                  Create Account
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}