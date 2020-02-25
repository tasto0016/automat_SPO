import {Component, componentType} from 'component'


export class Combobox extends Component {
    constructor(wfo: WinForObj) {
        super(wfo);
    }
    public copy(): Combobox {
        return new Combobox(this._wfo);
    }

    public brille(): void {
        super.brille(0x00FFFF);
    }

    public myClass(): componentType {
        return "Combobox";
    }

    public select(valeur : string) : void {
        this._wfo.ClickItem(valeur);
    }

}

