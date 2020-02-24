import { Component } from "component";
export declare class Tableau extends Component {
    protected _headerTop: ColumnHeader;
    protected _sheet: Sheet;
    constructor(wfo: WinForObj);
    brille(): void;
    protected setColumnHeader(): void;
    toString(): void;
    myClass(): string;
}
interface ColumnHeader {
    [columnName: string]: number;
}
export {};
