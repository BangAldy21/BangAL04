
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { motion } from 'framer-motion'
import React from 'react'

function Model() {
  const gltf = useGLTF('/card.glb')
  return <primitive object={gltf.scene} scale={2} />
}

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
      <motion.img
        src="/src/assets/profile.png"
        alt="profile"
        className="w-40 h-40 rounded-full shadow-glow mb-6 floating"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <h1 className="text-4xl font-bold mb-2">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-300 mb-8">React + Vite + Tailwind + 3D</p>
      <div className="w-full h-[400px]">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} />
          <Model />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </section>
  )
}
