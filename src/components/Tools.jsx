import { tools } from '../data/tools'
import { motion } from 'framer-motion'

export default function Tools(){
  return (
    <section id="tools" className="py-16">
      <h2 className="text-2xl font-bold mb-6">Tools & Technologies</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map((t, i) => (
          <motion.div key={i}
            whileHover={{ scale: 1.04, boxShadow: '0 0 14px rgba(168,85,247,0.5)' }}
            className="flex items-center gap-3 p-4 bg-neutral-900 rounded-xl border border-neutral-800"
          >
            <img src={t.img} alt={t.name} className="w-8 h-8 object-contain" />
            <span className="text-sm">{t.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
