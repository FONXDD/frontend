'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // อ่าน username ครั้งแรก
    setUserName(localStorage.getItem("username") || "");

    const handleStorage = (event) => {
      if (event.key === "username") {
        setUserName(event.newValue || "");
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">fronend</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/service">service</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/Login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/Register">Register</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          {/* แสดงชื่อผู้ใช้และปุ่ม logout เฉพาะหน้า /admin/users หลัง login สำเร็จ */}
          {userName && pathname.startsWith("/admin/users") && (
            <div className="d-flex align-items-center ms-3">
              <span className="navbar-text">{userName}</span>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("username");
                  setUserName("");
                  window.location.href = "/Login";
                }}
                className="btn btn-outline-danger ms-2">Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}