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

    public lire(): string {
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


}

export type componentType = "Component" | "Champ" | "Bouton" | "Combobox" | "Label" | "Tableau" | "Ecran";