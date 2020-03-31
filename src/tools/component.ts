import { Ecran } from "./ecran";

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
        //this._wfo.WaitWindow("*","*",1,30*1000);
    }

    public getVisibleOnScreen() : void {
        var p : WinForObj = this._wfo ;
        while (! p.VisibleOnScreen){
            p = p.Parent ;
        }
        let delta : number = -Math.sign(p.ScreenTop)*10;
        if(! this._wfo.VisibleOnScreen) p.HoverMouse(Math.floor( p.Width*0.95),Math.max(-p.ScreenTop,0)+ 1);
        while(! this._wfo.VisibleOnScreen){
            p.MouseWheel(delta);
        }
    }

}

export type componentType = "Component" | "Champ" | "Bouton" | "Combobox" | "Label" | "Tableau" | "Ecran" | "Cell";

export function clean(s : any) : string {
    let freshOne : string = "";
    let n : number = s.get_Length();
    for (let i=0; i<n; i++){
        let c : number = s.get_Chars(i);
        if ((c>31 && c<127) || (c>=224 && c<245)) freshOne += s.Substring_2(i,1) ; 
    }
    return freshOne ;
}