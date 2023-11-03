import {useState} from 'react';

import {Config, MidiInputConfig} from '../types/config-types';
import {mockMidiInputConfig} from '../mockfiles/MockMidiDevice';

export type UseConfigHookValue = {
  config: Config;

  setConfig: (config: Config) => void;
  updateConfigForInputDevice: (inputConfig: MidiInputConfig) => void;
}

const initialConfig: Config = {
  midi: {
    inputs: [
      mockMidiInputConfig,
    ],
    outputs: [],
  }
}

export const useConfig = (): UseConfigHookValue => {
  const [config, setConfig] = useState<Config>(initialConfig);

  const updateConfigForInputDevice = (inputConfig: MidiInputConfig) => {
    const inputConfigs = config.midi.inputs;

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

  return {
    config,
    setConfig,
    updateConfigForInputDevice,
  };
};
