export type MusicalKeyboardConfig = {
    channel: number;
}

export type MidiTriggerConfig = {
    channel: number;
    note: number;
}

export enum ControlButtonName {
    A1 = 'A1',
    A2 = 'A2',
    A3 = 'A3',
    A4 = 'A4',
    B1 = 'B1',
    B2 = 'B2',
    B3 = 'B3',
    B4 = 'B4',
}

export type ControlButtonMap = Partial<Record<ControlButtonName, MidiTriggerConfig>>;

export type MidiInputConfig = {
    name: string;
    alias?: string;
    musicalKeyboard?: MusicalKeyboardConfig;
    sustainPedal?: MidiTriggerConfig;
    mainTrigger?: MidiTriggerConfig;
    controlButtons?: ControlButtonMap;
}

export type MidiOutputConfig = {
    name: string;
    alias?: string;
    musicalKeyboard?: MusicalKeyboardConfig;
}

export type Config = {
    midi: {
        inputs: MidiInputConfig[];
        outputs: MidiOutputConfig[];
    };
}
