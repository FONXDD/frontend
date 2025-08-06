'use client'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { useParams, useRouter } from 'next/navigation'
export default function Page() {
  const router = useRouter()
  const params = useParams();
  const id = params.id;
  const [firstname, setFirstname] = useState('')
  const [fullname, setFullname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [items, setItems] = useState([]);
    useEffect(() => {
        async function getUsers() {
          try {
            const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`);
            if (!res.ok) {
              console.error('Failed to fetch data');
              return;
            }
            const data = await res.json();
            setItems(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
     
      getUsers();
      //const interval  = setInterval(getUsers, 1000);
      //return () => clearInterval(interval);
    }, []);
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
    const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
      method: 'PUT',
      headers: {
        Accept : 'application/json',
      },
      body: JSON.stringify({ id, firstname, fullname, lastname, username, password }),
    })
    const result = await res.json();
    console.log(result);
    if (res.ok) {
      Swal.fire({
        icon: 'success',
        title: '<h3>ปรับปรุงข้อมูลเรียบร้อยแล้ว</h3>',
        showConfirmButton: false,
        timer: 2000
        }).then(function () {
        router.push('/register')
      });
      setFirstname('')
      setFullname('')
      setLastname('')
      setUsername('')
      setPassword('')
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'เกิดข้อผิดพลาด!',
        icon: 'error',
        confirmButtonText: 'ตกลง'
      })
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'ข้อผิดพลาดเครือข่าย',
      text: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้',
    })
  }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-100 py-8">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
        <div className="text-center mb-6">
          <span style={{ fontSize: 44 }} role="img" aria-label="edit">✏️</span>
          <h1 className="text-2xl font-bold text-blue-700 mt-2 mb-1">แก้ไขข้อมูลสมัครสมาชิก {id}</h1>
          <p className="text-gray-500 text-sm">ปรับปรุงข้อมูลสมาชิกของคุณ</p>
        </div>
        {items.map((item) => (
          <form key={item.id} onSubmit={handleUpdateSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">คำนำหน้าชื่อ</label>
              <select name="firstname" onChange={(e) => setFirstname(e.target.value)} className="w-full border border-blue-200 p-2 rounded focus:ring-2 focus:ring-blue-200" required defaultValue={item.firstname}>
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
                defaultValue={item.fullname}
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
                defaultValue={item.lastname}
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
                defaultValue={item.username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-blue-200 p-2 rounded focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="text"
                placeholder="password"
                defaultValue={item.password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-blue-200 p-2 rounded focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white p-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
            >
              ปรับปรุงข้อมูล
            </button>
          </form>
        ))}
      </div>
    </div>
  )
}