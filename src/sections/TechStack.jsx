import TitleHeader from "../components/TitleHeader"
import { techStackIcons } from "../constants"
import TechIcon from "../components/Models/TechLogos/TechIcon"
import { useMediaQuery } from "react-responsive"

const TechStack = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <section id="tech-stack" className="w-full md:mt-40 mt-20 section-padding">
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader
                    title="Tech Stack"
                    sub="The Skills I Bring To The Table"
                />
                <div className="mt-20">
                    {isMobile ? (
                        // Mobile: Static cards with icons
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {techStackIcons.map((tech, index) => (
                                <div
                                    key={tech.name}
                                    className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <img
                                            src={tech.fallbackIcon}
                                            alt={tech.name}
                                            className="w-12 h-12 mb-3"
                                        />
                                        <h3 className="text-white font-medium text-sm">{tech.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // Desktop: Interactive 3D models
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                            {techStackIcons.map((tech, index) => (
                                <div key={tech.name} className="flex flex-col items-center">
                                    <div className="w-48 h-48 mb-4">
                                        <TechIcon model={tech} />
                                    </div>
                                    <h3 className="text-white text-lg font-medium text-center">{tech.name}</h3>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default TechStack