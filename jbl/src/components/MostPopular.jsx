import React from 'react';
import './MostPopular.css';

const categories = [
  {
    name: 'Headphones',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=120&h=120&fit=crop',
    active: true,
  },
  {
    name: 'Speakers',
    img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=120&h=120&fit=crop',
  },
  {
    name: 'Earbuds',
    img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=120&h=120&fit=crop',
  },
  {
    name: 'Soundbar',
    img: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=120&h=120&fit=crop',
  },
  {
    name: 'Flash Speakers',
    img: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=120&h=120&fit=crop',
  },
];

export default function MostPopular() {
  return (
    <section className="most-popular">
      <div className="container">
        <div className="mp-header">
          <div>
            <p className="section-label">Categories</p>
            <h2 className="section-title">Most Popular</h2>
          </div>
        </div>

        <div className="mp-grid">
          {categories.map((cat, i) => (
            <div key={i} className={`mp-card ${cat.active ? 'active' : ''}`}>
              <div className="mp-card-img">
                <img src={cat.img} alt={cat.name} />
              </div>
              <div className="mp-card-info">
                <p className="mp-name">{cat.name}</p>
                <div className="mp-stars">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className={j < 4 ? 'star filled' : 'star'}>★</span>
                  ))}
                </div>
                <p className="mp-count">128 Products</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mp-footer">
          <button className="orange-btn">View All</button>
        </div>
      </div>
    </section>
  );
}
