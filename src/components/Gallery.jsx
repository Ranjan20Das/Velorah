import { useEffect, useRef } from 'react';

const GALLERY_ITEMS = [
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    title: 'Norwegian Fjords',
    alt: 'Dramatic Norwegian fjord landscape with mountains and mist',
  },
  {
    src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80',
    title: 'Misty Forest',
    alt: 'Misty forest with tall pine trees and atmospheric fog',
  },
  {
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    title: 'Alpine Peaks',
    alt: 'Majestic alpine peaks at sunrise with dramatic clouds',
  },
  {
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
    title: 'Golden Sunset',
    alt: 'Golden sunset over a vast mountain landscape',
  },
  {
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
    title: 'Morning Mist',
    alt: 'Morning fog rolling through green mountain valleys',
  },
  {
    src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80',
    title: 'Hidden Waterfall',
    alt: 'Hidden waterfall in a lush forest setting',
  },
];

export default function Gallery() {
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
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => els?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="gallery-section" id="gallery" ref={sectionRef}>
      <div className="gallery-inner">
        <p className="section-label reveal">Gallery</p>
        <h2 className="gallery-heading reveal reveal-delay-1">
          Breathtaking destinations
        </h2>

        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={item.title}
              className={`gallery-item reveal reveal-delay-${Math.min(i + 1, 4)}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
              />
              <div className="gallery-item-overlay">
                <span className="gallery-item-title">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
