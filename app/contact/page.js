'use client';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-blue-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-4xl font-extrabold text-red-500 mb-6">ติดต่อเรา</h1>
        <p className="text-gray-600 mb-10">สามารถติดตามหรือสอบถามข้อมูลเพิ่มเติมผ่านช่องทางด้านล่าง</p>

        <div className="space-y-10">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/suphakit.ploydang"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 text-blue-700 hover:scale-105 transition transform duration-200 hover:text-blue-900"
          >
            <FaFacebook className="text-6xl" />
            <span className="text-xl font-medium">Facebook</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/stxwitx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 text-pink-600 hover:scale-105 transition transform duration-200 hover:text-pink-800"
          >
            <FaInstagram className="text-6xl" />
            <span className="text-xl font-medium">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
}
