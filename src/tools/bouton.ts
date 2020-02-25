import {Component, componentType} from 'component'

export class Bouton extends Component {
    constructor(wfo: WinForObj) {
        super(wfo);
    }

    public copy(): Bouton {
        return new Bouton(this._wfo);
    }

    public brille(): void {
        super.brille(0x00FF00);
    }

    public myClass(): componentType {
        return "Bouton";
    }

}