"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("component");
class Champ extends component_1.Component {
    constructor(wfo) {
        super(wfo);
        this._validationSaisie = exports.champsStyle[wfo.GetType().FullName];
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
    read() {
        return this._wfo.wText;
    }
    write(s) {
        this._wfo.Keys(s);
        this.valider();
    }
    valider() {
        this._wfo.Keys(this._validationSaisie);
    }
    effacer() {
        this._wfo.SetText("");
    }
}
exports.Champ = Champ;
exports.champsStyle = {
    'MGDIS.N01.Comp.MGText': "[Enter]",
    'MGDIS.N01.WinForms.MGTextBox': "[Enter]",
    'MGDIS.N01.WinForms.MGNumericBox': "[Enter]",
    'MGDIS.N01.WinForms.MGDateTime': "[Tab]"
};
//# sourceMappingURL=champ.js.map