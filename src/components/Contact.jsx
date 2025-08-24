export default function Contact(){
  return (
    <section id="contact" className="py-16">
      <h2 className="text-2xl font-bold mb-6">Contact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-800">
          <form onSubmit={(e)=>e.preventDefault()} className="space-y-3">
            <input className="w-full px-3 py-2 bg-neutral-800 rounded-lg" placeholder="Full Name"/>
            <input className="w-full px-3 py-2 bg-neutral-800 rounded-lg" placeholder="Email"/>
            <textarea rows="6" className="w-full px-3 py-2 bg-neutral-800 rounded-lg" placeholder="Message" />
            <button className="px-4 py-2 rounded-lg bg-neutral-700">Send</button>
          </form>
        </div>
        <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-800">
          <p className="text-neutral-400">You can also reach me via the chat widget.</p>
        </div>
      </div>
    </section>
  )
}
