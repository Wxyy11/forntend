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
        const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`);
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
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, firstname, fullname, lastname, username, password }),
      });

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: '<h3>ปรับปรุงข้อมูลเรียบร้อยแล้ว</h3>',
          showConfirmButton: false,
          timer: 2000,
        }).then(() => router.push('/admin/user'));
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'เกิดข้อผิดพลาด!',
          icon: 'error',
          confirmButtonText: 'ตกลง',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'ข้อผิดพลาดเครือข่าย',
        text: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้',
      });
    }
  };

  return (
    <section
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{
        backgroundImage:
          "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      {/* Overlay มืด */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}
      ></div>

      {/* Card หลัก */}
      <div
        className="card shadow-lg bg-body-tertiary w-100"
        style={{
          maxWidth: '650px',
          position: 'relative',
          zIndex: 2,
          borderRadius: '20px',
        }}
      >
        <div className="card-body py-5 px-4">
          <h2 className="fw-bold mb-4 text-center text-primary">
            ✏️ แก้ไขข้อมูลผู้ใช้ #{id}
          </h2>

          {items.map((item) => (
            <form key={item.id} onSubmit={handleUpdateSubmit} className="text-start">
              
              {/* คำนำหน้า */}
              <div className="form-outline mb-4">
                <label className="form-label fw-semibold">
                  <FaIdCard className="me-2 text-secondary" /> คำนำหน้า
                </label>
                <select
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  className="form-select form-select-lg rounded-3 shadow-sm"
                  required
                >
                  <option value="">-- เลือกคำนำหน้า --</option>
                  <option value="นาย">นาย</option>
                  <option value="นาง">นาง</option>
                  <option value="นางสาว">นางสาว</option>
                </select>
              </div>

              {/* ชื่อ */}
              <div className="form-outline mb-4">
                <label className="form-label fw-semibold">
                  <FaUser className="me-2 text-success" /> ชื่อ
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg rounded-3 shadow-sm"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />
              </div>

              {/* นามสกุล */}
              <div className="form-outline mb-4">
                <label className="form-label fw-semibold">
                  <FaUserTag className="me-2 text-info" /> นามสกุล
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg rounded-3 shadow-sm"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>

              {/* Username */}
              <div className="form-outline mb-4">
                <label className="form-label fw-semibold">
                  <FaUser className="me-2 text-warning" /> Username
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg rounded-3 shadow-sm"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="form-outline mb-4">
                <label className="form-label fw-semibold">
                  <FaLock className="me-2 text-danger" /> Password
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg rounded-3 shadow-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* ปุ่ม */}
              <button
                type="submit"
                className="btn btn-gradient btn-lg w-100 rounded-3 shadow-sm"
                style={{
                  background: 'linear-gradient(45deg, #2196f3, #0d47a1)',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                ✅ ปรับปรุงข้อมูล
              </button>
            </form>
          ))}
        </div>
      </div>
    </section>
  );
}
