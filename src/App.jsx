import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import data from './data/messages.json';

const App = () => {
  const [messages, setMessage] = useState(data);

  const likeToggle = (id) => (
    setMessage(prev => prev.map( message =>
      message.id == id ? { ...message, liked: !message.liked } : message
    ))
  );

  const likedCount = () => {
    let count = 0;
    for (let message of messages) {
      if (message.liked) {count += 1;}
    }
    return count;
  };

  const count = likedCount();

  return (
    <div id="App">
      <header>
        <h1>Chat Place</h1>
        <p>{count} {count < 2 ? '❤️' : '❤️s'}</p>
      </header>
      <main>
        <ChatLog
          entries={messages}
          likeToggle = {likeToggle}
        />
      </main>
    </div>
  );
};

export default App;
