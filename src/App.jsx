import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';
import data from './data/messages.json';

const App = () => {
  const [messages, setMessage] = useState(data);
  const localSender = messages[0].sender;
  const [localColorClass, setLocalColorClass] = useState('blue');
  const [remoteColorClass, setRemoteColorClass] = useState('green');

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
        <h1>
          Chat between{' '}
          <span className={`text-color ${localColorClass}`}>
            {messages[0].sender}
          </span>{' '}
          and{' '}
          <span className={`text-color ${remoteColorClass}`}>
            {messages[1].sender}
          </span>
        </h1>
        <div className='header-wrap'>
          <div className="color-chooser-row">
            <ColorChoice setColorCallback={setLocalColorClass} />
          </div>
          <p className='heart-class'>{count} {count < 2 ? '❤️' : '❤️s'}</p>
          <div className="color-chooser-row">
            <ColorChoice setColorCallback={setRemoteColorClass} />
          </div>
        </div>

      </header>
      <main>
        <ChatLog
          entries={messages}
          likeToggle = {likeToggle}
          localSender = {localSender}
          localColorClass={localColorClass}
          remoteColorClass={remoteColorClass}
        />
      </main>
    </div>
  );
};

export default App;
