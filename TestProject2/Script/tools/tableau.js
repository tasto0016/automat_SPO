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
            this._header[component_1.clean(this._sheet.ColumnHeader.GetClip(0, i, 1, 1))] = i;
        }
    }
    getColumnCount() {
        return this._sheet.Columns.Count;
    }
    getRowCount() {
        return this._sheet.Rows.Count;
    }
    myClass() {
        return "Tableau";
    }
    getHeader() {
        return this._header;
    }
    getColumn(colonne) {
        let col = [];
        let nL = this.getRowCount();
        let c;
        if (typeof colonne === "number")
            if (colonne >= this.getColumnCount())
                throw "Le tableau fait moins que " + colonne + " colonne";
            else
                c = colonne;
        else
            c = this._header[colonne];
        for (let i = 0; i < nL; i++)
            col.push(new Cell(this._wfo, i, c));
        return col;
    }
    getLine(ligne) {
        let line = [];
        let nC = this.getColumnCount();
        let l;
        if (typeof ligne === "number")
            if (ligne >= this.getRowCount())
                throw "Le tableau fait moins que " + ligne + " ligne";
            else
                l = ligne;
        else
            l = this.getNumLineFromName(ligne);
        for (let i = 0; i < nC; i++)
            line.push(new Cell(this._wfo, l, i));
        return line;
    }
    getNumLineFromName(s, ncol = 0) {
        let col0 = this.getColumn(ncol);
        return col0.findIndex((value) => value.read().includes(s));
    }
    getCell(ligne, colonne) {
        let x;
        if (typeof ligne === "number")
            if (ligne >= this.getColumnCount())
                throw "Le tableau fait moins que " + ligne + " lignes";
            else
                x = ligne;
        else
            x = this.getNumLineFromName(ligne);
        let y;
        if (typeof colonne === "number")
            if (colonne >= this.getRowCount())
                throw "Le tableau fait moins que " + colonne + " colonne";
            else
                y = colonne;
        else
            y = this._header[colonne];
        return new Cell(this._wfo, x, y);
    }
}
exports.Tableau = Tableau;
class Cell extends component_1.Component {
    constructor(wfo, x, y) {
        super(wfo);
        this._cell = this._wfo.Sheets.get_Item(0).Cells.get_Item(x, y);
        this._ligne = x;
        this._colonne = y;
    }
    read() {
        return component_1.clean(this._cell.Text);
    }
    isEnabled() {
        return !this._cell.Locked;
    }
    select() {
        this.reset();
        var track = "";
        for (var i = 0; i < this._ligne; i++) {
            track += "[Down]";
        }
        for (var j = 0; j < this._colonne; j++) {
            track += "[Right]";
        }
        this._wfo.Keys(track);
        this._wfo.Keys("[Enter]");
    }
    write(s) {
        this._wfo.Keys(s);
        this._wfo.Keys("[Enter]");
    }
    reset() {
        this._wfo.Keys("[Hold]^[Home]");
    }
    myClass() {
        return "Cell";
    }
}
exports.Cell = Cell;
//# sourceMappingURL=tableau.js.map