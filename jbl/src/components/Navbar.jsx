import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiUser, FiHeart, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';
import jblLogo from '../jbl.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Product', to: '/product' },
  { label: 'Blog', to: '/blog' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <img src={jblLogo} alt="JBL" className="logo-jbl-img" />
        </Link>

        {/* Desktop links */}
        <ul className="nav-links">
          {links.map(l => {
            const isActive = location.pathname === l.to;
            return (
              <li key={l.label}>
                <Link to={l.to} className={isActive ? 'nav-link active' : 'nav-link'}>
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Icons group */}
        <div className="nav-icons">
          <button className="icon-btn"><FiSearch /></button>
          <button className="icon-btn"><FiUser /></button>
          <button className="icon-btn"><FiHeart /></button>
          <button className="icon-btn cart-btn">
            <FiShoppingCart />
          </button>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <ul className="mobile-menu">
          {links.map(l => (
            <li key={l.label}>
              <Link to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
