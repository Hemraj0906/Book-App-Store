import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <Link className="navbar-brand" to={"/books"}>
            BooksStore
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link className="nav-item nav-link active" to="/">
                Home
              </Link>
              <Link className="nav-item nav-link active" to="/books">
                BOOKS
              </Link>
              <Link className="nav-item nav-link active" to="/addbooks">
                ADD BOOKS
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
