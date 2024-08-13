import React from 'react';
import './NewsTicker.css'; // Import the CSS file

const NewsTicker = ({ headlines }) => {
  return (
    <div className="news-ticker">
      <div className="news-ticker-content">
        {headlines.map((headline, index) => (
          <div key={index} className="news-ticker-item">
            {headline}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
