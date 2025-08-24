import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function FloatingWrapper({ children }) {
  return (
    <group>
      {children}
    </group>
  )
}

function CardModel(){
  const { scene } = useGLTF('/card.glb')
  return <primitive object={scene} scale={2} />
}
useGLTF.preload('/card.glb')

export default function Hero(){
  const [hasModel, setHasModel] = useState(false)

  useEffect(()=>{
    fetch('/card.glb', { method: 'HEAD' })
      .then(r => setHasModel(r.ok))
      .catch(()=> setHasModel(false))
  }, [])

  return (
    <section className="py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <span className="inline-block px-3 py-1 rounded-full text-xs bg-neutral-900 border border-neutral-800">“Avoid or just undertake it”</span>
        <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight">Hi, I'm Your Name</h1>
        <p className="mt-4 text-neutral-400 max-w-xl">Pengembang aplikasi dan web berfokus pada desain modern & performa tinggi.</p>
        <div className="mt-6 flex gap-4">
          <motion.a href="#projects" whileHover={{ scale: 1.06, boxShadow: '0 0 20px #a855f7' }} whileTap={{ scale: 0.97 }}
            className="px-5 py-2 rounded-xl bg-purple-600/80 hover:bg-purple-600 shadow-glow">Explore Projects</motion.a>
          <motion.a href="/cv.pdf" whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }}
            className="px-5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700">Download CV</motion.a>
        </div>
      </div>
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}
        className="h-80 md:h-96 rounded-2xl border border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)] animate-pulse-glow">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5,5,5]} intensity={1} />
          <OrbitControls enablePan={false} />
          {/* Floating effect */}
          {hasModel ? (
            <motion.group animate={{ y: [0,-0.3,0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
              <CardModel />
            </motion.group>
          ) : (
            <motion.mesh animate={{ y: [0,-0.3,0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
              <boxGeometry args={[2, 1.2, 0.1]} />
              <meshStandardMaterial color="#a855f7" />
            </motion.mesh>
          )}
        </Canvas>
      </motion.div>
    </section>
  )
}
