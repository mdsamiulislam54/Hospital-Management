import { setUser} from './Redux/Store/ReduxSlice/UserSlice'
import { onAuthStateChanged } from 'firebase/auth'
import auth from './firebase-init.js'
import './App.css'
import Root from './components/LayOut/Root'
import { useEffect } from 'react'
import { store } from './Redux/Store/Store.js'
import { useSelector } from 'react-redux'


function App() {
  const {user} = useSelector((state)=>state.user)
  useEffect(()=>{
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const userData = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL:user.photoURL
        };

        store.dispatch(setUser(userData));
      } else {
        store.dispatch(setUser(null));
      }
    });

    return () => subscribe(); 
  },[])
  return (
   <>
      <Root/>
      {
        user ? (''):(<p>please login </p>)
      }
   </>
  )
}

export default App
