import { Component, componentType } from "component";


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
            this._header[this._sheet.ColumnHeader.GetClip(0,i,1,1)]=i;
        }
    }

    public getCloumnCount() : number {
       return this._sheet.Columns.Count;
    }

    public getRowCount() : number {
        return this._sheet.Rows.Count;
    }

    public myClass() : componentType{
        return "Tableau" ;
    }

    public getCell(ligne : string | number, colonne : string | number) : Cell{
        let x : number ;
        if (typeof ligne === "number") x=ligne ;
        else x=0;
        let y : number ;
        if (typeof colonne === "number") y = colonne
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
}