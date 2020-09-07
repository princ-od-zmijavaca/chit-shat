import React, { useEffect, useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync').then(res => {
      setMessages(res.data);
    })
  }, [messages]); // Fix za poruke ali sjebe pushera

  useEffect(() => {

    const pusher = new Pusher('b5b671d57e844c3ca149', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      // alert(JSON.stringify(newMessage)); Debugging tool
      setMessages([...messages,newMessage]);
    });

    return () => {
      channel.unbind_all(); //Hmmm....So it doesnt mess up browser if group starts spamming
      channel.unsubscribe();
    };

  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
