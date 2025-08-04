// app/components/Navigation.tsx
'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
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
              <Link className="nav-link active" aria-current="page" href="/">
                หน้าแรก
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                เกี่ยวกับเรา
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                บริการของเรา
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="contact" className="nav-link" aria-disabled="true">
                ติดต่อเรา
              </Link>
            </li>
          </ul>

          <form className="d-flex me-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-warning" type="submit">
              Search
            </button>
          </form>

          <div className="d-flex gap-2">
            <Link href="login" className="btn btn-outline-primary">
              Login
            </Link>
            <Link href="register" className="btn btn-primary">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
