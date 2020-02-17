"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("component");
class Tableau extends component_1.Component {
    constructor(wfo) {
        super(wfo);
        this._sheet = wfo.Sheets.getItem(0);
        this.setColumnHeader();
    }
    setColumnHeader() {
        var n = this._sheet.ColumnHeader.Columns.Count;
        for (var i = 0; i < n; i++) {
            this._headerTop[this._sheet.ColumnHeader.GetClip(0, i, 1, 1)] = i;
        }
    }
    toString() {
        let message = "";
        let n = this._sheet.ColumnHeader.Columns.Count;
        for (var i = 0; i < n; i++) {
        }
    }
}
exports.Tableau = Tableau;
//# sourceMappingURL=tableau.js.map