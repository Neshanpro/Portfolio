import { useGSAP } from "@gsap/react"
import TechIcon from "../components/Models/TechLogos/TechIcon"
import TitleHeader from "../components/TitleHeader"
import { techStackIcons } from "../constants"
import { gsap } from "gsap"
import { useMediaQuery } from "react-responsive"

const TechStack = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    useGSAP(() => {
        gsap.fromTo(".tech-card", { y: 50, opacity: 0 }, {
            y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut",
            scrollTrigger: {
                trigger: "#skills",
                start: "top center",
            }
        })
    })

    return (
        <div id="skills" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="My Preferred Tech Stack" sub="The Skills I Bring To The Table" />

                <div className="tech-grid">
                    {techStackIcons.map((icon) => (
                        <div key={icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                            <div className="tech-card-animated-bg" />
                            <div className="tech-card-content">
                                <div className={`tech-icon-wrapper ${isMobile ? 'pointer-events-none' : ''}`}>
                                    {!isMobile ? (
                                        <TechIcon model={icon} />
                                    ) : (
                                        // Static image for mobile to improve performance
                                        <div className="w-32 h-32 flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg">
                                            <span className="text-2xl font-bold text-white">
                                                {icon.name.split(' ')[0]}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className="padding-x w-full">
                                    <p>{icon.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechStack