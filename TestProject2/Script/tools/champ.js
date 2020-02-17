"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("component");
class Champ extends component_1.Component {
    constructor(wfo) {
        super(wfo);
    }
    copy() {
        return new Champ(this._wfo);
    }
    brille() {
        super.brille(0xFF0000);
    }
    myClass() {
        return "Champ";
    }
    lire() {
        return this._wfo.wText;
    }
    ecrire(s) {
        this._wfo.Keys(s);
    }
    effacer() {
        this._wfo.SetText("");
    }
}
exports.Champ = Champ;
//# sourceMappingURL=champ.js.map