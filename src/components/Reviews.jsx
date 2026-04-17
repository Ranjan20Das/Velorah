import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const REVIEWS = [
    {
        name: 'Sophia Laurent',
        text: 'An experience beyond luxury. Every moment felt deeply personal and perfectly crafted.',
    },
    {
        name: 'James Carter',
        text: 'Velorah redefined travel for me. Silence, nature, and absolute comfort.',
    },
    {
        name: 'Elena Fischer',
        text: 'From start to finish, everything was flawless. Truly unforgettable.',
    },
    {
        name: 'Daniel Kim',
        text: 'A rare combination of adventure and serenity. Highly recommended.',
    },
    {
        name: 'Isabella Rossi',
        text: 'It felt like time stopped. Exactly what I needed.',
    },
];

export default function Reviews() {
    const trackRef = useRef(null);

    useEffect(() => {
        const el = trackRef.current;

        const animation = gsap.to(el, {
            xPercent: -50,
            duration: 20,
            ease: 'linear',
            repeat: -1,
        });

        // Pause on hover
        el.addEventListener('mouseenter', () => animation.pause());
        el.addEventListener('mouseleave', () => animation.resume());

        return () => {
            animation.kill();
        };
    }, []);

    return (
        <section className="reviews-section" id ="reviews">
            <div className="reviews-inner">
                <p className="section-label">Reviews</p>
                <h2 className="reviews-heading">
                    What our guests say
                </h2>

                <div className="reviews-wrapper">
                    <div className="reviews-track" ref={trackRef}>
                        {[...REVIEWS, ...REVIEWS].map((review, i) => (
                            <div key={i} className="review-card liquid-glass">
                                <p className="review-text">“{review.text}”</p>
                                <span className="review-name">— {review.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}