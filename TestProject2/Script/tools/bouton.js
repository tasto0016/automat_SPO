"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("component");
class Bouton extends component_1.Component {
    constructor(wfo) {
        super(wfo);
    }
    copy() {
        return new Bouton(this._wfo);
    }
    brille() {
        super.brille(0x00FF00);
    }
    myClass() {
        return "Bouton";
    }
}
exports.Bouton = Bouton;
//# sourceMappingURL=bouton.js.map