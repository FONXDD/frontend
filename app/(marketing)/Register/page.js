'use client'
import { useState } from 'react'
import Swal from 'sweetalert2'

export default function Register() {
  const [firstname, setFirstname] = useState('')
  const [fullname, setFullname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
      method: 'POST',
      headers: {
        Accept : 'application/json',
      },
      body: JSON.stringify({ firstname, fullname, lastname, username, password }),
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-100 py-8">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
        <div className="text-center mb-6">
          <span style={{ fontSize: 48 }} role="img" aria-label="register">📝</span>
          <h1 className="text-2xl font-bold text-blue-700 mt-2 mb-1">สมัครสมาชิก</h1>
          <p className="text-gray-500 text-sm">กรอกข้อมูลเพื่อสร้างบัญชีใหม่</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">คำนำหน้าชื่อ</label>
            <select name="firstname" onChange={(e) => setFirstname(e.target.value)} className="w-full border border-blue-200 p-2 rounded focus:ring-2 focus:ring-blue-200" required>
              <option value="">เลือกคำนำหน้า</option>
              <option value="นาย">นาย</option>
              <option value="นาง">นาง</option>
              <option value="นางสาว">นางสาว</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">ชื่อ</label>
            <input
              type="text"
              placeholder="ชื่อ"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full border border-blue-200 p-2 rounded focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">นามสกุล</label>
            <input
              type="text"
              placeholder="นามสกุล"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="w-full border border-blue-200 p-2 rounded focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Username</label>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-blue-200 p-2 rounded focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-blue-200 p-2 rounded focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            สมัครสมาชิก
          </button>
        </form>
        <div className="mt-6 text-center">
          <a href="/" className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">กลับหน้าหลัก</a>
        </div>
      </div>
    </div>
  )
}