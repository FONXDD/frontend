"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
          buttonColor: "bg-cyan-600 hover:bg-cyan-700",
        };
    }
  };

  const styles = getModalStyles();

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-[2rem] shadow-2xl max-w-sm w-full mx-auto transform transition-all scale-100 p-8 text-center border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
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

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/admin/users");
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "กรุณากรอกชื่อผู้ใช้";
    if (!formData.password) newErrors.password = "กรุณากรอกรหัสผ่าน";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://backend016.vercel.app/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: formData.username,
            password: formData.password,
          }),
        },
      );

      if (response.ok) {
        const result = await response.json();
        if (result.token) localStorage.setItem("token", result.token);

        showModal("success", "Welcome Back!", "กำลังพาคุณเข้าสู่ระบบ...");

        setTimeout(() => {
          window.location.href = "/admin/users";
        }, 1500);
      } else {
        const error = await response.json();
        showModal(
          "error",
          "Login Failed",
          error.message || "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
        );
      }
    } catch (error) {
      showModal(
        "error",
        "Connection Error",
        "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden flex flex-col">
      <Modal {...modal} onClose={closeModal} />

      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Navbar Placeholder (Back to Home) */}
      <div className="absolute top-0 left-0 w-full p-6 z-20">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-cyan-600 transition-colors font-bold"
          >
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-4 relative z-10">
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 w-full max-w-5xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
          {/* Left Side: Image/Branding */}
          <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative items-center justify-center p-12 overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-1000"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-black text-white mb-4 tracking-tight">
                FONXDD
                <span className="text-cyan-400">.</span>
              </h2>
              <p className="text-slate-300 text-lg max-w-xs mx-auto leading-relaxed">
                Discover new destinations and create unforgettable memories with
                us.
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <div className="mb-10">
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2">
                Welcome Back
              </h1>
              <p className="text-slate-500">
                Please enter your details to sign in.
              </p>
            </div>

            <div className="space-y-6">
              {/* Username */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter your username"
                    className={`w-full pl-12 pr-4 py-3.5 bg-slate-50 border-2 rounded-xl focus:bg-white transition-all outline-none font-medium text-slate-900 ${
                      errors.username
                        ? "border-red-300 focus:border-red-500"
                        : "border-slate-100 focus:border-cyan-500"
                    }`}
                  />
                </div>
                {errors.username && (
                  <p className="text-red-500 text-xs mt-1 ml-1">
                    {errors.username}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
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
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="••••••••"
                    className={`w-full pl-12 pr-4 py-3.5 bg-slate-50 border-2 rounded-xl focus:bg-white transition-all outline-none font-medium text-slate-900 ${
                      errors.password
                        ? "border-red-300 focus:border-red-500"
                        : "border-slate-100 focus:border-cyan-500"
                    }`}
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1 ml-1">
                    {errors.password}
                  </p>
                )}
              </div>

              <div className="flex justify-end">
                <a
                  href="#"
                  className="text-sm font-bold text-cyan-600 hover:text-cyan-700 transition-colors"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>

              <div className="text-center mt-8">
                <p className="text-slate-500 text-sm">
                  Don't have an account?{" "}
                  <Link
                    href="/register"
                    className="text-cyan-600 font-bold hover:text-cyan-700 transition-colors"
                  >
                    Create Account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
