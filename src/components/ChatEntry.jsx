import './ChatEntry.css';
import '../App.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ 
  id, sender, body, timeStamp, likeToggle,
  liked , localSender, localColorClass, remoteColorClass } ) => {
  const heartColor = liked ? '❤️' : '🤍';
  const senderClass = sender === localSender? 'chat-entry local' : 'chat-entry remote';
  const colorText = sender === localSender? `text-color ${localColorClass}` : `text-color ${remoteColorClass}`;
  return (
    <div className={senderClass}>
      <h2 className="entry-name">{sender}</h2>
      <section className='entry-bubble '>
        <p className={colorText}>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp} /></p>
        <button
          onClick={() => likeToggle(id)}
          className="like"
        >
          {heartColor}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  likeToggle: PropTypes.func.isRequired,
  liked: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  localSender: PropTypes.string.isRequired,
  localColorClass: PropTypes.string.isRequired,
  remoteColorClass: PropTypes.string.isRequired,
};

export default ChatEntry;
