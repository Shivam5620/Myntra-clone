import { Link } from "react-router-dom";
import logo from "../images/myntra/myntra.png";
import "../style/header.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../Store/CartContextNew";

function Header() {
  const [categories, setCategories] = useState([]);
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items?.reduce((totalNumerOfItems, item) => (totalNumerOfItems + item.quantity), 0) || 0;

  //-----------fetch Product category----------
  

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm p-3 mb-1 fixed-top bg-white">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to={"/"} className="navbar-brand" href="1">
          <img src={logo} alt="logo" style={{ width: "38px " }} />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item"  >
                  <Link
                    className="nav-link nav-link-ltr "
                    data-bs-toggle="dropdown"
                    aria-current="page"
                  >
                    Electronics
                  </Link>
                </li>
                <li className="nav-item"  >
                  <Link
                    className="nav-link nav-link-ltr "
                    data-bs-toggle="dropdown"
                    aria-current="page"
                  >
                    Jewelery
                  </Link>
                </li>
                <li className="nav-item"  >
                  <Link
                    className="nav-link nav-link-ltr "
                    data-bs-toggle="dropdown"
                    aria-current="page"
                  >
                    Men's clothing
                  </Link>
                </li>
                <li className="nav-item"  >
                  <Link
                    className="nav-link nav-link-ltr "
                    data-bs-toggle="dropdown"
                    aria-current="page"
                  >
                    Women's clothing
                  </Link>
                </li>
              
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div className="userOptions ms-5">
            <Link to={"/"}>
              <i className="bi bi-person"></i>
            </Link>
            <Link to={"/"}>
              <i className="bi bi-heart"></i>
            </Link>
            <Link to={"/cart"}>
              <div style={{ position: 'relative' }}>
                <i className="bi bi-bag"></i>
                <span className="badge bg-danger" style={{ position: 'absolute', top: '-0.5rem', right: '-0.5rem', fontSize: '0.75rem', padding: '0.15rem 0.3rem' }}>{totalCartItems}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;
