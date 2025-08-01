import React, { useEffect } from 'react';
import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

const TechIcon = ({ model }) => {
    if (!model) {
        console.error("TechIcon: modelPath is undefined");
        return null;
    }

    const scene = useGLTF(model.modelPath);

    useEffect(() => {
        if (model.name === 'Interactive Developer') {
            scene.scene.traverse((child) => {
                if (child.isMesh && child.name === 'Object_5') {
                    child.material = new THREE.MeshStandardMaterial({ color: 'white' });
                }
            });
        }
    }, [model.name, scene.scene]);

    return (
        <div style={{ width: '150px', height: '150px' }}>
            <Canvas style={{ background: 'transparent' }} gl={{ alpha: true }}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <Environment preset="city" />
                <OrbitControls enableZoom={false} />
                <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
                    <group scale={model.scale} rotation={model.rotation}>
                        <primitive object={scene.scene} />
                    </group>
                </Float>
            </Canvas>
        </div>
    );
};

export default TechIcon;
