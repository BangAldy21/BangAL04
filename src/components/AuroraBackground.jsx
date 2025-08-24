import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AuroraBackground() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleOrientation = (e) => {
      const { gamma, beta } = e;
      setOffset({ x: (gamma || 0) / 5, y: (beta || 0) / 5 });
    };
    window.addEventListener('deviceorientation', handleOrientation, true);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <motion.div
        className="w-[150%] h-[150%] bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-3xl rounded-full"
        animate={{
          x: [offset.x - 40, offset.x + 40, offset.x - 40],
          y: [offset.y - 40, offset.y + 40, offset.y - 40],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
