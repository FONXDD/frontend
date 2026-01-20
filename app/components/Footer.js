"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // ปรับเนื้อหาให้เข้ากับเว็บท่องเที่ยว
  const footerSections = {
    explore: {
      title: "Explore",
      links: [
        { name: "Destinations", href: "/destinations" },
        { name: "Tour Packages", href: "/tours" },
        { name: "Special Offers", href: "/offers" },
        { name: "Travel Guides", href: "/guides" },
        { name: "Flight Booking", href: "/flights" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Story", href: "/story" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Press", href: "/press" },
      ],
    },
    support: {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Contact Us", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Trust & Safety", href: "/safety" },
      ],
    },
  };

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988c6.62 0 11.987-5.367 11.987-11.988C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-2.458 0-4.467-2.01-4.467-4.468s2.009-4.467 4.467-4.467c2.458 0 4.467 2.009 4.467 4.467S10.907 16.988 8.449 16.988zM17.54 11.535h-2.906c.101-.461.157-.938.157-1.429c0-3.27-2.648-5.918-5.918-5.918s-5.918 2.648-5.918 5.918c0 .491.056.968.157 1.429H.206v8.852C.206 22.098 1.108 23 2.819 23h18.362c1.711 0 2.613-.902 2.613-2.613v-8.852z" />
        </svg>
      ),
    },
  ];

  const contactInfo = {
    address: "Chiang Mai 50200, Thailand",
    email: "hello@fonxdd.com",
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 relative overflow-hidden">
      {/* Background Gradient Element */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* --- Top Section: CTA & Newsletter --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for your next adventure?
            </h2>
            <p className="text-slate-400">
              Subscribe to our newsletter for exclusive deals, travel tips, and
              inspiration delivered straight to your inbox.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3.5 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <button className="px-8 py-3.5 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-900/20">
              Subscribe
            </button>
          </div>
        </div>

        <div className="h-px bg-slate-900 w-full mb-16"></div>

        {/* --- Main Footer Links --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column (2 cols width) */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <span className="text-3xl font-black text-white tracking-tight">
                FONXDD
                <span className="text-cyan-400 inline-block group-hover:-translate-y-1 transition-transform duration-300">
                  .
                </span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
              Your trusted partner in exploring the world. We curate the best
              travel experiences in Chiang Mai and beyond, tailored just for
              you.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-cyan-500 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-cyan-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm">{contactInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key} className="lg:col-span-1">
              <h3 className="text-white font-bold tracking-wide uppercase text-sm mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200 block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="border-t border-slate-900 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-sm text-slate-500">
              © {currentYear} FONXDD Co., Ltd. All rights reserved.
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-900 text-slate-400 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Made with love */}
            <div className="flex items-center space-x-1.5 text-sm text-slate-500">
              <span>Made with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>in Chiang Mai</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
