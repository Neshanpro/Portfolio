import TitleHeader from "../components/TitleHeader.jsx"

const ExperienceAndCert = () => {
    return (
        <section id="experience" className="w-full md:mt-40 mt-20 section-padding xl:px-0">
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader title="Experience & Certifications" sub="Each experience and certification adds to the foundation of who I am as a developer." />

                <div className="mt-32 relative">
                    <div className="relative z-50 xl:space-y-32 space-y-20">
                        {expCards}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ExperienceAndCert