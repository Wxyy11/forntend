'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export default function Page() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch('https://backend-nextjs-virid.vercel.app/api/users');
        if (!res.ok) return;
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getUsers();
    const interval = setInterval(getUsers, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDelete = async (id, name) => {
    const result = await Swal.fire({
      title: 'ยืนยันการลบ?',
      text: `คุณแน่ใจว่าต้องการลบผู้ใช้ ${name} หรือไม่?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d4af37',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ใช่!',
      cancelButtonText: 'ยกเลิก'
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`https://backend-nextjs-virid.vercel.app/api/users/${id}`, {
          method: 'DELETE',
          headers: { Accept: 'application/json' },
        });

        if (res.ok) {
          setItems(prev => prev.filter(item => item.id !== id));
          Swal.fire('ลบแล้ว!', 'ผู้ใช้ถูกลบเรียบร้อย', 'success');
        } else {
          const data = await res.json();
          Swal.fire('ผิดพลาด', data.message || res.statusText, 'error');
        }
      } catch (error) {
        Swal.fire('ผิดพลาด', 'เกิดข้อผิดพลาดในการลบ', 'error');
      }
    }
  };

  return (
    <div style={{ backgroundColor: '#0d3b2e', minHeight: '100vh', padding: '3rem 1rem' }}>
      <div
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          border: '2px solid #d4af37',
          borderRadius: '20px',
          backgroundColor: '#123d2f',
          color: '#d4af37',
          padding: '2rem',
          boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem', fontWeight: 'bold', textShadow: '2px 2px 10px rgba(0,0,0,0.6)' }}>
          📋 Users List
        </h2>

        <div style={{ overflowX: 'auto' }}>
          <table className="table table-striped table-hover align-middle" style={{ width: '100%', color: '#fff' }}>
            <thead style={{ backgroundColor: '#0d3b2e', color: '#d4af37' }}>
              <tr>
                <th className="text-center">#</th>
                <th>Firstname</th>
                <th>Fullname</th>
                <th>Lastname</th>
                <th>Username</th>
                <th>Password</th>
                <th>Address</th>
                <th>Sex</th>
                <th>Birthday</th>
                <th className="text-center">Edit</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td className="text-center">{item.id}</td>
                  <td>{item.firstname}</td>
                  <td>{item.fullname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.username}</td>
                  <td>{item.password}</td>
                  <td>{item.address}</td>
                  <td>{item.sex}</td>
                  <td>{item.birthday}</td>
                  <td className="text-center">
                    <Link href={`/admin/users/edit/${item.id}`}>
                      <button style={{ backgroundColor: '#d4af37', color: '#123d2f', border: 'none', borderRadius: '5px', padding: '0.25rem 0.5rem' }}>
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => handleDelete(item.id, item.firstname)}
                      style={{ backgroundColor: '#d33', color: '#fff', border: 'none', borderRadius: '5px', padding: '0.25rem 0.5rem' }}
                    >
                      Del
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
