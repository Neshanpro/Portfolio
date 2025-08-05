import React, { useRef } from 'react';

const GlowCard = ({ card, children, index }) => {

    const cardRefs = useRef([]);

    const handleMouseMove = (index) => (e) => {
        const card = cardRefs.current[index];
        if (!card) return

        const rect = card.getBoundingClientRect();
        const mousex = e.clientX - rect.left - rect.width / 2;
        const mousey = e.clientY - rect.top - rect.height / 2;

        let angle = Math.atan2(mousey, mousex) * (180 / Math.PI);

        angle = (angle + 360) % 360;

        card.style.setProperty('--start', angle + 60);
    }

    return (
        <div ref={(el) => (cardRefs.current[index] = el)} onMouseMove={handleMouseMove(index)} className="card card-border timeline-card rounded-xl p-10 ">
            <div className="glow" />
            <div className="mb-5">
                <p className="text-white-50 text-lg">{card.review}</p>
            </div>
        </div>
    )
}

export default GlowCard