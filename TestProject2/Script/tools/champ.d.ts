import { Component, componentType } from 'component';
export declare class Champ extends Component {
    protected _validationSaisie: string;
    constructor(wfo: WinForObj);
    copy(): Champ;
    brille(): void;
    myClass(): componentType;
    read(): string;
    write(s: string): void;
    valider(): void;
    effacer(): void;
}
export interface ChampsMapping {
    [type: string]: string;
}
export declare const champsStyle: ChampsMapping;
