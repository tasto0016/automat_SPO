import { Component, componentType } from 'component';
export declare class Champ extends Component {
    constructor(wfo: WinForObj);
    copy(): Champ;
    brille(): void;
    myClass(): componentType;
    lire(): string;
    ecrire(s: string): void;
    effacer(): void;
}
