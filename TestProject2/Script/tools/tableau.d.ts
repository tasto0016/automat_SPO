import { Component, componentType } from "component";
export declare class Tableau extends Component {
    protected _header: Header;
    protected _sheet: Sheet;
    constructor(wfo: WinForObj);
    refresh(): void;
    brille(): void;
    protected setColumnHeader(): void;
    getColumnCount(): number;
    getRowCount(): number;
    myClass(): componentType;
    getHeader(): Header;
    getColumn(colonne: number | string): Cell[];
    getLine(ligne: number | string): Cell[];
    getNumLineFromName(s: string, ncol?: number): number;
    getCell(ligne: string | number, colonne: string | number): Cell;
}
interface Header {
    [columnName: string]: number;
}
export declare class Cell extends Component {
    protected _cell: FpCell;
    protected _ligne: number;
    protected _colonne: number;
    constructor(wfo: WinForObj, x: number, y: number);
    read(): string;
    isEnabled(): boolean;
    select(): void;
    write(s: string): void;
    protected reset(): void;
    myClass(): componentType;
}
export {};
