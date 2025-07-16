
import React from "react";

export default function Page() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4" style={{ maxWidth: 500, width: "100%" }}>
        <div className="text-center mb-4">
          <span style={{ fontSize: 48 }} role="img" aria-label="contact">📞</span>
          <h1 className="mb-1 text-success">Contact Us</h1>
          <p className="text-muted">ติดต่อสอบถามหรือส่งข้อความถึงเราได้ที่นี่</p>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">ชื่อของคุณ</label>
            <input type="text" className="form-control" id="name" placeholder="กรอกชื่อของคุณ" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">อีเมล</label>
            <input type="email" className="form-control" id="email" placeholder="example@email.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">ข้อความ</label>
            <textarea className="form-control" id="message" rows="3" placeholder="พิมพ์ข้อความของคุณ"></textarea>
          </div>
          <button type="submit" className="btn btn-success w-100">ส่งข้อความ</button>
        </form>
        <div className="mt-4 text-center text-secondary" style={{ fontSize: 14 }}>
          <div>โทร: 02-123-4567</div>
          <div>อีเมล: info@example.com</div>
        </div>
      </div>
    </div>
  );
}
