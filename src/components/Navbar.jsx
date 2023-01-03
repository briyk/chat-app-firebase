import React from 'react'
import logoIcon from '../assets/chat.png'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import LogOut from './LogOut'
import SignIn from './SignIn'


const Navbar = () => {
     const [user] = useAuthState(auth) ;


  return (
    <nav className='bg-gray-600 h-[70px] flex items-center justify-between p-4'>
         <div className='flex items-center'>
               <img src={logoIcon} alt="logo" className='w-[30px]'/>
               <h2 className='text-white font-medium text-2xl ml-2 mt-1'>Chat</h2>
         </div>
         {
               user? <LogOut/> : <SignIn/>
          }  
    </nav>
  )
}

export default Navbar