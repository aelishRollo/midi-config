import {useEffect, useState} from 'react';
import {Input as InputDevice, WebMidi} from 'webmidi';

export type UseMidiHookValue = {
    activeInputs: InputDevice[];
}

export const useMidi = (): UseMidiHookValue => {
    const [activeInputs, setActiveInputs] = useState<InputDevice[]>([]);

    useEffect(() => {
      WebMidi.enable({
        callback: () => {
          setActiveInputs(WebMidi.inputs);
        }
      });
    }, []);

    return {
        activeInputs,
    };
};
