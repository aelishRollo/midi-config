import {Input as InputDevice} from 'webmidi';

import {useMidi} from '../hooks/useMidi';

import {MidiInput} from './MidiInput';
import {useConfig} from '../hooks/useConfig';

export const ConfigEditor = () => {
  const {config, updateConfigForInputDevice} = useConfig();
  const {activeInputs} = useMidi();

  const inputConfigs = config.midi.inputs;

  if (!activeInputs.length) {
    return (
      <div>
        No midi input devices connected
      </div>
    )
  }

  const midiInputs = activeInputs.map((inputDevice: InputDevice) => (
    <MidiInput
      key={inputDevice.name}
      midiInputConfig={inputConfigs.find(input => input.name === inputDevice.name) || null}
      midiInputDevice={inputDevice}
      updateInputConfig={updateConfigForInputDevice}
    />
  ));

  return (
    <div>
      {midiInputs}
    </div>
  )
}
