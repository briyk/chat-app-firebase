import React from 'react'
import GoogleButton from 'react-google-button'
import {auth} from '../firebase'
import {GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'


const SignIn = () => {

     //add handler
     const signInHandler = () =>{
          const Provider = new GoogleAuthProvider();
          //redirecting users to Google sign in page
          signInWithRedirect(auth,Provider)
     }

  return (
    <div className='flex justify-center'>
          <GoogleButton onClick={signInHandler}/>
    </div>
  )
}

export default SignIn