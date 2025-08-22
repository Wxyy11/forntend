'use client'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import { FaUser, FaLock, FaEnvelope, FaBirthdayCake, FaHome } from 'react-icons/fa'

export default function Signup() {
  const router = useRouter()

  const [firstname, setFirstname] = useState('')
  const [fullname, setFullname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [address, setAddress] = useState('')
  const [subscribe, setSubscribe] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('https://backend-nextjs-virid.vercel.app/api/users', {
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
        address,
        subscribe,
      }),
    })

    const result = await res.json()

    if (res.ok) {
      await Swal.fire('สำเร็จ!', 'สมัครสมาชิกเรียบร้อยแล้ว', 'success')
      router.push('/login')
    } else {
      Swal.fire('เกิดข้อผิดพลาด', result.message || 'ไม่สามารถสมัครสมาชิกได้', 'error')
    }
  }

  return (
    <div style={{ backgroundColor: '#0d3b2e', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 0' }}>
      <div
        style={{
          backgroundColor: '#123d2f',
          border: '2px solid #d4af37',
          borderRadius: '20px',
          padding: '3rem',
          width: '100%',
          maxWidth: '600px',
          color: '#d4af37',
        }}
      >
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem', textShadow: '2px 2px 10px rgba(0,0,0,0.6)' }}>
          สมัครสมาชิก
        </h2>
        <form onSubmit={handleSubmit}>
          {/* คำนำหน้า */}
          <div style={{ marginBottom: '1.5rem' }}>
            <select
              className="form-select"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.5rem 1rem',
                borderRadius: '10px',
                border: '1px solid #d4af37',
                backgroundColor: '#0d3b2e',
                color: '#fff',
              }}
            >
              <option value="">คำนำหน้าชื่อ</option>
              <option value="นาย">นาย</option>
              <option value="นาง">นาง</option>
              <option value="นางสาว">นางสาว</option>
            </select>
          </div>

          {/* ชื่อ */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
            <FaUser style={{ marginRight: '0.5rem', color: '#d4af37' }} />
            <input
              type="text"
              placeholder="ชื่อ"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
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

          {/* นามสกุล */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
            <FaUser style={{ marginRight: '0.5rem', color: '#d4af37' }} />
            <input
              type="text"
              placeholder="นามสกุล"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
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

          {/* ชื่อผู้ใช้ */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
            <FaEnvelope style={{ marginRight: '0.5rem', color: '#d4af37' }} />
            <input
              type="text"
              placeholder="ชื่อผู้ใช้"
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

          {/* รหัสผ่าน */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
            <FaLock style={{ marginRight: '0.5rem', color: '#d4af37' }} />
            <input
              type="password"
              placeholder="รหัสผ่าน"
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

          {/* เพศ */}
          <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
            <label style={{ fontWeight: 'bold', marginBottom: '0.5rem', display: 'block' }}>เพศ</label>
            <div>
              <label style={{ marginRight: '1rem' }}>
                <input type="radio" name="gender" value="ชาย" onChange={(e) => setGender(e.target.value)} required /> ชาย
              </label>
              <label style={{ marginRight: '1rem' }}>
                <input type="radio" name="gender" value="หญิง" onChange={(e) => setGender(e.target.value)} /> หญิง
              </label>
              <label>
                <input type="radio" name="gender" value="อื่น ๆ" onChange={(e) => setGender(e.target.value)} /> อื่น ๆ
              </label>
            </div>
          </div>

          {/* วันเกิด */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
            <FaBirthdayCake style={{ marginRight: '0.5rem', color: '#d4af37' }} />
            <input
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
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

          {/* ที่อยู่ */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
            <FaHome style={{ marginRight: '0.5rem', color: '#d4af37' }} />
            <textarea
              placeholder="ที่อยู่"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
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

          {/* ยอมรับเงื่อนไข */}
          <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
            <label>
              <input type="checkbox" checked={subscribe} onChange={(e) => setSubscribe(e.target.checked)} /> ยอมรับเงื่อนไข
            </label>
          </div>

          {/* ปุ่ม */}
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
            สมัครสมาชิก
          </button>
        </form>
      </div>
    </div>
  )
}
