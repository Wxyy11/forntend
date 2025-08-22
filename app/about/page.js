'use client';

// Profile Card Component
function ProfileCard() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{ backgroundColor: '#0d3b2e' }} // พื้นหลังเข้มเขียว
    >
      <h1
        className="text-5xl font-bold mb-8 drop-shadow-lg text-center"
        style={{ color: '#d4af37', textShadow: '2px 2px 10px rgba(0,0,0,0.6)' }}
      >
        เกี่ยวกับเรา
      </h1>

      <div
        className="card rounded-2xl shadow-2xl p-8 text-center max-w-md"
        style={{
          backgroundColor: '#123d2f',
          boxShadow: '0 10px 25px rgba(212,175,55,0.5)',
          border: '2px solid #d4af37',
        }}
      >
        <div className="mb-6 flex justify-center">
          <img
            src="/dddd.jpg"
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover"
            style={{
              boxShadow: '0 10px 25px rgba(212,175,55,0.7)',
              border: '4px solid #d4af37',
              transform: 'translateY(-5px)',
            }}
          />
        </div>
        <h2
          className="text-2xl font-bold mb-2"
          style={{ color: '#d4af37', textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}
        >
          นายศุภกิจ พลอยแดง
        </h2>
        <p className="text-light">นักพัฒนาเว็บ / Web Developer</p>
      </div>

      {/* ภาพประกอบเล็ก ๆ */}
      <div className="mt-10 flex justify-center">
        <div
          className="w-32 h-32 rounded-full shadow-2xl animate-pulse"
          style={{ backgroundColor: '#d4af37', opacity: 0.3 }}
        ></div>
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <div
      className="container-fluid mt-5 shadow-sm"
      style={{ backgroundColor: '#0d3b2e', boxShadow: '0 -5px 20px rgba(0,0,0,0.4)' }}
    >
      <footer className="py-5 text-center">
        <p
          className="fw-bold"
          style={{ color: '#d4af37', textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}
        >
          © 2025 Rolex Store, Inc. All rights reserved.
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
