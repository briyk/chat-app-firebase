import { useState, useEffect, useRef } from 'react'
import Messages from './Messages';
import SendMessage from './SendMessage';
import { db } from '../firebase';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';

const Chat = () => {
     const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

     return (
          <>
               <main className='flex flex-col p-[10px] relative'>
                    {/* Message */}
                    {messages &&
                         messages.map((message) => (
                              <Messages key={message.id} message={message} />
                         ))}
               </main>
               {/* Sending */}
               <SendMessage />
               <span ref={scroll}></span>
          </>
     )
}

export default Chat