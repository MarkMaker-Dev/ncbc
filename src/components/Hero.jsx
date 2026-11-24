import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <div className="container hero-content">
          {/* <p className="hero-eyebrow">NEW COVENANT BAPTIST CHURCH</p> */}

          <h1>
            RAISING A GENERATION OF
            <span> HEAVENLY AND EARTHLY-RELEVANT BELIEVERS.</span>
          </h1>

          <p className="hero-description">
            We raise a generation of believers that are heavenly and
            earthly-relevant.
          </p>

          <div className="hero-actions">
                <a href="#visit" className="btn hero-btn-primary">
                Plan Your Visit
                </a>

                <a href="#sermons" className="btn hero-btn-secondary">
                Watch Our Sermons
                </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
