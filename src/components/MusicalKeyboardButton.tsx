import React from 'react';

const MusicalKeyboardButton: React.FC = () => {

  // Placeholder function for musicalKeyboard button
  const functionA = () => {
    console.log('Function A executed.');
    // Add your logic here...
  };

  // Placeholder function for mainTrigger button
  const functionB = () => {
    console.log('Function B executed.');
    // Add your logic here...
  };

  return (
    <div>
      <button onClick={functionA}>musicalKeyboard</button>: 
      {`{channel: 0}`}
      <br />
      <button onClick={functionB}>mainTrigger</button>: 
      {`{channel: 1, note: 10}`}
    </div>
  );
};

export default MusicalKeyboardButton;
