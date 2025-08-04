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
        // แจ้งเตือนและเปลี่ยนหน้า
        Swal.fire({
          icon: 'success',
          title: 'เข้าสู่ระบบสำเร็จ!',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          router.push('/home');
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
    <section className="text-center">
      <div
        className="p-5 bg-image"
        style={{
          backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
          height: '300px',
        }}
      ></div>

      <div
        className="card mx-4 mx-md-5 shadow-5-strong bg-body-tertiary"
        style={{
          marginTop: '-100px',
          backdropFilter: 'blur(30px)',
        }}
      >
        <div className="card-body py-5 px-md-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-5">เข้าสู่ระบบ</h2>
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

                <button type="submit" className="btn btn-primary btn-block mb-4">
                  เข้าสู่ระบบ
                </button>

                <div className="mt-4">
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
        </div>
      </div>
    </section>
  );
}
