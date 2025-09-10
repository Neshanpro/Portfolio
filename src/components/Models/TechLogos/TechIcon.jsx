import { OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import { Environment } from "@react-three/drei"
import { useEffect, Suspense } from "react"
import * as THREE from "three"


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
        <Canvas>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            <Environment preset="city" />

            <OrbitControls enableZoom={false} />

            <Suspense fallback={null}>
                <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
                    <group scale={model.scale} rotation={model.rotation}>
                        <primitive object={scene.scene} />
                    </group>
                </Float>
            </Suspense>
        </Canvas>
    )
}

export default TechIcon