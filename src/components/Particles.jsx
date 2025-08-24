import { useEffect, useRef, useState } from 'react'

export default function Particles() {
  const canvasRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleOrientation = (e) => {
      const { gamma, beta } = e;
      setOffset({ x: (gamma || 0) / 20, y: (beta || 0) / 20 });
    };
    window.addEventListener('deviceorientation', handleOrientation, true);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
      });
    }

    let raf;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255,255,255,0.8)';
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x + offset.x * 10, p.y + offset.y * 10, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [offset]);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-20" />;
}
