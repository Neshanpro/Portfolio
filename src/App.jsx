import { lazy, Suspense } from "react"
import NavBar from "./components/NavBar.jsx"
import FeatureCards from "./sections/FeatureCards.jsx"
import Hero from "./sections/Hero.jsx"
import { Analytics } from "@vercel/analytics/react"

// Lazy load heavy components
const ComingSoon = lazy(() => import("./sections/ComingSoon.jsx"))
const ExperienceAndCert = lazy(() => import("./sections/ExperienceAndCert.jsx"))
const TechStack = lazy(() => import("./sections/TechStack.jsx"))
const Contact = lazy(() => import("./sections/Contact.jsx"))
const Footer = lazy(() => import("./sections/Footer.jsx"))

// Loading component
const LoadingSpinner = () => (
    <div className="flex-center min-h-[50vh]">
        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
)

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <FeatureCards />

            <Suspense fallback={<LoadingSpinner />}>
                <ComingSoon />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
                <ExperienceAndCert />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
                <TechStack />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
                <Contact />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
                <Footer />
            </Suspense>

            <Analytics />
        </>
    )
}

export default App