import { useEffect, useRef } from 'react';

const EXPEDITIONS = [
    {
        title: 'Arctic Silence',
        desc: 'Witness the northern lights in complete isolation, surrounded by frozen fjords and endless silence.',
        duration: '5–7 days',
        season: 'Winter',
        img:  'https://images.unsplash.com/photo-1482192505345-5655af888cc4?w=1200&q=80',    },
    {
        title: 'Patagonian Escape',
        desc: 'Explore vast glaciers and untouched landscapes where nature remains raw and powerful.',
        duration: '7–10 days',
        season: 'Spring',
        img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80',
    },
    {
        title: 'Icelandic Retreat',
        desc: 'Relax in geothermal springs and discover volcanic terrains shaped by fire and ice.',
        duration: '4–6 days',
        season: 'All year',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
    },
    {
        title: 'Alpine Serenity',
        desc: 'Stay in luxury cabins nestled in the Alps, surrounded by snow peaks and pure tranquility.',
        duration: '3–5 days',
        season: 'Winter',
        img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80',
    },
];

export default function Expeditions() {
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

    const handleBookingScroll = () => {
        const el = document.querySelector('#booking');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="expeditions-section" id="expeditions" ref={sectionRef}>
            <div className="expeditions-inner">
                <p className="section-label reveal">Expeditions</p>
                <h2 className="expeditions-heading reveal reveal-delay-1">
                    Curated journeys into the extraordinary
                </h2>

                <div className="expeditions-grid">
                    {EXPEDITIONS.map((item, i) => (
                        <div
                            key={item.title}
                            className={`expedition-card liquid-glass reveal reveal-delay-${Math.min(i + 1, 4)}`}
                        >
                            <div className="expedition-image">
                                <img src={item.img} alt={item.title} />
                            </div>

                            <div className="expedition-content">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>

                                <div className="expedition-meta">
                                    <span>{item.duration}</span>
                                    <span>{item.season}</span>
                                </div>

                                <button
                                    className="liquid-glass expedition-btn"
                                    onClick={handleBookingScroll}
                                >
                                    Book this journey
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}