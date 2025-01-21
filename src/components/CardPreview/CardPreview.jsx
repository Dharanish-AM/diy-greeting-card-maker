/* eslint-disable react/prop-types */
import './CardPreview.css';

const CardPreview = ({ background, theme, font, textColor, recipient, message, sender }) => {
  return (
    <div className="card">
      <img src={background} alt="background" className="card-bg" />
      <div className={`card-overlay ${theme}`}>
        <div className={`card-content ${font}`} style={{ color: textColor }}>
          <p>{recipient}</p>
          <p className="message">{message}</p>
          <p>{sender}</p>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
