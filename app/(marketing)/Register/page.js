
import React from "react";

const Register = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: 500, width: "100%" }}>
        <h2 className="mb-4 text-center">สมัครสมาชิก</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">ชื่อผู้ใช้</label>
            <input type="text" className="form-control" id="username" placeholder="กรอกชื่อผู้ใช้" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">รหัสผ่าน</label>
            <input type="password" className="form-control" id="password" placeholder="กรอกรหัสผ่าน" />
          </div>
          <div className="mb-3">
            <label htmlFor="prefix" className="form-label">คำนำหน้าชื่อ</label>
            <select className="form-select" id="prefix">
              <option value="">เลือกคำนำหน้า</option>
              <option value="mr">นาย</option>
              <option value="mrs">นาง</option>
              <option value="ms">นางสาว</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">ชื่อ</label>
            <input type="text" className="form-control" id="firstname" placeholder="กรอกชื่อ" />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">นามสกุล</label>
            <input type="text" className="form-control" id="lastname" placeholder="กรอกนามสกุล" />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">ที่อยู่</label>
            <textarea className="form-control" id="address" rows="2" placeholder="กรอกที่อยู่"></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label d-block">เพศ</label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="male" value="male" />
              <label className="form-check-label" htmlFor="male">ชาย</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="female" value="female" />
              <label className="form-check-label" htmlFor="female">หญิง</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="other" value="other" />
              <label className="form-check-label" htmlFor="other">อื่น ๆ</label>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="birthdate" className="form-label">วันเกิด</label>
            <input type="date" className="form-control" id="birthdate" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="accept" />
            <label className="form-check-label" htmlFor="accept">ยอมรับเงื่อนไข</label>
          </div>
          <button type="submit" className="btn btn-success w-100">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
