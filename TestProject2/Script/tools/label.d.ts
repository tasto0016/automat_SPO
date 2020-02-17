import { Component } from "component";
export declare class Label extends Component {
    constructor(wfo: WinForObj);
    static isLabel(component: Component): component is Label;
    brille(): void;
    myClass(): string;
    is(s: string): boolean;
}
