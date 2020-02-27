import { Component, componentType } from "component";


export class Tableau extends Component {
    protected _header : Header ;
    protected _sheet : Sheet ;

    constructor (wfo : WinForObj){
        super(wfo) ;/*
        this._sheet = wfo.Sheets.get_Item(0) ;
        this.setColumnHeader();*/
        
    }

    public brille(): void {
        super.brille(0x000080);
    }

    protected setColumnHeader() : void {
        var n : number = this._sheet.ColumnHeader.Columns.Count ;
        for (var i=0;i<n;i++){
            this._header[this._sheet.ColumnHeader.GetClip(0,i,1,1)]=i;
        }
    }

    public getNCloumn() : number {
       return this._wfo.Sheets.get_Item(0).Columns.Count;
    }

    public getNRow() : number {
        return this._wfo.Sheets.get_Item(0).Rows.Count;
    }

    public myClass() : componentType{
        return "Tableau" ;
    }
}

interface Header {
    [columnName : string] : number ;

}