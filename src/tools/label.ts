import {Component} from "component"

export class Label extends Component {
    constructor(wfo: WinForObj) {
        super(wfo);
    }
    
    public static isLabel(component: Component): component is Label {
        return component instanceof Label;
    }

    public brille(): void {
        super.brille(0xA4A0A0);
    }

    public myClass(): string {
        return "Label";
    }

    public is(s: string): boolean {
        return this.lire().includes(s);
    }

}