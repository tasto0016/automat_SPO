"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("component");
class Tableau extends component_1.Component {
    constructor(wfo) {
        super(wfo);
        this._sheet = wfo.Sheets.get_Item(0);
        this.setColumnHeader();
    }
    brille() {
        super.brille(0x000080);
    }
    setColumnHeader() {
        var n = this._sheet.ColumnHeader.Columns.Count;
        for (var i = 0; i < n; i++) {
            this._header[this._sheet.ColumnHeader.GetClip(0, i, 1, 1)] = i;
        }
    }
    toString() {
        let message = "";
        let n = this._sheet.ColumnHeader.Columns.Count;
        for (var i = 0; i < n; i++) {
        }
    }
    myClass() {
        return "Tableau";
    }
}
exports.Tableau = Tableau;
//# sourceMappingURL=tableau.js.map