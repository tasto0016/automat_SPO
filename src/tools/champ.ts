import {Component, componentType} from 'component'

export class Champ extends Component {
    constructor(wfo: WinForObj) {
        super(wfo);
    }

    public copy(): Champ {
        return new Champ(this._wfo);
    }

    public brille(): void {
        super.brille(0xFF0000);
    }

    public myClass(): componentType {
        return "Champ";
    }

    public lire(): string {
        return this._wfo.wText;
    }

    public ecrire(s: string): void {
        this._wfo.Keys(s);
    }

    public effacer(): void {
        this._wfo.SetText("");
    }

}