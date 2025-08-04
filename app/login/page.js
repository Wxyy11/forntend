'use client';
import Link from 'next/link';
import React from 'react';

export default function Login() {
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
              <form>
                <div className="form-outline mb-4 text-start">
                  <input type="email" id="emailInput" className="form-control" />
                  <label className="form-label" htmlFor="emailInput">ชื่อผู้ใช้</label>
                </div>

                <div className="form-outline mb-4 text-start">
                  <input type="password" id="passwordInput" className="form-control" />
                  <label className="form-label" htmlFor="passwordInput">รหัสผ่าน</label>
                </div>

                {/* ✅ Checkbox จำฉันไว้ */}
                <div className="form-check d-flex justify-content-start mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    จำฉันไว้
                  </label>
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
