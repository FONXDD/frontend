import React from "react";

export default function Home() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <span style={{ fontSize: 48 }} role="img" aria-label="service">🛠️</span>
        <h1 className="mb-2 text-success">Service Page</h1>
        <p className="text-muted">บริการของเราพร้อมดูแลคุณ</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <span style={{ fontSize: 36 }} role="img" aria-label="consult">💡</span>
              <h5 className="card-title mt-3">ให้คำปรึกษา</h5>
              <p className="card-text">บริการให้คำปรึกษาด้านเทคนิคและการใช้งานระบบอย่างมืออาชีพ</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <span style={{ fontSize: 36 }} role="img" aria-label="support">🤝</span>
              <h5 className="card-title mt-3">บริการหลังการขาย</h5>
              <p className="card-text">ดูแลและแก้ไขปัญหาหลังการขายอย่างรวดเร็วและใส่ใจ</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <span style={{ fontSize: 36 }} role="img" aria-label="custom">⚙️</span>
              <h5 className="card-title mt-3">ปรับแต่งตามความต้องการ</h5>
              <p className="card-text">ออกแบบและปรับแต่งบริการให้เหมาะสมกับธุรกิจของคุณ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
