import React from 'react';
import NewsTicker from './NewsTicker';

const App = () => {
  const headlines = [
    'Breaking News: Market hits new high!',
    'Weather Alert: Storm approaching the coast.',
    'Sports: Local team wins championship!',
    // Add more headlines as needed
  ];

  return (
    <div>
      <NewsTicker headlines={headlines} />
    </div>
  );
};

export default App;
