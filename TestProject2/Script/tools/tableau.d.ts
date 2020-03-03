import { Component, componentType } from "component";
export declare class Tableau extends Component {
    protected _header: Header;
    protected _sheet: Sheet;
    constructor(wfo: WinForObj);
    refresh(): void;
    brille(): void;
    protected setColumnHeader(): void;
    getCloumnCount(): number;
    getRowCount(): number;
    myClass(): componentType;
    getCell(ligne: string | number, colonne: string | number): Cell;
}
interface Header {
    [columnName: string]: number;
}
export declare class Cell extends Component {
    constructor(wfo: WinForObj);
}
export {};
