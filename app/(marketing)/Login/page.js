
import React from "react";

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: 400, width: "100%" }}>
        <h2 className="mb-4 text-center">เข้าสู่ระบบ</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" placeholder="กรอกชื่อผู้ใช้" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="กรอกรหัสผ่าน" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">จำฉันไว้</label>
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-2">Login</button>
          <div className="text-center">
            <a href="#" className="me-2">สมัครสมาชิก</a>
            |
            <a href="#" className="ms-2">ลืมรหัสผ่าน</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
