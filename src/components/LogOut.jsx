import React from 'react'
import {auth} from '../firebase'
import {  signOut } from "firebase/auth";

const LogOut = () => {

     const handleLogout = () => {               
          signOut(auth).then(() => {
          // Sign-out successful.
              console.log("Signed out successfully")
          }).catch((error) => {
          // An error happened.
          });
      }
  return (
    <div>
       <button onClick={handleLogout}  type='button' className='bg-[#2393EC] text-white text-xl p-2 rounded-sm'>Log out</button>
    </div>
  )
}

export default LogOut