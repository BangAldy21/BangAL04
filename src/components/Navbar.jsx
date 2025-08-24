export default function Navbar(){
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-neutral-800/80 bg-bg/60">
      <nav className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-semibold">Portofolio</a>
        <div className="flex gap-6 text-sm text-neutral-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#tools" className="hover:text-white">Tools</a>
          <a href="#projects" className="hover:text-white">Project</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>
    </header>
  )
}
