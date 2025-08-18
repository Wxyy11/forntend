'use client';

// Profile Card Component
function ProfileCard() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{ backgroundColor: '#d0f0ff' }} // พื้นหลังทั้งหน้า
    >
      <h1 className="text-5xl font-bold text-blue-700 mb-8 drop-shadow-lg text-center">
        เกี่ยวกับเรา
      </h1>
      
      <div
        className="card rounded-2xl shadow-2xl p-8 text-center max-w-md"
        style={{ backgroundColor: '#d0f0ff', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}
      >
        <div className="mb-6 flex justify-center">
          <img
            src="/ee.jpg"
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover"
            style={{
              boxShadow: '0 10px 20px rgba(0,0,0,0.4)', // เงานูน
              border: '4px solid #ffffff', // เส้นขอบสีขาว
              transform: 'translateY(-5px)', // ยกขึ้นนูน
            }}
          />
        </div>
        <h2
          className="text-2xl font-bold text-blue-700 mb-2"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}
        >
          นายศุภกิจ พลอยแดง
        </h2>
        <p className="text-gray-800">นักพัฒนาเว็บ / Web Developer</p>
      </div>

      {/* ภาพประกอบเล็ก ๆ */}
      <div className="mt-10 flex justify-center">
        <div className="w-32 h-32 bg-blue-400 rounded-full shadow-2xl animate-pulse"></div>
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <div className="container-fluid mt-5 shadow-sm" style={{ backgroundColor: '#d0f0ff' }}>
      <footer className="py-5 text-center">
        <p className="text-blue-700 fw-bold" style={{ textShadow: '1px 1px 2px #aaa' }}>
          © 2025 Company, Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

// Main About Page
export default function About() {
  return (
    <>
      <ProfileCard />
      <Footer />
    </>
  );
}
