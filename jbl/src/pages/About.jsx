import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight, FiArrowRight, FiPhone, FiMail } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import rectangleBg from '../Rectangle.png';
import jblLogo from '../jbl.png';
import './About.css';

/* ── History carousel data ── */
const historySlides = [
  {
    year: '2024',
    title: 'IN TUNE WITH THE ENVIRONMENT',
    desc: 'Introducing The JBL Clip 4 And Go 3 In An Eco-Friendly Material Made From 90% Post-Consumer Recycled Plastic. It\'s Part Of Our Ongoing Plan To Redesign Our Products And Packaging As We Move Towards Becoming Carbon Neutral.',
    imgs: [
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=340&h=220&fit=crop',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=340&h=220&fit=crop',
    ],
  },
  {
    year: '2010',
    title: 'A DECADE OF INNOVATION',
    desc: 'JBL expanded its portable audio range, bringing wireless Bluetooth speakers and noise-cancelling headphones to millions of listeners around the world.',
    imgs: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=340&h=220&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=340&h=220&fit=crop',
    ],
  },
  {
    year: '1946',
    title: 'WHERE IT ALL BEGAN',
    desc: 'James Bullough Lansing founded JBL with a vision to create the world\'s finest loudspeakers. 75 years later, that vision continues to drive every product we make.',
    imgs: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=340&h=220&fit=crop',
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=340&h=220&fit=crop',
    ],
  },
];

/* ── What We Offer tabs ── */
const offerTabs = ['Bluetooth', 'Headphones', 'Gaming', 'Home', 'Specialty', 'Car', 'Toyota'];
const offerContent = {
  Bluetooth: {
    title: 'BLUETOOTH SPEAKER',
    desc: 'Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet',
    img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=420&h=280&fit=crop',
  },
  Headphones: {
    title: 'OVER-EAR HEADPHONES',
    desc: 'Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=420&h=280&fit=crop',
  },
  Gaming: {
    title: 'GAMING HEADSET',
    desc: 'Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet',
    img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=420&h=280&fit=crop',
  },
  Home: {
    title: 'HOME AUDIO SYSTEM',
    desc: 'Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=420&h=280&fit=crop',
  },
  Specialty: {
    title: 'SPECIALTY SPEAKERS',
    desc: 'Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet',
    img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=420&h=280&fit=crop',
  },
  Car: {
    title: 'CAR AUDIO',
    desc: 'Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet',
    img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=420&h=280&fit=crop',
  },
  Toyota: {
    title: 'TOYOTA EDITION',
    desc: 'Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet',
    img: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=420&h=280&fit=crop',
  },
};

/* ── Footer cities ── */
const cities = [
  { name: 'New York', sub: '354 Bay Street', icon: '🗽' },
  { name: 'Paris', sub: '354 Bay Street', icon: '🗼' },
  { name: 'Rome', sub: '354 Bay Street', icon: '🏛️' },
  { name: 'London', sub: '354 Bay Street', icon: '🏦' },
  { name: 'Athens', sub: '354 Bay Street', icon: '🏛' },
  { name: 'India', sub: 'Worldwide', icon: '🕌' },
];

const shopLinks = ['Featured', 'Headphone', 'Gaming', 'Soundbar', 'Professional', 'Offer Zone'];
const supportLinks = ['Order Status', 'Bulk Purchase Program', 'Stay Authentic', 'Products Support', 'Shipping & Delivery Policy', 'Cancellation & Refund Policy', 'Service Center', 'Brand Stories'];
const aboutLinks = ['Harman Corporate', 'Privacy Policy', 'Cookie Policy', 'Copyright', 'Warranty Policy', 'Terms Of Use', 'Why Buy Direct', 'JBL Sound Partners'];

export default function About() {
  const [slide, setSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('Bluetooth');
  const s = historySlides[slide];
  const offer = offerContent[activeTab];

  return (
    <div className="about-page">

      {/* ── 1. HERO BANNER ── */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${rectangleBg})` }}
      >
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p className="about-hero-sub">Lorem Ipsum Dolor Sit Amet</p>
          <div className="breadcrumb">
            <Link to="/">Home Page</Link>
            <span> &gt; </span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* ── 2. FIND YOUR TRUE SOUND ── */}
      <section className="find-sound">
        <div className="find-sound-inner container">
          <div className="find-sound-left">
            <h2>
              FIND<br />
              YOUR<br />
              <span className="orange-word">TRUE</span><br />
              SOUND
            </h2>
          </div>
          <div className="find-sound-right">
            <p>
              JBL Has Always Believed That Sound Should Be An Open Stage. A Place Of Free Expression Where
              Voices Are Heard. Without Restrictions. Without Limitations. That's Why We Surface And Celebrate
              The Unfiltered Self-Expression Of Courageous Artists, Creators, And Performers. JBL Is Here To
              Help You Express Your True Self, So You Can Experience The Joy And Excitement Of Being You.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. OUR HISTORY ── */}
      <section className="our-history">
        <div className="history-inner">
          <h2 className="history-title">OUR HISTORY</h2>
          <p className="history-sub">75 YEARS OF JBL SOUND</p>

          <div className="history-imgs">
            {s.imgs.map((src, i) => (
              <img key={i} src={src} alt="history" />
            ))}
          </div>

          <div className="history-nav">
            <button className="hist-arrow" onClick={() => setSlide((slide - 1 + historySlides.length) % historySlides.length)}>
              <FiChevronLeft />
            </button>
            <span className="history-year">{s.year}</span>
            <button className="hist-arrow" onClick={() => setSlide((slide + 1) % historySlides.length)}>
              <FiChevronRight />
            </button>
          </div>

          <h3 className="history-event-title">{s.title}</h3>
          <p className="history-event-desc">{s.desc}</p>
        </div>
      </section>

      {/* ── 4. WHAT WE OFFER ── */}
      <section className="what-we-offer">
        <div className="container">
          <h2 className="offer-title">WHAT WE OFFER</h2>
          <p className="offer-sub">Any Way You Want To Listen, We Got You.</p>

          <div className="offer-tabs">
            {offerTabs.map(tab => (
              <button
                key={tab}
                className={`offer-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="offer-content">
            <div className="offer-text">
              <h3>{offer.title}</h3>
              <p>{offer.desc}</p>
              <button className="learn-more-btn">LEARN MORE</button>
            </div>
            <div className="offer-img">
              <img src={offer.img} alt={offer.title} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SIGN UP ── */}
      <section className="signup-section">
        <div className="signup-wave-top" />
        <div className="signup-inner container">
          <div className="signup-left">
            <h2>SIGN UP FOR THE LATEST<br />JBL NEWS &amp; OFFERS!</h2>
            <p className="signup-privacy">
              View Our <span className="orange-link">Privacy Policy</span> <FiArrowRight style={{ verticalAlign: 'middle' }} />
            </p>
          </div>

          <div className="signup-card">
            <h3>SIGN UP</h3>
            <div className="signup-form">
              <div className="form-group">
                <label>email</label>
                <input type="email" placeholder="" />
              </div>
              <div className="form-group">
                <label>password</label>
                <input type="password" placeholder="" />
              </div>
              <div className="form-row">
                <label className="remember-label">
                  <input type="checkbox" /> Remember Me
                </label>
                <span className="forgot-link">Forgot Password</span>
              </div>
              <button className="signup-btn">ORDER NOW</button>
              <p className="already-account">Already Have An Account? <span className="orange-link">Log In</span></p>
            </div>
          </div>
        </div>
        <div className="signup-wave-bottom" />
      </section>

      {/* ── 6. FOOTER ── */}
      <footer className="footer">
        {/* Cities row */}
        <div className="footer-cities">
          {cities.map(c => (
            <div key={c.name} className="footer-city">
              <span className="city-icon">{c.icon}</span>
              <div>
                <p className="city-name">{c.name}</p>
                <p className="city-sub">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="footer-divider" />

        {/* Main footer columns */}
        <div className="footer-cols container">
          {/* Brand col */}
          <div className="footer-col brand-col">
            <div className="footer-logo-wrap">
              <img src={jblLogo} alt="JBL" className="footer-logo" />
            </div>
            <p className="brand-desc">
              The Call Center Is Open On Weekdays From 9:00 To 20:00 And On Weekends 'Seasonal'.
            </p>
            <p className="brand-contact"><FiPhone /> +917456352306</p>
            <p className="brand-contact"><FiMail /> Abc12@Gmail.Com</p>
            <div className="social-icons">
              <FaFacebookF /><FaInstagram /><FaTwitter /><FaLinkedinIn /><FaYoutube />
            </div>
            <p className="follow-label">FOLLOW US</p>
          </div>

          {/* Shop col */}
          <div className="footer-col">
            <h4 className="footer-col-title">SHOP</h4>
            <ul>
              {shopLinks.map(l => <li key={l}><a href="/">{l}</a></li>)}
            </ul>
          </div>

          {/* Support col */}
          <div className="footer-col">
            <h4 className="footer-col-title">SUPPORT</h4>
            <ul>
              {supportLinks.map(l => <li key={l}><a href="/">{l}</a></li>)}
            </ul>
          </div>

          {/* About col */}
          <div className="footer-col">
            <h4 className="footer-col-title">ABOUT US</h4>
            <ul>
              {aboutLinks.map(l => <li key={l}><a href="/">{l}</a></li>)}
            </ul>
          </div>

          {/* Product Support col */}
          <div className="footer-col">
            <h4 className="footer-col-title">PRODUCT SUPPORT</h4>
            <p className="product-support-label">Manufactured By:</p>
            <p className="product-support-text">Harman International Industries, Inc.<br />8500 Balboa Blvd,<br />Northridge, CA91329,USA</p>
            <p className="product-support-label" style={{ marginTop: 14 }}>Imported By:</p>
            <p className="product-support-text">Harman International (India) Pvt.Ltd,<br />Rajarajeshwari Satva Knowledge Court<br />Office 3,Ring 4-5 8th Floor,<br />Bangalore-560048,Karnataka India.</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-inner container">
            <p className="footer-copy">JBL © 2024 Created By Dhruv Refill. All Rights Reserved.</p>
            <div className="footer-partners">
              <span>HARMAN</span>
              <span>AKG</span>
              <span>nova</span>
              <span>INFINITY</span>
              <span>soundcraft</span>
            </div>
          </div>
          <div className="footer-big-jbl">JBL</div>
        </div>
      </footer>

    </div>
  );
}
