import NavBar from "./components/NavBar.jsx"
import FeatureCards from "./sections/FeatureCards.jsx"
import Hero from "./sections/Hero.jsx"
import ShowcaseSection from "./sections/ShowcaseSection.jsx"
import ExperienceAndCert from "./sections/ExperienceAndCert.jsx"

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <FeatureCards />
            <ExperienceAndCert />
            {/* <Contact /> */}
        </>
    )
}

export default App