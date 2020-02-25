import { Component, componentType } from "component";
export declare class Label extends Component {
    constructor(wfo: WinForObj);
    static isLabel(component: Component): component is Label;
    brille(): void;
    myClass(): componentType;
    is(s: string): boolean;
}
