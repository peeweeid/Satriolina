import React from 'react'
import {collection, onSnapshot,orderBy,query} from "@firebase/firestore";
import { useEffect,useState } from 'react';
import { db } from '../firebase';
const TodoList = () => {
  const [todos,setTodos] = useState([])
  useEffect(()=>{
    const collectionRef = collection(db, "todos")
    const q = query( collectionRef, orderBy("timestamp","desc"));
    const unsubscribe = onSnapshot(q,(querySnapshot)=>{
        setTodos(querySnapshot.docs.map(doc=>({...doc.data(),id: doc.id, timestamp: doc.data().timestamp?.toDate().getTime()

        })))
    });
return unsubscribe;
  },[])
  return (
<div className='h-[400px] bg-scroll bg-secondary rounded-xl container  overflow-y-scroll'>
        {todos.map(todo => 
            <div key={todo.id} className="mt-4 px-2 py-2 rounded-xl shadow-xl bg-pink-100">
                <h1 className='mb-2 px-2 text-xl font-bold'>{todo.title}</h1>
                <h1 className='mb-2 px-2 text-ms font-normal'>{todo.detail}</h1>
            </div>
            
            )}
 </div>   
  )
}

export default TodoList