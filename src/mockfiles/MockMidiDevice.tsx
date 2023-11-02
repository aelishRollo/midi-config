import {MidiTriggerConfig, MusicalKeyboardConfig, ControlButtonMap, ControlButtonName, MidiInputConfig} from '../types/config-types'
import { mockMidiEvent } from './MockMidiEvent'

const mockDeviceName:string = "Mock midi device official name"
const mockDeviceAlias:string = "Mock midi device alias name. Call me Jerry"

const mockMusicalKeyboard:MusicalKeyboardConfig = mockMidiEvent  //need to make sure that this is actually what I think it is
console.log(mockMusicalKeyboard)

const mockSustainPedal:MidiTriggerConfig = {
    channel:1,
    note:1
}

const mockMidiTriggerConfig:MidiTriggerConfig = {
    note:60,
    channel:2
}

const mockControlButtonMap: ControlButtonMap = {
    [ControlButtonName.A1]: {
        channel: 1,
        note: 60  // C4
    },
    [ControlButtonName.A2]: {
        channel: 1,
        note: 61  // C#4
    },
    [ControlButtonName.A3]: {
        channel: 1,
        note: 62  // D4
    },
    [ControlButtonName.A4]: {
        channel: 1,
        note: 63  // D#4
    },
    [ControlButtonName.B1]: {
        channel: 2,
        note: 64  // E4
    },
    [ControlButtonName.B2]: {
        channel: 2,
        note: 65  // F4
    },
    [ControlButtonName.B3]: {
        channel: 2,
        note: 66  // F#4
    },
    [ControlButtonName.B4]: {
        channel: 2,
        note: 67  // G4
    }
};


export let mockMidiInputConfig:MidiInputConfig = {
    name:mockDeviceName,
    alias:mockDeviceAlias,
    musicalKeyboard:mockMusicalKeyboard,
    sustainPedal:mockSustainPedal,
    mainTrigger:mockMidiTriggerConfig,
    controlButtons:mockControlButtonMap
}

//fill me in with the rest of the things from teh config type
