'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error('ไม่สามารถโหลดข้อมูลผู้ใช้ได้');
      }

      const users = await res.json();

      const foundUser = users.find(
        (user) => user.username === username && user.password === password
      );

      if (foundUser) {
        Swal.fire({
          icon: 'success',
          title: 'เข้าสู่ระบบสำเร็จ!',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          router.push('/register');
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
    <section
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      {/* Overlay มืดบางๆ */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}
      ></div>

      {/* กล่องฟอร์ม */}
      <div
        className="card shadow-lg bg-body-tertiary"
        style={{
          width: '100%',
          maxWidth: '500px',
          position: 'relative',
          zIndex: 2,
          borderRadius: '20px',
        }}
      >
        <div className="card-body p-5">
          <h2 className="fw-bold mb-5 text-center text-primary">เข้าสู่ระบบ</h2>
          <form onSubmit={handleLogin}>
            <div className="form-outline mb-4 text-start">
              <input
                type="text"
                id="usernameInput"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label className="form-label" htmlFor="usernameInput">ชื่อผู้ใช้</label>
            </div>

            <div className="form-outline mb-4 text-start">
              <input
                type="password"
                id="passwordInput"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="form-label" htmlFor="passwordInput">รหัสผ่าน</label>
            </div>

            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input me-2" type="checkbox" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">จำฉันไว้</label>
            </div>

            <p className="small mb-4 text-end">
              <a href="#!" className="text-decoration-none">ลืมรหัสผ่าน?</a>
            </p>

            <button type="submit" className="btn btn-primary btn-block w-100 mb-4">
              เข้าสู่ระบบ
            </button>

            <div className="text-center">
              <p className="mb-0">
                ยังไม่มีบัญชีใช่ไหม?{' '}
                <Link href="/register" className="fw-bold text-decoration-none">
                  สมัครสมาชิก
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
