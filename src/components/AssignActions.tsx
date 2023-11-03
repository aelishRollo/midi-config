import React, { useState } from 'react';

import {ControlButtonName} from '../types/config-types';

type AssignActionsProps = {
  selectedControlButton: ControlButtonName | null;

  onClick: (controlButton: ControlButtonName) => void;
};

const AssignActions = (props: AssignActionsProps) => {
  const [showGrid, setShowGrid] = useState(false);

  const handleButtonClick = (buttonId: ControlButtonName) => {
    props.onClick(buttonId);
  };

  if (!showGrid) {
    return (
      <div>
        <button onClick={() => setShowGrid(true)}>Assign Actions</button>
      </div>
    );
  }

  const createSection = (listOfButtons: ControlButtonName[]) => {
    return (
      <div>
        {listOfButtons.map((buttonId) => (
          <button onClick={() => handleButtonClick(buttonId)}>
            {buttonId}
          </button>
        ))}
      </div>
    )
  };

  const aSection = createSection([ControlButtonName.A1, ControlButtonName.A2, ControlButtonName.A3, ControlButtonName.A4]);
  const bSection = createSection([ControlButtonName.B1, ControlButtonName.B2, ControlButtonName.B3, ControlButtonName.B4]);

  return (
    <div>
      <div>
        {aSection}
        {bSection}
      </div>
    </div>
  );
};

export default AssignActions;
