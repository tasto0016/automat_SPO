import {Component, componentType} from 'component'

export class Champ extends Component {
    protected _validationSaisie : string ;

    constructor(wfo: WinForObj) {
        super(wfo);
        this._validationSaisie = champsStyle[wfo.GetType().FullName];
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

    public read(): string {
        return this._wfo.wText;
    }

    public write(s: string): void {
        this._wfo.Keys(s);
        this.valider();
    }

    public valider() : void {
        this._wfo.Keys(this._validationSaisie);
    }

    public effacer(): void {
        this._wfo.SetText("");
    }

}


export interface ChampsMapping {
    [type: string]: string;
}
export const champsStyle: ChampsMapping = {
    'MGDIS.N01.Comp.MGText':"[Enter]",
    'MGDIS.N01.WinForms.MGTextBox': "[Enter]",
    'MGDIS.N01.WinForms.MGNumericBox': "[Enter]",
    'MGDIS.N01.WinForms.MGDateTime' : "[Tab]"
};