import { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => els?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="about-inner">
        <p className="section-label reveal">About Project</p>
        <h2 className="about-heading reveal reveal-delay-1">
          Luxury is not extravagance — it is space, silence, and time that
          belongs only to you.
        </h2>

        <div className="about-grid">
          <div className="about-text reveal reveal-delay-2">
            <p>
              Velorah is an agency that redefines the concept of rest. Instead of
              another all-inclusive resort, we offer carefully designed expeditions
              to the wildest and most untouched corners of nature — from Scandinavian
              fjords to Patagonian wastelands.
            </p>
            <p style={{ marginTop: '1.5rem' }}>
              Every expedition is tailor-made. We select routes, accommodations, and
              experiences to match your rhythm. We don't rush. We don't impose schedules.
              We create a space where you can simply be.
            </p>
          </div>

          <div className="about-stats reveal reveal-delay-3">
            <div className="stat-item liquid-glass">
              <div className="stat-number">12+</div>
              <div className="stat-label">Years of experience</div>
            </div>
            <div className="stat-item liquid-glass">
              <div className="stat-number">340</div>
              <div className="stat-label">Expeditions yearly</div>
            </div>
            <div className="stat-item liquid-glass">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfied guests</div>
            </div>
            <div className="stat-item liquid-glass">
              <div className="stat-number">27</div>
              <div className="stat-label">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
