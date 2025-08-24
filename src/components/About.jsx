import { motion } from 'framer-motion'
export default function About(){
  return (
    <motion.section id="about" className="py-16"
      initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }} viewport={{ once: true }}
    >
      <div className="rounded-2xl p-8 border border-purple-700/30 bg-neutral-900/60">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="mt-4 text-neutral-300 max-w-3xl">
          I'm a full‑stack developer passionate about building modern, high‑performance applications with an intuitive user experience.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-6 text-center">
          <div><div className="text-3xl font-extrabold">20+</div><div className="text-sm text-neutral-400">Project Finished</div></div>
          <div><div className="text-3xl font-extrabold">3+</div><div className="text-sm text-neutral-400">Years of Experience</div></div>
        </div>
      </div>
    </motion.section>
  )
}
