import { Component, componentType } from "component";
export declare class Tableau extends Component {
    protected _header: Header;
    protected _sheet: Sheet;
    constructor(wfo: WinForObj);
    brille(): void;
    protected setColumnHeader(): void;
    toString(): void;
    myClass(): componentType;
}
interface Header {
    [columnName: string]: number;
}
export {};
