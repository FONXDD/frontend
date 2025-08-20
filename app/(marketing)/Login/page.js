'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import Swal from 'sweetalert2';

export default function Page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      console.log(username);

      if (data.token) {
        Swal.fire({
          icon: 'success',
          title: 'เข้าสู่ระบบสำเร็จ!',
          text: 'ยินดีต้อนรับเข้าสู่ระบบ',
          showConfirmButton: false,
          timer: 800,
        }).then(()=> {
          localStorage.setItem('token', data.token);
          localStorage.setItem('username', username);
          window.dispatchEvent(new Event('storage'));
          if (typeof onLoginSuccess === 'function') {
            onLoginSuccess();
          }
          router.push('/admin/users');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'เข้าสู่ระบบไม่สำเร็จ',
          text: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
          confirmButtonText: 'ลองใหม่อีกครั้ง'
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      Swal.fire({
        icon: 'error',
        title: 'เกิดข้อผิดพลาด',
        text: 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้',
        confirmButtonText: 'ตกลง'
      });
    }
  } // <-- ปิดฟังก์ชัน handleLogin ตรงนี้

  return (
    <>
    <br /><br /><br />
<div className="container">
<div className="card">
  <div className="card-header bg-success text-white">
    SignIn Form
  </div>
  <div className="card-body">

  <form className="row g-3" onSubmit={handleLogin}>
  <div className="col-md-12">
  <label className="form-label">Username</label>
    <div className="input-group">
      <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard"></i></span>
    <input type="text" className="form-control" id="formGroupExampleInput" defaultValue={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
  </div>
  </div>
  <div className="col-md-12">
  <label className="form-label">Password</label>
    <div className="input-group">
      <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard"></i></span>
    <input type="text" className="form-control" id="formGroupExampleInput2" defaultValue={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
  </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign In</button>
  </div>
  <div className="col-12">
    <Link href="/register">Create Account</Link> | <Link href="/">Forget Password</Link>
  </div>
  </form>
  </div>
  </div>


  </div>
    </>
  );
}
