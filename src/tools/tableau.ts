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
        for (let i=0; i<nL; i++) col.push(new Cell(this._wfo, i,c));
        return col ;
    }

    public getLine(ligne : number | string) : Cell[]{
        let line : Cell[] = [];
        let nC : number = this.getColumnCount();
        let l : number ;
        if (typeof ligne === "number") 
            if(ligne>=this.getRowCount()) throw "Le tableau fait moins que "+ligne+" ligne" ;
            else l = ligne
        else l= this.getNumLineFromName(ligne);
        for (let i=0; i<nC; i++) line.push(new Cell(this._wfo, l,i));
        return line ;
    }

    public getNumLineFromName(s : string, ncol : number = 0) : number {
        let col0 : Cell[] = this.getColumn(ncol);
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
        return new Cell(this._wfo, x, y);
    }
}

interface Header {
    [columnName : string] : number ;
}

export class Cell extends Component{
   protected _cell : FpCell;
   protected _ligne : number;
   protected _colonne : number;

    constructor (wfo : WinForObj, x : number, y : number){
        super(wfo);
        this._cell = this._wfo.Sheets.get_Item(0).Cells.get_Item(x,y);
        this._ligne = x;
        this._colonne = y;
    }

    public read() : string {
        return clean(this._cell.Text) ;
    }

    public isEnabled() : boolean {
        return !this._cell.Locked ;
    }

    public select() : void{
        this.reset();
        var track : string = "";
        for (var i : number = 0; i<this._ligne; i++){
            track +="[Down]";
        }
        for (var j : number = 0; j<this._colonne; j++){
            track += "[Right]";
        }
        this._wfo.Keys(track);
        this._wfo.Keys("[Enter]");
    }

    public write(s : string) : void {
        this._wfo.Keys(s);
        this._wfo.Keys("[Enter]");
    }

    protected reset() : void {
        this._wfo.Keys("[Hold]^[Home]");
    }

    public myClass() : componentType{
        return "Cell";
    }

}


