/* eslint-disable react/prop-types */
import './Controls.css';

const CardControls = ({
  recipient,
  setRecipient,
  message,
  setMessage,
  sender,
  setSender,
  theme,
  setTheme,
  font,
  setFont,
  background,
  setBackground,
  textColor,
  setTextColor,
  themes,
  fonts,
  backgrounds,
  handleBackgroundChange,
  downloadCard,
}) => {
  return (
    <div className="controls">
      <div className="field">
        <label>To:</label>
        <input
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Enter recipient name"
        />
      </div>

      <div className="field">
        <label>Your message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          placeholder="Write your message here"
        />
      </div>

      <div className="field">
        <label>From:</label>
        <input
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          placeholder="Your name"
        />
      </div>

      <div className="field">
        <label>Pick a color:</label>
        <div className="theme-buttons">
          {themes.map((t) => (
            <button
              key={t}
              className={`theme-btn ${t} ${theme === t ? 'active' : ''}`}
              onClick={() => setTheme(t)}
            />
          ))}
        </div>
      </div>

      <div className="field">
        <label>Choose font:</label>
        <div className="font-buttons">
          {fonts.map((f) => (
            <button
              key={f}
              className={`font-btn ${f} ${font === f ? 'active' : ''}`}
              onClick={() => setFont(f)}
            >
              Aa
            </button>
          ))}
        </div>
      </div>

      <div className="field">
        <label>Select background:</label>
        <div className="bg-buttons">
          {backgrounds.map((bg) => (
            <button
              key={bg}
              className={`bg-btn ${background === bg ? 'active' : ''}`}
              onClick={() => setBackground(bg)}
            >
              <img src={bg} alt="background option" />
            </button>
          ))}
        </div>

        <div className="field">
          <label>Or upload your own image:</label>
          <input
            type="file"
            accept="image/*"
            id="file-upload"
            onChange={handleBackgroundChange}
          />
          <label htmlFor="file-upload" className="file-label">
            Choose Image
          </label>
        </div>
      </div>

      <div className="field">
        <label>Pick Text Color:</label>
        <input
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
          className="color-picker"
        />
      </div>

      <div className="field">
        <button onClick={downloadCard} className="download-btn">
          Download Card
        </button>
      </div>
    </div>
  );
};

export default CardControls;
