import {useEffect, useState} from 'react';
import {Input as InputDevice, WebMidi} from 'webmidi';

import {mockMidiInputConfig} from '../mockfiles/MockMidiDevice'
import {Config, MidiInputConfig} from '../types/config-types'

import {MidiInput} from './MidiInput';

const initialConfig: Config = {
  midi: {
    inputs: [
      mockMidiInputConfig,
    ],
    outputs: [],
  }
}

export const ConfigEditor = () => {
  const [config, setConfig] = useState<Config>(initialConfig);
  const [activeInputs, setActiveInputs] = useState<InputDevice[]>([]);

  useEffect(() => {
    WebMidi.enable({
      callback: () => {
        setActiveInputs(WebMidi.inputs);
      }
    });
  }, []);

  const inputConfigs = config.midi.inputs;

  const updateConfigForInputDevice = (inputConfig: MidiInputConfig) => {
    const index = inputConfigs.findIndex(input => input.name === inputConfig.name);
    let newConfigState: MidiInputConfig[];
    if (index === -1) {
      newConfigState = [...inputConfigs, inputConfig];
    } else {
      newConfigState = [...inputConfigs.slice(0, index), inputConfig, ...inputConfigs.slice(index + 1)];
    }

    setConfig({
      ...config,
      midi: {
        ...config.midi,
        inputs: newConfigState,
      },
    });
  };

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
