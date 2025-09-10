import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ComingSoon = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const subTextRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const text = textRef.current;
        const subText = subTextRef.current;

        // Create timeline for smooth animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
        });

        // Animate main text with stagger effect
        tl.fromTo(
            text.children,
            {
                y: 100,
                opacity: 0,
                rotationX: 90,
            },
            {
                y: 0,
                opacity: 1,
                rotationX: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
            }
        );

        // Animate subtitle
        tl.fromTo(
            subText,
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
            },
            "-=0.5"
        );

        // Continuous floating animation for the main text
        gsap.to(text, {
            y: -10,
            duration: 2,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="section-padding flex-col-center min-h-screen bg-gradient-to-b from-black to-black-100"
        >
            <div className="max-w-4xl mx-auto text-center">
                <div
                    ref={textRef}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
                >
                    <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        New
                    </span>{" "}
                    <span className="inline-block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                        Projects
                    </span>{" "}
                    <span className="inline-block bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Coming
                    </span>{" "}
                    <span className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
                        Soon
                    </span>
                </div>

                <p
                    ref={subTextRef}
                    className="text-lg md:text-xl text-white-50 max-w-2xl mx-auto leading-relaxed"
                >
                    Exciting new projects are in development. Stay tuned for innovative
                    solutions and creative implementations that push the boundaries of
                    modern web development.
                </p>

                {/* Decorative elements */}
                <div className="mt-16 flex justify-center items-center gap-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-200"></div>
                </div>
            </div>
        </section>
    );
};

export default ComingSoon;
