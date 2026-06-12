import React, { useState } from "react";
import "./Hero.css";
import heroBg from "../Rectangle.png";
import headphoneImg from "../headphone.png";

const slides = [
  {
    heading: ["Just put the headphones on,", "and go with the flow!"],
    desc: "Lorem Ipsum dolor sit amet Consectetur Adipiscing Viverra Lorem.",
    img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=560&h=460&fit=crop&q=90",
  },
  {
    heading: ["Experience sound", "like never before."],
    desc: "Immersive audio that puts you right at the heart of the music.",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=560&h=460&fit=crop&q=90",
  },
  {
    heading: ["Born for the bass,", "built for the beat."],
    desc: "Deep, punchy bass with crystal-clear highs for every genre.",
    img: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=560&h=460&fit=crop&q=90",
  },
];

const thumbs = [
  "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=90&h=90&fit=crop",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=90&h=90&fit=crop",
  "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=90&h=90&fit=crop",
  "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=90&h=90&fit=crop",
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-container">
        {/* Left: Text */}
        <div className="hero-text">
          <h1>
            {slide.heading.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h1>
          <p className="hero-desc">{slide.desc}</p>
          <button className="hero-order-btn">Order Now</button>

          <div className="hero-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`hero-dot ${i === active ? "active" : ""}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>

        {/* Center: Main headphone image */}
        <div className="hero-img-center">
          <img
            src={headphoneImg}
            alt="JBL Headphones"
            className="hero-headphone"
          />
        </div>

        {/* Right: Thumbnail stack */}
        <div className="hero-thumbs">
          {thumbs.map((src, i) => (
            <div
              key={i}
              className={`hero-thumb ${i === active ? "active" : ""}`}
              onClick={() => i < slides.length && setActive(i)}
            >
              <img src={src} alt="product" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
