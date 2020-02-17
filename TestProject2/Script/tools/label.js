"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("component");
class Label extends component_1.Component {
    constructor(wfo) {
        super(wfo);
    }
    static isLabel(component) {
        return component instanceof Label;
    }
    brille() {
        super.brille(0xA4A0A0);
    }
    myClass() {
        return "Label";
    }
    is(s) {
        return this.lire().includes(s);
    }
}
exports.Label = Label;
//# sourceMappingURL=label.js.map