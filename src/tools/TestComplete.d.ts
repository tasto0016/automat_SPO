
declare abstract class WinForObj {
    //Component call
    public Name: string;
    public ScreenLeft: number;
    public ScreenTop: number;
    public Visible: boolean;
    public VisibleOnScreen: boolean;
    public WndCaption: string;
    public Width: number;
    public Height: number;

    //Champ call
    public wText: string;
    public Keys(s: string): void;
    public SetText(s: string): void;

    //Bouton Call


    //Ecran call
    public WndClass: string;
    public ChildCount: number;
    public Child(n: number): WinForObj;
    public GetType(): any;
    public Enabled: boolean ;

    //Combobox
    public ClickItem(valeur: string) : void ;

    //Tableau
    public Sheets : any ;

    //Cell : FpCell
    public Text : string ;
    public Locked : boolean;
}

declare abstract class Sheet {
    public Rows : any;
    public Columns : any;
    public ColumnHeader : any
    public Cells : any; 
    

}



declare class Sys {
    public static HighlightObject(object: WinForObj, time: number, color: number): void;
    public static Process(s : string): any;
}

declare class Log{
    public static Message(s : string, m? : string) : void ;
}