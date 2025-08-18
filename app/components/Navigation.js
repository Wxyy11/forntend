// app/components/Navigation.tsx
'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow-lg rounded mb-4" style={{ backgroundColor: '#e0f7ff' }}>
      <div className="container-fluid">
        <Link href="/" className="navbar-brand d-flex align-items-center gap-2 fw-bold text-primary" style={{ textShadow: '2px 2px 5px #aaa' }}>
          <img
            src="/bootstrap-logo.svg"
            alt="Logo"
            width={30}
            height={24}
            className="d-inline-block align-text-top"
          />{' '}
          FrontEnd
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-primary fw-semibold" aria-current="page" href="/">
                หน้าแรก
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-primary fw-semibold" href="/about">
                เกี่ยวกับเรา
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-primary fw-semibold" href="/service">
                บริการของเรา
              </Link>
            </li>
            <li className="nav-item">
              <Link href="contact" className="nav-link text-primary fw-semibold" aria-disabled="true">
                ติดต่อเรา
              </Link>
            </li>
          </ul>

          <form className="d-flex me-3" role="search">
            <input
              className="form-control me-2 shadow-sm"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ borderRadius: '8px' }}
            />
            <button
              className="btn btn-outline-warning shadow-sm"
              type="submit"
              style={{ borderRadius: '8px', transition: 'all 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              Search
            </button>
          </form>

          <div className="d-flex gap-2">
            <Link
              href="login"
              className="btn btn-outline-primary shadow-sm"
              style={{ borderRadius: '8px', transition: 'all 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              Login
            </Link>
            <Link
              href="register"
              className="btn btn-primary shadow-sm"
              style={{ borderRadius: '8px', transition: 'all 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
