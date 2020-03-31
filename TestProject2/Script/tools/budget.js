"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tableau_1 = require("./tableau");
const component_1 = require("./component");
class TableauBudget extends tableau_1.Tableau {
    constructor(wfo) {
        super(wfo);
    }
    setColumnHeader() {
        var n = this._sheet.ColumnHeader.Columns.Count;
        if (component_1.clean(this._sheet.ColumnHeader.GetClip(0, 0, 1, 1)).includes("Postes"))
            this._header["Postes"] = 0;
        else
            throw "La 1er colonne =/= Postes";
        for (var i = 1; i < n; i++) {
            let labelSection;
            if (0)
                this._header[component_1.clean(this._sheet.ColumnHeader.GetClip(0, i, 1, 1)) + "/" + component_1.clean(this._sheet.ColumnHeader.GetClip(1, i, 1, 1))] = i;
            this._header[component_1.clean(this._sheet.ColumnHeader.GetClip(0, i, 1, 1))] = i;
        }
    }
}
//# sourceMappingURL=budget.js.map