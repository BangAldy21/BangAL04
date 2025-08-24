import { projects } from '../data/projects'
import { motion } from 'framer-motion'

export default function Projects(){
  return (
    <section id="projects" className="py-16">
      <h2 className="text-2xl font-bold mb-6">Project</h2>
      <p className="text-neutral-400 mb-6">Showcasing a selection of projects that reflect my skills, creativity, and passion.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.a key={i} href={p.link}
            whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(168,85,247,0.5)' }}
            className="group rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 hover:border-neutral-700 transition"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <div className="text-xs text-neutral-400 mt-1">{p.stack}</div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
