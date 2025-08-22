'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FaUser, FaLock } from 'react-icons/fa';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://backend-nextjs-virid.vercel.app/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem('token', data.token);

        Swal.fire({
          icon: 'success',
          title: 'เข้าสู่ระบบสำเร็จ!',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          // เปลี่ยนหน้าและรีโหลดหน้าใหม่
          window.location.href = '/admin/users';
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'เข้าสู่ระบบไม่สำเร็จ',
          text: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      Swal.fire({
        icon: 'error',
        title: 'เกิดข้อผิดพลาด',
        text: 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้',
      });
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#0d3b2e',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 0',
      }}
    >
      <div
        className="shadow-lg"
        style={{
          backgroundColor: '#123d2f',
          border: '2px solid #d4af37',
          borderRadius: '20px',
          padding: '3rem',
          width: '100%',
          maxWidth: '450px',
          color: '#d4af37',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            textShadow: '2px 2px 10px rgba(0,0,0,0.6)',
          }}
        >
          เข้าสู่ระบบ
        </h2>

        <form onSubmit={handleLogin}>
          {/* Username Input */}
          <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
            <label htmlFor="usernameInput" style={{ fontWeight: 'bold' }}>
              ชื่อผู้ใช้
            </label>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
              <FaUser style={{ marginRight: '0.5rem', color: '#d4af37' }} />
              <input
                type="text"
                id="usernameInput"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{
                  flex: 1,
                  padding: '0.5rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid #d4af37',
                  backgroundColor: '#0d3b2e',
                  color: '#fff',
                }}
              />
            </div>
          </div>

          {/* Password Input */}
          <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
            <label htmlFor="passwordInput" style={{ fontWeight: 'bold' }}>
              รหัสผ่าน
            </label>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
              <FaLock style={{ marginRight: '0.5rem', color: '#d4af37' }} />
              <input
                type="password"
                id="passwordInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  flex: 1,
                  padding: '0.5rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid #d4af37',
                  backgroundColor: '#0d3b2e',
                  color: '#fff',
                }}
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '10px',
              border: 'none',
              backgroundColor: '#d4af37',
              color: '#123d2f',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            เข้าสู่ระบบ
          </button>

          {/* Link to Register */}
          <p style={{ marginTop: '1.5rem', color: '#fff' }}>
            ยังไม่มีบัญชีใช่ไหม?{' '}
            <Link
              href="/register"
              style={{ color: '#d4af37', fontWeight: 'bold', textDecoration: 'none' }}
            >
              สมัครสมาชิก
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
