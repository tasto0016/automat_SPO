"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("component");
class Combobox extends component_1.Component {
    constructor(wfo) {
        super(wfo);
    }
    copy() {
        return new Combobox(this._wfo);
    }
    brille() {
        super.brille(0x00FFFF);
    }
    myClass() {
        return "Combobox";
    }
    select(valeur) {
        this._wfo.ClickItem(valeur);
    }
}
exports.Combobox = Combobox;
//# sourceMappingURL=combobox.js.map