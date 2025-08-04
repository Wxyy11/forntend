'use client'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

export default function Signup() {
  const router = useRouter()

  const [firstname, setFirstname] = useState('')
  const [fullname, setFullname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [address, setAddress] = useState('') // ✅ เพิ่ม useState
  const [subscribe, setSubscribe] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname,
        fullname,
        lastname,
        username,
        password,
        gender,
        birthdate,
        address,     // ✅ เพิ่ม address ใน request
        subscribe,
      }),
    })

    const result = await res.json()
    console.log(result)

    if (res.ok) {
      await Swal.fire('สำเร็จ!', 'สมัครสมาชิกเรียบร้อยแล้ว', 'success')
      router.push('/login')
    } else {
      Swal.fire('เกิดข้อผิดพลาด', result.message || 'ไม่สามารถสมัครสมาชิกได้', 'error')
    }
  }

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
              <h2 className="fw-bold mb-5">สมัครสมาชิก</h2>
              <form onSubmit={handleSubmit}>
                {/* คำนำหน้า */}
                <div className="form-outline mb-4 text-start">
                  <select
                    className="form-select"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                  >
                    <option value="">คำนำหน้าชื่อ</option>
                    <option value="นาย">นาย</option>
                    <option value="นาง">นาง</option>
                    <option value="นางสาว">นางสาว</option>
                  </select>
                </div>

                {/* ชื่อ */}
                <div className="form-outline mb-4 text-start">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ชื่อ"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                  />
                </div>

                {/* นามสกุล */}
                <div className="form-outline mb-4 text-start">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="นามสกุล"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                  />
                </div>

                {/* ชื่อผู้ใช้ */}
                <div className="form-outline mb-4 text-start">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ชื่อผู้ใช้"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                {/* รหัสผ่าน */}
                <div className="form-outline mb-4 text-start">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="รหัสผ่าน"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {/* เพศ */}
                <div className="form-outline mb-4 text-start">
                  <label className="form-label d-block mb-2">เพศ</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="ชาย"
                      onChange={(e) => setGender(e.target.value)}
                      required
                    />
                    <label className="form-check-label" htmlFor="male">ชาย</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="หญิง"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="female">หญิง</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="other"
                      value="อื่น ๆ"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="other">อื่น ๆ</label>
                  </div>
                </div>

                {/* วันเกิด */}
                <div className="form-outline mb-4 text-start">
                  <label className="form-label" htmlFor="birthdate">วันเกิด</label>
                  <input
                    type="date"
                    id="birthdate"
                    className="form-control"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    required
                  />
                </div>

                {/* ที่อยู่ */}
                <div className="form-outline mb-4 text-start">
                  <textarea
                    className="form-control"
                    placeholder="ที่อยู่"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows={3}
                    required
                  ></textarea>
                </div>

                {/* สมัครรับข่าวสาร */}
                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    id="subscribe"
                    checked={subscribe}
                    onChange={(e) => setSubscribe(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="subscribe">
                    ยอมรับเงื่อนไข
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
  )
}
