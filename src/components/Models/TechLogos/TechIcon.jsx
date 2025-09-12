import { OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import { Environment } from "@react-three/drei"
import { useEffect, Suspense } from "react"

const TechIcon = ({ model }) => {
    const scene = useGLTF(model.modelPath)

    useEffect(() => {
        if (model.name === "Interactive Developer" && scene?.scene) {
            scene.scene.traverse((child) => {
                if (child.isMesh) {
                    const mats = Array.isArray(child.material) ? child.material : [child.material]
                    mats.forEach((mat) => {
                        if (!mat) return
                        // Remove textures so the color shows purely
                        if (mat.map) mat.map = null
                        if (mat.emissiveMap) mat.emissiveMap = null
                        mat.color?.set('#ffffff')
                        mat.needsUpdate = true
                    })
                }
            })
        }
    }, [scene, model.name])

    return (
        <Canvas
            performance={{ min: 0.5 }}
            dpr={[1, 2]} // Limit device pixel ratio for performance
            gl={{ 
                antialias: false, // Disable for mobile performance
                powerPreference: "low-power" // Optimize for battery life
            }}
        >
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            <Environment preset="city" />

            <OrbitControls 
                enableZoom={false} 
                enablePan={false} // Disable panning to prevent scroll interference
                enableRotate={false} // Disable rotation on mobile to prevent scroll issues
                touchAction="none" // Prevent touch conflicts
            />

            <Suspense fallback={null}>
                <Float speed={3} rotationIntensity={0.3} floatIntensity={0.5}>
                    <group scale={model.scale} rotation={model.rotation}>
                        <primitive object={scene.scene} />
                    </group>
                </Float>
            </Suspense>
        </Canvas>
    )
}

export default TechIcon