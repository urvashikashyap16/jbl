import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './NewArrivals.css';

const products = [
  {
    name: 'JBL Boombox 3 Wi-Fi',
    features: [
      '100h Playtime Battery Life',
      'Passive Radiators For Pumping Bass',
      '3 Wi-Fi Ant Bluetooth Connectivity',
    ],
    specs: [
      { label: 'Volume Button', val: 'Power Button' },
      { label: 'Play/Pause Button', val: 'Bass Button' },
      { label: 'Bluetooth', val: '' },
    ],
    colors: ['#ff5722', '#1a1a1a', '#1565c0', '#2e7d32'],
    img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=480&h=320&fit=crop',
    tag: 'New Arrival',
  },
  {
    name: 'JBL Charge 5',
    features: [
      '20h Playtime Battery Life',
      'IP67 Waterproof & Dustproof',
      'PartyBoost Speaker Pairing',
    ],
    specs: [
      { label: 'Volume Button', val: 'Charge Button' },
      { label: 'Play/Pause Button', val: 'Light Button' },
      { label: 'Bluetooth', val: '5.1' },
    ],
    colors: ['#fff', '#ff5722', '#1a1a1a', '#ffd700'],
    img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=480&h=320&fit=crop',
    tag: 'Bestseller',
  },
  {
    name: 'JBL Flip 6',
    features: [
      '12h Playtime Battery Life',
      'IP67 Waterproof Design',
      'Bold JBL Original Pro Sound',
    ],
    specs: [
      { label: 'Volume Button', val: 'Power Button' },
      { label: 'Play/Pause', val: 'PartyBoost' },
      { label: 'Bluetooth', val: '5.1' },
    ],
    colors: ['#e53935', '#fff', '#0d47a1', '#1b5e20'],
    img: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=480&h=320&fit=crop',
    tag: 'Hot Pick',
  },
];

export default function NewArrivals() {
  const [idx, setIdx] = useState(0);
  const p = products[idx];

  const prev = () => setIdx((idx - 1 + products.length) % products.length);
  const next = () => setIdx((idx + 1) % products.length);

  return (
    <section className="new-arrivals">
      <div className="container">
        <div className="na-header">
          <p className="section-label">Product</p>
          <h2 className="section-title">New Arrivals</h2>
        </div>

        <div className="na-slider">
          <button className="na-arrow left" onClick={prev}><FiChevronLeft /></button>

          <div className="na-content">
            <div className="na-info">
              <h3 className="na-product-name">{p.name}</h3>
              <ul className="na-features">
                {p.features.map((f, i) => (
                  <li key={i}><span className="bullet" />  {f}</li>
                ))}
              </ul>
              <div className="na-specs">
                {p.specs.map((s, i) => (
                  <div key={i} className="spec-row">
                    <span className="spec-label">{s.label}</span>
                    {s.val && <span className="spec-val">{s.val}</span>}
                  </div>
                ))}
              </div>
              <div className="na-colors">
                <span className="colors-label">Available Colours</span>
                <div className="color-swatches">
                  {p.colors.map((c, i) => (
                    <span key={i} className="swatch" style={{ background: c }} />
                  ))}
                </div>
              </div>
              <button className="orange-btn">Order Now</button>
            </div>

            <div className="na-img-wrap">
              <img src={p.img} alt={p.name} />
              <span className="na-tag">{p.tag}</span>
            </div>
          </div>

          <button className="na-arrow right" onClick={next}><FiChevronRight /></button>
        </div>

        <div className="na-dots">
          {products.map((_, i) => (
            <button
              key={i}
              className={`na-dot ${i === idx ? 'active' : ''}`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
