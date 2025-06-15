import PropTypes from 'prop-types';
import '../App.css';

const ColorChoice = ({ setColorCallback }) => {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

  return (
    <div className="color-choice">
      {colors.map((color) => (
        <button
          key={color}
          className = {`color-button ${color}`}
          onClick={() => setColorCallback(color)}
        />
      ))}
    </div>
  );
};

ColorChoice.propTypes = {
  setColorCallback: PropTypes.func.isRequired,
};

export default ColorChoice;