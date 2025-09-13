import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import Computer from "./Computer";

const ContactExperience = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <Canvas
            shadows={!isMobile} // Disable shadows on mobile for performance
            camera={{ position: [0, 3, 7], fov: 45 }}
            performance={{ min: 0.5 }}
            dpr={isMobile ? [1, 1.5] : [1, 2]}
            gl={{
                antialias: !isMobile,
                powerPreference: isMobile ? "low-power" : "high-performance"
            }}
            style={{
                // Disable pointer events on mobile to allow scrolling
                pointerEvents: isMobile ? 'none' : 'auto',
                touchAction: isMobile ? 'none' : 'auto'
            }}
        >
            <ambientLight intensity={0.5} color="#fff4e6" />

            <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />

            <directionalLight
                position={[5, 9, 1]}
                castShadow={!isMobile}
                intensity={2.5}
                color="#ffd9b3"
            />

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={!isMobile} // Disable rotation on mobile
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
                touchAction={isMobile ? "none" : "auto"}
            />

            <group scale={[1, 1, 1]}>
                <mesh
                    receiveShadow={!isMobile}
                    position={[0, -1.5, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                >
                    <planeGeometry args={[30, 30]} />
                    <meshStandardMaterial color="#a46b2d" />
                </mesh>
            </group>

            <group scale={0.03} position={[0, -1.49, -2]} castShadow={!isMobile}>
                <Computer />
            </group>
        </Canvas>
    );
};

export default ContactExperience;
