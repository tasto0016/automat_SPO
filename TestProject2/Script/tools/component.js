"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Component {
    constructor(cmpnt) {
        this._wfo = cmpnt;
    }
    getTcName() {
        return this._wfo.Name;
    }
    brille(color) {
        if (color == null)
            color = 0x0000FF;
        Sys.HighlightObject(this._wfo, 5, color);
    }
    copy() {
        return new Component(this._wfo);
    }
    static isVisible(wfo) {
        return (wfo.Visible);
    }
    lire() {
        return this._wfo.WndCaption;
    }
    size() {
        return this._wfo.Width * this._wfo.Height;
    }
    positionX() {
        return this._wfo.ScreenLeft;
    }
    positionY() {
        return this._wfo.ScreenTop;
    }
    myClass() {
        return "Component";
    }
}
exports.Component = Component;
//# sourceMappingURL=component.js.map