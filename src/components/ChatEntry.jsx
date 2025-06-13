import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ( { id, sender, body, timeStamp, likeToggle, liked } ) => {
  const heartColor = liked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
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
};

export default ChatEntry;
