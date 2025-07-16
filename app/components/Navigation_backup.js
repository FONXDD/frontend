// app/components/Navigation.tsx
'use client';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav
      style={{
        padding: '1rem 2rem',
        borderBottom: '1px solid #e0e0e0',
        background: 'linear-gradient(90deg, #e0eafc 0%, #cfdef3 100%)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1200, margin: '0 auto' }}>
        <span style={{ fontWeight: 700, fontSize: 22, color: '#1e88e5', letterSpacing: 1 }}>Frontend</span>
        <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><Link href="/">หน้าแรก</Link></li>
          <li><Link href="/about">เกี่ยวกับ</Link></li>
          <li><Link href="/contact">ติดต่อ</Link></li>
          <li><Link href="/Login">Login</Link></li>
          <li><Link href="/Register">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
}