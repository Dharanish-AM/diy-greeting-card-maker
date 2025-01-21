import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import './App.css';
import html2canvas from 'html2canvas';
import CardPreview from './components/CardPreview/CardPreview.jsx';
import CardControls from './components/Controls/Controls.jsx';

function App() {
  let [message, setMessage] = useState('Happy Birthday!');
  let [recipient, setRecipient] = useState('Dear Friend');
  let [sender, setSender] = useState('With love');
  let [theme, setTheme] = useState('theme-rose');
  let [font, setFont] = useState('font-serif');
  let [background, setBackground] = useState(
    'https://images.unsplash.com/photo-1490750967868-88aa4486c946'
  );
  let [textColor, setTextColor] = useState('#000000');

  let themes = ['theme-rose', 'theme-blue', 'theme-emerald', 'theme-transparent'];
  let fonts = ['font-serif', 'font-sans', 'font-mono'];
  let backgrounds = [
    'https://images.unsplash.com/photo-1490750967868-88aa4486c946',
    'https://images.unsplash.com/photo-1513151233558-d860c5398176',
  ];

  const handleBackgroundChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackground(reader.result);
      };
      reader.readAsDataURL(file); 
    }
  };

  const downloadCard = () => {
    const cardElement = document.querySelector('.card');
    html2canvas(cardElement, {
      useCORS: true, 
      allowTaint: true, 
    }).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'card.png';
      link.click();
    });
  };

  return (
    <div className="app">
      <h1 className="title">
        <Sparkles style={{ display: 'inline', marginRight: '10px' }} />
        Make a Card
      </h1>

      <div className="content">
        <CardPreview
          background={background}
          theme={theme}
          font={font}
          textColor={textColor}
          recipient={recipient}
          message={message}
          sender={sender}
        />

        <CardControls
          recipient={recipient}
          setRecipient={setRecipient}
          message={message}
          setMessage={setMessage}
          sender={sender}
          setSender={setSender}
          theme={theme}
          setTheme={setTheme}
          font={font}
          setFont={setFont}
          background={background}
          setBackground={setBackground}
          textColor={textColor}
          setTextColor={setTextColor}
          themes={themes}
          fonts={fonts}
          backgrounds={backgrounds}
          handleBackgroundChange={handleBackgroundChange}
          downloadCard={downloadCard}
        />
      </div>
    </div>
  );
}

export default App;
