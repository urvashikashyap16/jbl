import React from 'react';
import './AudioSection.css';

const products = [
  {
    name: 'Speakers',
    img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&h=200&fit=crop',
  },
  {
    name: 'Speakers',
    img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=200&h=200&fit=crop',
  },
  {
    name: 'Speakers',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop',
  },
  {
    name: 'Speakers',
    img: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=200&h=200&fit=crop',
  },
  {
    name: 'Speakers',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
  },
  {
    name: 'Speakers',
    img: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=200&h=200&fit=crop',
  },
];

export default function AudioSection() {
  return (
    <section className="audio-section">
      <div className="audio-wave-top" />
      <div className="audio-inner container">
        <div className="audio-text">
          <p className="section-label">Products</p>
          <h2 className="section-title">Our Audio<br />Does It All</h2>
          <p className="audio-desc">
            Bose® Has A Range Of Cutting-Edge Audio Solutions To
            Elevate Your Listening Experience, From Portable
            Bluetooth Speakers To Immersive Sound Systems, Jbl
            Delivers Unparalleled Sound Quality.
          </p>
          <button className="orange-btn">Shop Now</button>
        </div>

        <div className="audio-grid">
          {products.map((p, i) => (
            <div key={i} className="audio-card">
              <img src={p.img} alt={p.name} />
              <p>{p.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="audio-wave-bottom" />
    </section>
  );
}
