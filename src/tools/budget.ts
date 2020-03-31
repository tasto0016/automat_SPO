import { Tableau, Cell } from "./tableau";
import { clean } from "./component";

class TableauBudget extends Tableau{

    constructor(wfo : WinForObj){
        super(wfo);
    }
    
    protected setColumnHeader() : void{
        var n : number = this._sheet.ColumnHeader.Columns.Count ;
        if (clean(this._sheet.ColumnHeader.GetClip(0,0,1,1)).includes("Postes")) this._header["Postes"]=0;
        else throw "La 1er colonne =/= Postes";
        for (var i : number = 1; i < n; i++){
            let labelSection : string ;
            if (0) this._header[clean(this._sheet.ColumnHeader.GetClip(0,i,1,1))+"/"+clean(this._sheet.ColumnHeader.GetClip(1,i,1,1))]=i;
            this._header[clean(this._sheet.ColumnHeader.GetClip(0,i,1,1))]=i;
        }
    }
    

}