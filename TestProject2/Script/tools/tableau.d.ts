import { Component } from "component";
export declare class Tableau extends Component {
    protected _headerTop: ColumnHeader;
    protected _sheet: Sheet;
    constructor(wfo: WinForObj);
    protected setColumnHeader(): void;
    toString(): void;
}
interface ColumnHeader {
    [columnName: string]: number;
}
export {};
