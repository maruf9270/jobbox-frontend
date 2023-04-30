import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import {useEffect} from 'react'
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/firebase.config";
import { useDispatch } from "react-redux";
import { manageLoading, manageUser } from "./features/authentication/authenticationSlice";

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(manageLoading())
    onAuthStateChanged(auth,(user)=>{
      dispatch(manageUser({email:user?.email}))
    })
   
      
     
  },[])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
