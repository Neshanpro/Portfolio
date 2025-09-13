import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room.jsx"
import HeroLights from "./HeroLights.jsx";

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <Canvas
            camera={{ position: [0, 0, 15], fov: 45 }}
            performance={{ min: 0.5 }}
            dpr={isMobile ? [1, 1.5] : [1, 2]} // Lower DPR on mobile
            gl={{
                antialias: !isMobile, // Disable antialiasing on mobile
                powerPreference: isMobile ? "low-power" : "high-performance"
            }}
            style={{
                // Disable pointer events on mobile to allow scrolling
                pointerEvents: isMobile ? 'none' : 'auto',
                touchAction: isMobile ? 'none' : 'auto'
            }}
        >
            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                enableRotate={!isMobile} // Disable rotation on mobile
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
                touchAction={isMobile ? "none" : "auto"}
            />
            <HeroLights />
            <group
                scale={isMobile ? 0.5 : 1} // Smaller scale on mobile
                position={isMobile ? [0, -5, 0] : [0, -3.5, 0]} // Lower position on mobile
                rotation={[0, -Math.PI / 4, 0]}
            >
                <Room />
            </group>
        </Canvas>
    )
}

export default HeroExperience