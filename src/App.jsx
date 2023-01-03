import Navbar from "./components/Navbar"
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from "./components/Chat";


//========== styles
const styles = {
  container : `w-[90%] md:max-w-[700px] mx-auto text-center `,
  section : `flex flex-col h-[90vh] bg-gray-100 relative mt-10 shadow-2xl  border-gray-400`,
}



function App() {
  const [user] = useAuthState(auth) ;

  return (
    <div className={styles.container}>
        <section className={styles.section}>
            <Navbar/>
            {user ? <Chat /> : null}
        </section>
    </div>
  )
}

export default App
