import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from '../components/ChatEntry'

const ChatLog = ( { entries, likeToggle, localSender, localColorClass, remoteColorClass } ) => {
  return (
    <div className='chat-log'>
      {entries.map((entry) =>
        <ChatEntry
          key={entry.id}
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          likeToggle={likeToggle}
          localSender = {localSender}
          localColorClass={localColorClass}
          remoteColorClass={remoteColorClass}
        />
      )}
    </div>
  );
};
ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  likeToggle: PropTypes.func.isRequired,
  localSender: PropTypes.string.isRequired,
  localColorClass: PropTypes.string.isRequired,
  remoteColorClass: PropTypes.string.isRequired,
};

export default ChatLog;
