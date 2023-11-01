import React, { useState } from 'react';

const AssignActions = () => {
  const [showGrid, setShowGrid] = useState(false);
  const [selectedButton, setSelectedButton] = useState<string | null>(null);


  const handleButtonClick = (buttonId: string) => {
    setSelectedButton(buttonId);
    // You can also add logic here to listen to the next midi note, as needed.
    console.log(`Button ${buttonId} clicked. Awaiting next MIDI input...`);
  };

  return (
    <div>
      {!showGrid ? (
        <button onClick={() => setShowGrid(true)}>Assign Actions</button>
      ) : (
        <div>
          <div>
            <button onClick={() => handleButtonClick('A1')}>A1</button>
            <button onClick={() => handleButtonClick('A2')}>A2</button>
            <button onClick={() => handleButtonClick('A3')}>A3</button>
            <button onClick={() => handleButtonClick('A4')}>A4</button>
          </div>
          <div>
            <button onClick={() => handleButtonClick('B1')}>B1</button>
            <button onClick={() => handleButtonClick('B2')}>B2</button>
            <button onClick={() => handleButtonClick('B3')}>B3</button>
            <button onClick={() => handleButtonClick('B4')}>B4</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignActions;
