import { Component, componentType, clean } from "component";


export class Tableau extends Component {
    protected _header : Header = {} ;
    protected _sheet : Sheet ;

    constructor (wfo : WinForObj){
        super(wfo) ;
        this._sheet = wfo.Sheets.get_Item(0) ;
        this.setColumnHeader();
    }

    public refresh(): void {
        this._sheet = this._wfo.Sheets.get_Item(0) ;
        this._header = {} ;
        this.setColumnHeader();
    }

    public brille(): void {
        super.brille(0x000080);
    }

    protected setColumnHeader() : void {
        var n : number = this._sheet.ColumnHeader.Columns.Count ;
        for (var i : number = 0; i < n; i++){
            this._header[clean(this._sheet.ColumnHeader.GetClip(0,i,1,1))]=i;
        }
    }

    public getColumnCount() : number {
       return this._sheet.Columns.Count;
    }

    public getRowCount() : number {
        return this._sheet.Rows.Count;
    }

    public myClass() : componentType{
        return "Tableau" ;
    }

    public getHeader() : Header {
        return this._header ;
    }

    public getColumn(colonne : number | string) : Cell[]{
        let col : Cell[] = [];
        let nL : number = this.getRowCount();
        let c : number ;
        if (typeof colonne === "number") 
            if(colonne>=this.getColumnCount()) throw "Le tableau fait moins que "+colonne+" colonne" ;
            else c = colonne
        else c= this._header[colonne];
        for (let i=0; i<nL; i++) col.push(new Cell(this._sheet.Cells.get_Item(i,c)));
        return col ;
    }

    public getLine(ligne : number | string) : Cell[]{
        let line : Cell[] = [];
        let nL : number = this.getColumnCount();
        let l : number ;
        if (typeof ligne === "number") 
            if(ligne>=this.getRowCount()) throw "Le tableau fait moins que "+ligne+" ligne" ;
            else l = ligne
        else l= this.getNumLineFromName(ligne);
        for (let i=0; i<nL; i++) line.push(new Cell(this._sheet.Cells.get_Item(l,i)));
        return line ;
    }

    public getNumLineFromName(s : string) : number {
        let col0 : Cell[] = this.getColumn(0);
        return col0.findIndex((value: Cell) => value.read().includes(s));
    }

    public getCell(ligne : string | number, colonne : string | number) : Cell{
        let x : number ;
        if (typeof ligne === "number") 
            if(ligne>=this.getColumnCount()) throw "Le tableau fait moins que "+ligne+" lignes" ;
            else x=ligne ;
        else x=this.getNumLineFromName(ligne);
        let y : number ;
        if (typeof colonne === "number") 
            if(colonne>=this.getRowCount()) throw "Le tableau fait moins que "+colonne+" colonne" ;
            else y = colonne
        else y = this._header[colonne];
        return new Cell(this._sheet.Cells.Get_Item_2(x,y));
    }
}

interface Header {
    [columnName : string] : number ;
}

export class Cell extends Component{

    constructor (wfo : WinForObj){
        super(wfo);
    }

    public read() : string {
        return clean(this._wfo.Text) ;
    }

    public isEnabled() : boolean {
        return !this._wfo.Locked ;
    }

    public myClass() : componentType{
        return "Cell";
    }

}


