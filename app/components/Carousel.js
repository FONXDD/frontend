export default function Carousel() {
  return (
    <div className="py-4">
      <div
        id="carouselExample"
        className="carousel slide carousel-fade h-100 w-100"
        style={{ height: "100%", width: "100%" }}
      >
        <div className="carousel-inner h-100 w-100">
          <div className="carousel-item active position-relative h-100 w-100">
            <img
              src="/images/sliders/sliders-01.png"
              className="d-block w-100 h-100"
              alt="สไลด์ 1"
              style={{ height: "100vh", objectFit: "cover", filter: "brightness(0.85)" }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-3 animate__animated animate__fadeInDown">
              <h3 className="fw-bold text-warning">ยินดีต้อนรับสู่เว็บไซต์ของเรา</h3>
              <p className="mb-0 text-light">บริการครบวงจร ตอบโจทย์ทุกความต้องการ</p>
            </div>
          </div>
          <div className="carousel-item position-relative h-100 w-100">
            <img
              src="/images/sliders/sliders-02.png"
              className="d-block w-100 h-100"
              alt="สไลด์ 2"
              style={{ height: "100vh", objectFit: "cover", filter: "brightness(0.85)" }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-3 animate__animated animate__fadeInDown">
              <h3 className="fw-bold text-info">เทคโนโลยีทันสมัย</h3>
              <p className="mb-0 text-light">เรานำเสนอเทคโนโลยีใหม่ล่าสุดเพื่อคุณ</p>
            </div>
          </div>
          <div className="carousel-item position-relative h-100 w-100">
            <img
              src="/images/sliders/sliders-03.png"
              className="d-block w-100 h-100"
              alt="สไลด์ 3"
              style={{ height: "100vh", objectFit: "cover", filter: "brightness(0.85)" }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-3 animate__animated animate__fadeInDown">
              <h3 className="fw-bold text-success">ทีมงานมืออาชีพ</h3>
              <p className="mb-0 text-light">พร้อมดูแลและให้คำปรึกษาตลอดเวลา</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}