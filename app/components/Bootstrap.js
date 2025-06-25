'use client';
import {useEffect} from 'react';

export default function Bootstrapjs() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      {/* สามารถวาง HTML ที่ใช้ Bootstrap Effect ได้ที่นี่ */}
    </>
  );
}