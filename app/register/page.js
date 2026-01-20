"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// --- Modal Component (Re-used for consistency) ---
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

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstname: "", // คำนำหน้า
    fullname: "", // ชื่อจริง
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",
    address: "",
    sex: "",
    birthday: "",
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
    if (!formData.firstname) newErrors.firstname = "กรุณาเลือกคำนำหน้า";
    if (!formData.fullname.trim()) newErrors.fullname = "กรุณากรอกชื่อจริง";
    if (!formData.lastname.trim()) newErrors.lastname = "กรุณากรอกนามสกุล";
    if (!formData.username.trim()) newErrors.username = "กรุณากรอกชื่อผู้ใช้";
    if (!formData.password) newErrors.password = "กรุณากรอกรหัสผ่าน";
    else if (formData.password.length < 6)
      newErrors.password = "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "รหัสผ่านไม่ตรงกัน";
    if (!formData.address.trim()) newErrors.address = "กรุณากรอกที่อยู่";
    if (!formData.sex) newErrors.sex = "กรุณาเลือกเพศ";
    if (!formData.birthday) newErrors.birthday = "กรุณาเลือกวันเกิด";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("https://backend016.vercel.app/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: formData.firstname,
          fullname: formData.fullname,
          lastname: formData.lastname,
          username: formData.username,
          password: formData.password,
          address: formData.address,
          sex: formData.sex,
          birthday: formData.birthday,
        }),
      });

      if (response.ok) {
        showModal(
          "success",
          "Registration Successful",
          "สมัครสมาชิกสำเร็จ! ยินดีต้อนรับสู่ FONXDD",
        );
        setFormData({
          firstname: "",
          fullname: "",
          lastname: "",
          username: "",
          password: "",
          confirmPassword: "",
          address: "",
          sex: "",
          birthday: "",
        });
        setTimeout(() => {
            router.push("/login")
        }, 2000);
      } else {
        const error = await response.json();
        showModal(
          "error",
          "Registration Failed",
          error.message || "ไม่สามารถสมัครสมาชิกได้",
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

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Modal {...modal} onClose={closeModal} />

      {/* --- Left Side: Image & Branding (Hidden on mobile) --- */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 relative overflow-hidden items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>

        <div className="relative z-10 p-12 text-white max-w-lg">
          <Link href="/" className="inline-block mb-8 group">
            <span className="text-5xl font-black tracking-tighter">
              FONXDD
              <span className="text-cyan-400 group-hover:animate-bounce inline-block">
                .
              </span>
            </span>
          </Link>
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Start your next <br />{" "}
            <span className="text-cyan-400">adventure</span> with us.
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Create an account to unlock exclusive deals, personalized trip
            planning, and join our community of travelers.
          </p>
          <div className="flex gap-3">
            <div className="w-12 h-1 bg-cyan-500 rounded-full"></div>
            <div className="w-4 h-1 bg-slate-600 rounded-full"></div>
            <div className="w-4 h-1 bg-slate-600 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* --- Right Side: Form Container --- */}
      <div className="w-full lg:w-1/2 flex flex-col h-screen overflow-y-auto">
        {/* Navbar / Back Button */}
        <div className="p-6 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
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
            Back
          </Link>
          <p className="text-sm text-slate-500">
            Already a member?{" "}
            <Link
              href="/login"
              className="text-cyan-600 font-bold hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>

        <div className="flex-1 px-6 sm:px-12 lg:px-20 pb-12 flex flex-col justify-center">
          <div className="max-w-xl mx-auto w-full">
            <h1 className="text-3xl font-black text-slate-900 mb-2">
              Create Account
            </h1>
            <p className="text-slate-500 mb-8">
              Please fill in your details to sign up.
            </p>

            <div className="space-y-5">
              {/* Name Section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-1">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1 ml-1">
                    Title
                  </label>
                  <div className="relative">
                    <select
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-slate-50 border-2 rounded-xl outline-none appearance-none font-medium text-slate-700 transition-all ${errors.firstname ? "border-red-300" : "border-slate-100 focus:border-cyan-500 focus:bg-white"}`}
                    >
                      <option value="">Select</option>
                      <option value="นาย">Mr.</option>
                      <option value="นาง">Mrs.</option>
                      <option value="นางสาว">Ms.</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-500">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1 ml-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleInputChange}
                    placeholder="John"
                    className={`w-full px-4 py-3 bg-slate-50 border-2 rounded-xl outline-none font-medium text-slate-900 transition-all ${errors.fullname ? "border-red-300" : "border-slate-100 focus:border-cyan-500 focus:bg-white"}`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1 ml-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  className={`w-full px-4 py-3 bg-slate-50 border-2 rounded-xl outline-none font-medium text-slate-900 transition-all ${errors.lastname ? "border-red-300" : "border-slate-100 focus:border-cyan-500 focus:bg-white"}`}
                />
              </div>

              {/* Account Info */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1 ml-1">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="johndoe123"
                  className={`w-full px-4 py-3 bg-slate-50 border-2 rounded-xl outline-none font-medium text-slate-900 transition-all ${errors.username ? "border-red-300" : "border-slate-100 focus:border-cyan-500 focus:bg-white"}`}
                />
                {errors.username && (
                  <p className="text-red-500 text-xs mt-1 ml-1">
                    {errors.username}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1 ml-1">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className={`w-full px-4 py-3 bg-slate-50 border-2 rounded-xl outline-none font-medium text-slate-900 transition-all ${errors.password ? "border-red-300" : "border-slate-100 focus:border-cyan-500 focus:bg-white"}`}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1 ml-1">
                      {errors.password}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1 ml-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className={`w-full px-4 py-3 bg-slate-50 border-2 rounded-xl outline-none font-medium text-slate-900 transition-all ${errors.confirmPassword ? "border-red-300" : "border-slate-100 focus:border-cyan-500 focus:bg-white"}`}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1 ml-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1 ml-1">
                    Gender
                  </label>
                  <div className="relative">
                    <select
                      name="sex"
                      value={formData.sex}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-slate-50 border-2 rounded-xl outline-none appearance-none font-medium text-slate-700 transition-all ${errors.sex ? "border-red-300" : "border-slate-100 focus:border-cyan-500 focus:bg-white"}`}
                    >
                      <option value="">Select Gender</option>
                      <option value="ชาย">Male</option>
                      <option value="หญิง">Female</option>
                      <option value="อื่นๆ">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-500">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1 ml-1">
                    Birthday
                  </label>
                  <input
                    type="date"
                    name="birthday"
                    value={formData.birthday}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-50 border-2 rounded-xl outline-none font-medium text-slate-700 transition-all ${errors.birthday ? "border-red-300" : "border-slate-100 focus:border-cyan-500 focus:bg-white"}`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1 ml-1">
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows="2"
                  placeholder="Your full address..."
                  className={`w-full px-4 py-3 bg-slate-50 border-2 rounded-xl outline-none resize-none font-medium text-slate-900 transition-all ${errors.address ? "border-red-300" : "border-slate-100 focus:border-cyan-500 focus:bg-white"}`}
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full py-4 mt-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 transform active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Creating Account...
                  </>
                ) : (
                  "Sign Up"
                )}
              </button>

              <p className="text-center text-xs text-slate-400 mt-6">
                By signing up, you agree to our{" "}
                <a href="#" className="underline hover:text-slate-600">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="underline hover:text-slate-600">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
