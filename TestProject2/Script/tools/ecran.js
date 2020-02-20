"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("component");
const label_1 = require("label");
const bouton_1 = require("bouton");
const champ_1 = require("champ");
const combobox_1 = require("combobox");
class Ecran extends component_1.Component {
    constructor(wfo) {
        super(wfo);
        this._components = [];
        this.parkour(this._wfo);
    }
    getComponents() {
        return this._components;
    }
    myClass() {
        return "Ecran";
    }
    addComponent(wfo) {
        let wclass = wfo.WndClass;
        if (wclass.includes("STATIC"))
            this._components.push(new label_1.Label(wfo));
        else if (wclass.includes("EDIT"))
            this._components.push(new champ_1.Champ(wfo));
        else if (wclass.includes("BUTTON"))
            this._components.push(new bouton_1.Bouton(wfo));
        else if (wclass.includes("COMBOBOX"))
            this._components.push(new combobox_1.Combobox(wfo));
        else
            this._components.push(new component_1.Component(wfo));
    }
    parkour(wfo) {
        if (component_1.Component.isVisible(wfo)) {
            let nChild = wfo.ChildCount;
            if (nChild == 0)
                this.addComponent(wfo);
            else
                for (let i = 0; i < nChild; i++)
                    this.parkour(wfo.Child(i));
        }
    }
    parkour2(wfo) {
        if (component_1.Component.isVisible(wfo) && wfo.Enabled) {
            let nChild = wfo.ChildCount;
            const type = wfo.GetType().FullName;
            let constr = exports.componentMappings[type];
            if (!constr) {
                if (nChild == 0)
                    Log.Message("Objet non reconnu", "Full name : " + wfo.Name + " est de type : " + wfo.GetType().FullName);
                else
                    for (let i = 0; i < nChild; i++)
                        this.parkour(wfo.Child(i));
            }
            else {
                const component = new constr(wfo);
                this._components.push(component);
            }
        }
    }
    brille() {
        this._components.forEach(cpmnt => {
            cpmnt.brille();
        });
    }
    rechercheFromLabel(nameClass, label) {
        let y;
        let foundL = false;
        for (const component of this._components) {
            if (label_1.Label.isLabel(component) && component.is(label)) {
                y = component.positionY();
                foundL = true;
            }
        }
        if (!foundL)
            throw "Pas trouvé de label : " + label;
        let found = false;
        var aRetourner;
        for (const cmpnt of this._components) {
            if (cmpnt.myClass() == nameClass)
                if (cmpnt.positionY() == y) {
                    found = true;
                    aRetourner = cmpnt;
                }
            ;
        }
        ;
        if (!found)
            throw "pas trouvé de champ associé au label : " + label + "\n" + y;
        return aRetourner;
    }
    rechercheChamp(label) {
        return this.rechercheFromLabel("Champ", label);
    }
    rechercheCombobox(label) {
        return this.rechercheFromLabel("Combobox", label);
    }
    rechercheBouton(label) {
        let found = false;
        var aRetourner;
        for (const cmpnt of this._components) {
            if (cmpnt.myClass() == "Bouton")
                if (cmpnt.lire() == label) {
                    found = true;
                    aRetourner = cmpnt;
                }
        }
        ;
        if (!found)
            throw ("Pas trouvé de bouton au label : " + label);
        return aRetourner;
    }
    getComponentsToString() {
        let s = "Ce que j'ai : " + this._components.length;
        this._components.forEach((element) => {
            s += "\n" + element.myClass() + " -> " + element.lire();
        });
        return s;
    }
}
exports.Ecran = Ecran;
exports.componentMappings = {
    'MGDIS.N01.Comp.MGText': champ_1.Champ,
};
//# sourceMappingURL=ecran.js.map