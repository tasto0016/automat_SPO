"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("component");
class Tableau extends component_1.Component {
    constructor(wfo) {
        super(wfo);
        this._header = {};
        this._sheet = wfo.Sheets.get_Item(0);
        this.setColumnHeader();
    }
    refresh() {
        this._sheet = this._wfo.Sheets.get_Item(0);
        this._header = {};
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
    getCloumnCount() {
        return this._sheet.Columns.Count;
    }
    getRowCount() {
        return this._sheet.Rows.Count;
    }
    myClass() {
        return "Tableau";
    }
    getCell(ligne, colonne) {
        let x;
        if (typeof ligne === "number")
            x = ligne;
        else
            x = 0;
        let y;
        if (typeof colonne === "number")
            y = colonne;
        else
            y = this._header[colonne];
        return new Cell(this._sheet.Cells.Get_Item_2(x, y));
    }
}
exports.Tableau = Tableau;
class Cell extends component_1.Component {
    constructor(wfo) {
        super(wfo);
    }
}
exports.Cell = Cell;
//# sourceMappingURL=tableau.js.map