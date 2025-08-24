import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Tools from './components/Tools'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ChatRoom from './components/ChatRoom'
import AuroraBackground from './components/AuroraBackground'
import Particles from './components/Particles'

export default function App(){
  return (
    <div className="relative text-white bg-black min-h-screen overflow-hidden">
      <AuroraBackground />
      <Particles />
      <Navbar/>
      <main className="max-w-6xl mx-auto px-4 md:px-6">
        <Hero/>
        <About/>
        <Tools/>
        <Projects/>
        <Contact/>
        <ChatRoom/>
      </main>
      <footer className="text-center text-sm text-neutral-500 py-8">© {new Date().getFullYear()} Your Name</footer>
    </div>
  )
}
