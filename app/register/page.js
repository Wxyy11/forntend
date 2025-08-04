import React from 'react';

export default function Signup() {
  return (
    <section className="text-center">
      {/* รูปพื้นหลัง */}
      <div
        className="p-5 bg-image"
        style={{
          backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
          height: '300px',
        }}
      ></div>

      {/* กล่องฟอร์ม */}
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
              <h2 className="fw-bold mb-5">สมัครสมาชิก</h2>
              <form>
                {/* ชื่อผู้ใช้ */}
                <div className="form-outline mb-4 text-start">
                  <input type="text" id="username" className="form-control" />
                  <label className="form-label" htmlFor="username">ชื่อผู้ใช้</label>
                </div>

                {/* ชื่อจริง */}
                <div className="form-outline mb-4 text-start">
                  <input type="text" id="firstName" className="form-control" />
                  <label className="form-label" htmlFor="firstName">รหัสผ่าน</label>
                </div>

                {/* นามสกุล */}
                <div className="form-outline mb-4 text-start">
                  <input type="text" id="lastName" className="form-control" />
                  <label className="form-label" htmlFor="lastName">อีเมล</label>
                </div>

                {/* อีเมล */}
                <div className="form-outline mb-4 text-start">
                  <input type="email" id="email" className="form-control" />
                  <label className="form-label" htmlFor="email">ชื่อจริง</label>
                </div>

                {/* รหัสผ่าน */}
                <div className="form-outline mb-4 text-start">
                  <input type="password" id="password" className="form-control" />
                  <label className="form-label" htmlFor="password">นามสกุล</label>
                </div>

                {/* เพศ */}
                <div className="form-outline mb-4 text-start">
                  <label className="form-label d-block mb-2">เพศ</label>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="male" value="ชาย" />
                    <label className="form-check-label" htmlFor="male">ชาย</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="female" value="หญิง" />
                    <label className="form-check-label" htmlFor="female">หญิง</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="other" value="อื่น ๆ" />
                    <label className="form-check-label" htmlFor="other">อื่น ๆ</label>
                  </div>
                </div>

                {/* วันเกิด */}
                <div className="form-outline mb-4 text-start">
                  <label className="form-label" htmlFor="birthdate">วันเกิด</label>
                  <input type="date" id="birthdate" className="form-control" />
                </div>

                {/* สมัครรับข่าวสาร */}
                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    id="subscribe"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="subscribe">
                    สมัครรับข่าวสารจากเรา
                  </label>
                </div>

                {/* ปุ่ม */}
                <button type="submit" className="btn btn-primary btn-block mb-4">
                  สมัครสมาชิก
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
