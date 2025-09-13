import { OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import { Environment } from "@react-three/drei"
import { useEffect, Suspense } from "react"
import { useMediaQuery } from "react-responsive"

const TechIcon = ({ model }) => {
    const scene = useGLTF(model.modelPath)
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    useEffect(() => {
        if (model.name === "Interactive Developer" && scene?.scene) {
            console.log("Attempting to change color for Interactive Developer")
            scene.scene.traverse((child) => {
                console.log("Child name:", child.name, "isMesh:", child.isMesh)
                if (child.isMesh) {
                    console.log("Changing material for:", child.name)
                    // Handle both single material and material arrays
                    const materials = Array.isArray(child.material) ? child.material : [child.material]

                    materials.forEach((mat) => {
                        if (mat) {
                            // Clear any existing textures so color shows through
                            mat.map = null
                            mat.emissiveMap = null
                            mat.color?.set('#ffffff')
                            mat.needsUpdate = true
                        }
                    })
                }
            })
        }
    }, [scene, model.name])

    return (
        <div className="w-full h-full">
            {/* Mobile fallback */}
            {isMobile ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg">
                    <img
                        src={model.fallbackIcon}
                        alt={model.name}
                        className="w-16 h-16"
                    />
                </div>
            ) : (
                /* Desktop 3D Canvas */
                <Canvas
                    camera={{ position: [0, 0, 15], fov: 45 }}
                    gl={{
                        antialias: true,
                        powerPreference: "high-performance"
                    }}
                    dpr={[1, 2]}
                >
                    <Suspense fallback={null}>
                        <Environment preset="studio" />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[5, 5, 5]} intensity={1} />

                        <OrbitControls
                            enablePan={false}
                            enableZoom={false}
                            enableRotate={true}
                            autoRotate={true}
                            autoRotateSpeed={2}
                            maxPolarAngle={Math.PI / 2}
                            minPolarAngle={Math.PI / 2}
                        />

                        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                            <group scale={model.scale || 1} rotation={model.rotation || [0, 0, 0]}>
                                <primitive object={scene.scene} />
                            </group>
                        </Float>
                    </Suspense>
                </Canvas>
            )}
        </div>
    )
}

export default TechIcon