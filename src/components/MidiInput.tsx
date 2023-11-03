import {useState} from 'react';

import {Input as InputDevice} from 'webmidi'

import {ControlButtonName, MidiInputConfig} from '../types/config-types';
import AssignActions from './AssignActions';

enum ConfigButton {
  MUSICAL_KEYBOARD = 'musicalKeyboard',
  MAIN_TRIGGER = 'mainTrigger',
  CONTROL_BUTTONS = 'controlButtons'
}

type MidiInputProps = {
  midiInputConfig: MidiInputConfig | null;
  midiInputDevice: InputDevice;

  updateInputConfig: (inputConfig: MidiInputConfig) => void;
}

type MidiInputState = {
  selectedButton: ConfigButton | null;
  selectedControlButton: ControlButtonName | null;
}

export const MidiInput = (props: MidiInputProps) => {
  const [state, setState] = useState<MidiInputState>({
    selectedButton: null,
    selectedControlButton: null,
  });

  const handleClick = (button: ConfigButton) => {
    setState({
      selectedButton: button,
      selectedControlButton: null,
    });
  };

  const handleClickControlMapButton = (controlButton: ControlButtonName) => {
    setState({
      selectedButton: ConfigButton.CONTROL_BUTTONS,
      selectedControlButton: controlButton,
    });
  };

  if (!props.midiInputConfig) {
    return (
      <div className='midi-input-container'>
        <h2>{props.midiInputDevice.name}</h2>
        <button onClick={() => {
          props.updateInputConfig({
            name: props.midiInputDevice.name,
          })
        }}>
          Configure
        </button>
      </div>
    );
  }

  return (
    <div className='midi-input-container'>
      <h2>{props.midiInputDevice.name}</h2>
      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
      <div>
        <button onClick={() => handleClick(ConfigButton.MUSICAL_KEYBOARD)}>
          Musical Keyboard
        </button>
        <pre>
          {JSON.stringify(props.midiInputConfig.musicalKeyboard)}
        </pre>
      </div>

      <div>
        <button onClick={() => handleClick(ConfigButton.MAIN_TRIGGER)}>
          Main Trigger
        </button>
        <pre>
          {JSON.stringify(props.midiInputConfig.mainTrigger)}
        </pre>
      </div>

      <AssignActions
        selectedControlButton={state.selectedControlButton}
        onClick={handleClickControlMapButton}
      />
    </div>
  );
}
