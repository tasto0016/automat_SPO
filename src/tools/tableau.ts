import { Component } from "component";


export class Tableau extends Component {
    protected _headerTop : ColumnHeader ;
    protected _sheet : Sheet ;

    constructor (wfo : WinForObj){
        super(wfo) ;/*
        this._sheet = wfo.Sheets.getItem(0) ;
        this.setColumnHeader();*/
    }

    public brille() : void{
        super.brille(0x000080);
    }

    protected setColumnHeader() : void {
        var n : number = this._sheet.ColumnHeader.Columns.Count ;
        for (var i=0;i<n;i++){
            this._headerTop[this._sheet.ColumnHeader.GetClip(0,i,1,1)]=i;
        }
    }

    public toString() : void {
        let message : string = "";
        let n : number = this._sheet.ColumnHeader.Columns.Count ;

        for (var i=0; i<n; i++){
        } 
    }

    public myClass() : string{
        return "Tableau" ;
    }

}

interface ColumnHeader {
    [columnName : string] : number ;

    
}