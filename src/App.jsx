import './App.css';
import ChatEntry from './components/ChatEntry';
import dataList from './data/messages.json';

const App = () => {
  const firstMessage = dataList[0];

  return (
    <div id="App">
      <header>
        <h1>Chat Place</h1>
      </header>
      <main>
        <ChatEntry
          sender={firstMessage.sender}
          body={firstMessage.body}
          timeStamp={firstMessage.timeStamp}
        />
      </main>
    </div>
  );
};

export default App;
