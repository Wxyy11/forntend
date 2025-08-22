'use client';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useParams, useRouter } from 'next/navigation';
import { FaUser, FaUserTag, FaLock, FaIdCard } from 'react-icons/fa';

export default function Page() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [firstname, setFirstname] = useState('');
  const [fullname, setFullname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch(`https://backend-nextjs-virid.vercel.app/api/users/${id}`);
        if (!res.ok) return console.error('Failed to fetch data');

        const data = await res.json();
        setItems(data);

        if (data.length > 0) {
          const user = data[0];
          setFirstname(user.firstname || '');
          setFullname(user.fullname || '');
          setLastname(user.lastname || '');
          setUsername(user.username || '');
          setPassword(user.password || '');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getUsers();
  }, [id]);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://backend-nextjs-virid.vercel.app/api/users', {
        method: 'PUT',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, firstname, fullname, lastname, username, password }),
      });

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'ปรับปรุงข้อมูลเรียบร้อยแล้ว',
          showConfirmButton: false,
          timer: 2000,
        }).then(() => router.push('/admin/users'));
      } else {
        Swal.fire({ icon: 'error', title: 'เกิดข้อผิดพลาด', text: 'ไม่สามารถปรับปรุงข้อมูลได้' });
      }
    } catch (error) {
      Swal.fire({ icon: 'error', title: 'ข้อผิดพลาดเครือข่าย', text: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้' });
    }
  };

  return (
    <div style={{ backgroundColor: '#0d3b2e', minHeight: '100vh', padding: '3rem 1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        width: '100%',
        maxWidth: '1600px',
        border: '2px solid #d4af37',
        borderRadius: '20px',
        backgroundColor: '#123d2f',
        padding: '2rem',
        boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
        color: '#d4af37',
      }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', textShadow: '2px 2px 10px rgba(0,0,0,0.6)' }}>
          ✏️ แก้ไขข้อมูลผู้ใช้ #{id}
        </h2>

        {items.map((item) => (
          <form key={item.id} onSubmit={handleUpdateSubmit} className="text-start">
            {/* คำนำหน้า */}
            <div className="mb-4">
              <label className="form-label fw-semibold d-block mb-2">
                <FaIdCard className="me-2" /> คำนำหน้า
              </label>
              <select
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="form-select"
                style={{ backgroundColor: '#0d3b2e', color: '#fff', border: '1px solid #d4af37', borderRadius: '10px', padding: '0.5rem 1rem' }}
                required
              >
                <option value="">-- เลือกคำนำหน้า --</option>
                <option value="นาย">นาย</option>
                <option value="นาง">นาง</option>
                <option value="นางสาว">นางสาว</option>
              </select>
            </div>

            {/* ชื่อ */}
            <div className="mb-4">
              <label className="form-label fw-semibold d-block mb-2">
                <FaUser className="me-2" /> ชื่อ
              </label>
              <input
                type="text"
                className="form-control"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                style={{ backgroundColor: '#0d3b2e', color: '#fff', border: '1px solid #d4af37', borderRadius: '10px', padding: '0.5rem 1rem' }}
                required
              />
            </div>

            {/* นามสกุล */}
            <div className="mb-4">
              <label className="form-label fw-semibold d-block mb-2">
                <FaUserTag className="me-2" /> นามสกุล
              </label>
              <input
                type="text"
                className="form-control"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                style={{ backgroundColor: '#0d3b2e', color: '#fff', border: '1px solid #d4af37', borderRadius: '10px', padding: '0.5rem 1rem' }}
                required
              />
            </div>

            {/* Username */}
            <div className="mb-4">
              <label className="form-label fw-semibold d-block mb-2">
                <FaUser className="me-2" /> Username
              </label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ backgroundColor: '#0d3b2e', color: '#fff', border: '1px solid #d4af37', borderRadius: '10px', padding: '0.5rem 1rem' }}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="form-label fw-semibold d-block mb-2">
                <FaLock className="me-2" /> Password
              </label>
              <input
                type="text"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ backgroundColor: '#0d3b2e', color: '#fff', border: '1px solid #d4af37', borderRadius: '10px', padding: '0.5rem 1rem' }}
                required
              />
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
                transition: 'all 0.3s'
              }}
            >
              ✅ ปรับปรุงข้อมูล
            </button>
          </form>
        ))}
      </div>
    </div>
  );
}
