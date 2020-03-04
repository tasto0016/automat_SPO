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
    read() {
        return this._wfo.WndCaption;
    }
    isEnabled() {
        return this._wfo.Enabled;
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
    click() {
        this._wfo.Click();
    }
}
exports.Component = Component;
function clean(s) {
    let freshOne = "";
    let n = s.get_Length();
    for (let i = 0; i < n; i++)
        if (s.get_Chars(i) > 31 && s.get_Chars(i) < 127)
            freshOne += s.Substring_2(i, 1);
    return freshOne;
}
exports.clean = clean;
//# sourceMappingURL=component.js.map