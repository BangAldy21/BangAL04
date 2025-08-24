import { useEffect, useState } from 'react'
import { auth, db, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore'

export default function ChatRoom(){
  const [user, setUser] = useState(null)
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(u => setUser(u))
    const q = query(collection(db, 'messages'), orderBy('createdAt','asc'))
    const unsubMsg = onSnapshot(q, snap => {
      setMessages(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    })
    return () => { unsub(); unsubMsg() }
  }, [])

  const login = async () => { await signInWithPopup(auth, provider) }

  const send = async () => {
    if(!text.trim() || !user) return
    await addDoc(collection(db, 'messages'), {
      text,
      uid: user.uid,
      displayName: user.displayName || 'Anon',
      createdAt: serverTimestamp()
    })
    setText('')
  }

  return (
    <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-800 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
      {!user ? (
        <button onClick={login} className="bg-white/10 px-4 py-2 rounded-lg">Login with Google</button>
      ) : (
        <>
          <div className="h-64 overflow-y-auto space-y-2 mb-3 border-b border-neutral-800 pb-3">
            {messages.map(m => (
              <div key={m.id} className="text-sm"><b className="text-purple-300">{m.displayName || 'Anon'}:</b> {m.text}</div>
            ))}
          </div>
          <div className="flex gap-2">
            <input value={text} onChange={e=>setText(e.target.value)} placeholder="Type a message" className="flex-1 px-3 py-2 bg-neutral-800 rounded-lg outline-none"/>
            <button onClick={send} className="px-4 py-2 rounded-lg bg-purple-600">Send</button>
          </div>
        </>
      )}
    </div>
  )
}
