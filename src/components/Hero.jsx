export default function Hero() {
  const handleCTA = (e) => {
    e.preventDefault();
    const el = document.querySelector('#booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4"
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title animate-fade-rise">
          Silence you will never hear in the city
        </h1>
        <p className="hero-subtitle animate-fade-rise-delay">
          We design expeditions for those who want to slow down. Discover wild
          nature in luxury and regain peace of mind where the only sound is the wind.
        </p>
        <button
          className="liquid-glass hero-cta animate-fade-rise-delay-2"
          onClick={handleCTA}
        >
          Book your journey
        </button>
      </div>
    </section>
  );
}
