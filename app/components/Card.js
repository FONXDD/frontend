'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import 'flowbite/dist/flowbite.min.css';
import 'flowbite';

export default function Cards() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('flowbite');
    }
  }, []);

  return (
<div className="max-w-screen-xl mx-auto mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
  {/* Card 1 */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <Image
      className="w-full h-48 object-cover"
      src="/images/cards/1.jpg"
      alt="Example 1"
      width={400}
      height={200}
    />
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        ชิวาว่า
      </h2>
      <p className="text-gray-600 mb-4">
        น้องวาๆ
      </p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Read More
      </button>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <Image
      className="w-full h-48 object-cover"
      src="/images/cards/2.jpg"
      alt="Example 2"
      width={400}
      height={200}
    />
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        กระจกฟิล์ม
      </h2>
      <p className="text-gray-600 mb-4">
        เอาไว้เช็ด
      </p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Read More
      </button>
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <Image
      className="w-full h-48 object-cover"
      src="/images/cards/3.jpg"
      alt="Example 3"
      width={400}
      height={200}
    />
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        น้องลีโอ นกคมหลี๋
      </h2>
      <p className="text-gray-600 mb-4">
        หมวกกันน็อกไซต์ M
      </p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Read More
      </button>
    </div>
  </div>

  {/* Card 4 */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <Image
      className="w-full h-48 object-cover"
      src="/images/cards/4.jpg"
      alt="Example 4"
      width={400}
      height={200}
    />
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        ฉันเขินนะ
      </h2>
      <p className="text-gray-600 mb-4">
        อะไ
      </p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Read More
      </button>
    </div>
  </div>
</div>
  );
}