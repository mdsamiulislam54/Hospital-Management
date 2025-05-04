import {setLoading, setUser} from './Redux/Store/ReduxSlice/UserSlice'
import { onAuthStateChanged } from 'firebase/auth'
import auth from './firebase-init.js'
import './App.css'
import Root from './components/LayOut/Root'
import { useEffect } from 'react'
import { store } from './Redux/Store/Store.js'


function App() {
  
  useEffect(()=>{
    store.dispatch(setLoading(true))
    const unsubscribe  = onAuthStateChanged(auth, (user)=>{
      if(user){
        store.dispatch(setUser(user))
      }else{
        store.dispatch(setUser(null))
      }
    })
  
    return () => unsubscribe();
  },[])
  return (
   <>
      <Root/>
      
   </>
  )
}

export default App
