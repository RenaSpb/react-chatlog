import './App.css';
import ChatLog from './components/ChatLog';
import dataList from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat Place</h1>
      </header>
      <main>
        <ChatLog entries={dataList} />
      </main>
    </div>
  );
};

export default App;
