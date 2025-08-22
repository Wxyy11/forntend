'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const [token, setToken] = useState(null);

  useEffect(() => {
    // อ่าน token ตอน mount
    const savedToken = localStorage.getItem('token');
    setToken(savedToken);

    // ฟัง event เปลี่ยนแปลง localStorage
    const handleStorageChange = () => {
      const updatedToken = localStorage.getItem('token');
      setToken(updatedToken);
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    router.push('/login');
  };

  return (
    <nav
      className="navbar navbar-expand-lg shadow-lg rounded mb-4"
      style={{
        background: 'linear-gradient(90deg, #014421, #026d33)',
        borderBottom: '2px solid #d4af37',
      }}
    >
      <div className="container-fluid">
        {/* โลโก้ */}
        <Link
          href="/"
          className="navbar-brand d-flex align-items-center gap-2 fw-bold"
          style={{
            textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
            fontSize: '1.4rem',
            color: '#d4af37',
          }}
        >
          <img
            src="/fdd.jfif"
            alt="Logo"
            width={40}
            height={40}
            className="d-inline-block align-text-top rounded-circle shadow-sm"
          />
          Rolex
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* เมนู */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {[
              { name: 'หน้าแรก', path: '/' },
              { name: 'เกี่ยวกับเรา', path: '/about' },
              { name: 'บริการของเรา', path: '/service' },
              { name: 'ติดต่อเรา', path: '/contact' },
            ].map((item, idx) => (
              <li key={idx} className="nav-item">
                <Link
                  href={item.path}
                  className="nav-link fw-semibold"
                  style={{ color: '#d4af37' }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* ช่องค้นหา */}
          <form className="d-flex me-3" role="search">
            <input
              className="form-control me-2 shadow-sm"
              type="search"
              placeholder="ค้นหา..."
              style={{
                borderRadius: '10px',
                border: '1px solid #d4af37',
                backgroundColor: '#014421',
                color: '#fff',
              }}
            />
            <button
              className="btn shadow-sm"
              type="submit"
              style={{
                borderRadius: '10px',
                background: '#d4af37',
                color: '#014421',
              }}
            >
              Search
            </button>
          </form>

          {/* ปุ่ม Login / Logout / Register */}
          <div className="d-flex gap-2">
            {token ? (
              <button
                onClick={handleLogout}
                className="btn shadow-sm"
                style={{
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  background: '#014421',
                  border: '2px solid #d4af37',
                  color: '#d4af37',
                }}
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  className="btn shadow-sm"
                  style={{
                    borderRadius: '10px',
                    fontWeight: 'bold',
                    background: '#014421',
                    border: '2px solid #d4af37',
                    color: '#d4af37',
                  }}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="btn shadow-sm"
                  style={{
                    borderRadius: '10px',
                    fontWeight: 'bold',
                    background: '#d4af37',
                    color: '#014421',
                  }}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
