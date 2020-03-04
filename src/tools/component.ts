export class Component {
    public readonly _wfo: WinForObj;

    public getTcName(): string {
        return this._wfo.Name;
    }

    constructor(cmpnt: WinForObj) {
        this._wfo = cmpnt;
    }

    public brille(color?: number): void {
        if (color == null) color = 0x0000FF;
        Sys.HighlightObject(this._wfo, 5, color);
    }

    public copy(): Component {
        return new Component(this._wfo);
    }

    public static isVisible(wfo: WinForObj): boolean {
        return (wfo.Visible);
    }

    public read(): string {
        return this._wfo.WndCaption;
    }

    public isEnabled(): boolean {
        return this._wfo.Enabled ;
    }
    
    protected size(): number {
        return this._wfo.Width * this._wfo.Height;
    }

    public positionX(): number {
        return this._wfo.ScreenLeft;
    }

    public positionY(): number {
        return this._wfo.ScreenTop;
    }

    public myClass(): componentType {
        return "Component";
    }

    public click(): void {
        this._wfo.Click();
    }


}

export type componentType = "Component" | "Champ" | "Bouton" | "Combobox" | "Label" | "Tableau" | "Ecran" | "Cell";

export function clean(s : any) : string {
    let freshOne : string = "";
    let n : number = s.get_Length();
    for (let i=0; i<n; i++)
        if (s.get_Chars(i)>31 && s.get_Chars(i)<127) freshOne += s.Substring_2(i,1) ; 

    return freshOne ;
}