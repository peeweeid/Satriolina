import { db } from '../firebase'
import { collection, serverTimestamp,addDoc } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
const TodoForm = () => {
    const [todo,setTodo] = useState({title:'',detail: ''})
    
    const onSubmit = async () => {
        const collectionRef = collection(db, "todos")
        const docRef = await addDoc(collectionRef, {...todo,timestamp:
        serverTimestamp( ) })
        setTodo({title:'',detail:''})
     
    }

  return (
  
    <div className='container max-w-md mb-10'>
   <span className='text-lg font-Georgia text-primary font-bold'> Nama </span>
      <form>
  <input type="title" name="title" label="title" id="title"
  value={todo.title}
required={true} minLength={1} maxLength={10} 
  onChange={e => setTodo({...todo, title: e.target.value})} 
  className="mt-1 mb-5 px-3 py-2 bg-secondary border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-2xl sm:text-sm focus:ring-1" placeholder="isi nama anda" />
  
  <span className='text-lg mt-4 font-Georgia text-primary font-bold'> Ucapan </span>
  <input type="detail" name="detail" label="detail" id="detail"
  value={todo.detail} 
  onChange={e => setTodo({...todo, detail: e.target.value})}
  required={true} minLength={1} maxLength={10} 
  className="mt-1 px-3 h-24 py-2 bg-secondary border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-2xl sm:text-sm focus:ring-1" placeholder="ucapan dan doa" />
  <button onClick={onSubmit} className='px-2 py-2 rounded-xl bg-sky-600 mt-2 text-white font-bold hover:bg-sky-500' >Tambah Ucapan</button>
  </form>
  </div>
  
  )
  
}

export default TodoForm
