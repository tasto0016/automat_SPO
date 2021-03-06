"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("component");
const label_1 = require("label");
const bouton_1 = require("bouton");
const champ_1 = require("champ");
const combobox_1 = require("combobox");
const tableau_1 = require("tableau");
class Ecran extends component_1.Component {
    constructor(wfo) {
        super(wfo);
        this._components = [];
        this.parkour(this._wfo);
    }
    static ecranCourant() {
        let tab = Sys.Process("MGDIS.LanceurNET").FindAllChildren("Visible", true);
        let wfo;
        for (const obj of tab) {
            if (obj.Enabled)
                wfo = obj;
        }
        wfo.setFocus();
        return new Ecran(wfo);
    }
    getComponents() {
        return this._components;
    }
    myClass() {
        return "Ecran";
    }
    parkour(wfo) {
        if (wfo.Name.includes('WinFormsObject')) {
            const type = wfo.GetType().FullName;
            let constr = exports.componentMappings[type];
            if (!constr) {
                let nChild = wfo.ChildCount;
                if (nChild == 0)
                    Log.Message("Objet non reconnu", "Full name : " + wfo.Name + " est de type : " + type);
                else if (component_1.Component.isVisible(wfo) && wfo.Enabled)
                    for (let i = 0; i < nChild; i++)
                        this.parkour(wfo.Child(i));
            }
            else {
                const component = new constr(wfo);
                this._components.push(component);
            }
        }
    }
    refresh() {
        this._components = [];
        this._wfo.Refresh();
        this.parkour(this._wfo);
    }
    brille() {
        this._components.forEach(cpmnt => {
            cpmnt.brille();
        });
    }
    rechercheFromLabel(nameClass, label) {
        let y;
        let x = 0;
        let x_label;
        let foundL;
        for (const component of this._components) {
            if (label_1.Label.isLabel(component) && component.is(label)) {
                y = component.positionY();
                foundL = component;
                x_label = component.positionX();
            }
        }
        if (!foundL)
            throw "Pas trouvé de label : " + label;
        let aRetourner;
        for (const cmpnt of this._components) {
            if (cmpnt.myClass() == nameClass)
                if (Math.abs(cmpnt.positionY() - y) < 5) {
                    let x_challenger = cmpnt.positionX();
                    if ((x_challenger > x_label) && (!x || (x_challenger < x))) {
                        x = cmpnt.positionX();
                        aRetourner = cmpnt;
                    }
                }
            ;
        }
        ;
        if (!aRetourner)
            throw "pas trouvé de champ associé au label : " + label + "\n" + y;
        aRetourner.getVisibleOnScreen();
        return aRetourner;
    }
    rechercheChamp(label) {
        return this.rechercheFromLabel("Champ", label);
    }
    rechercheCombobox(label) {
        return this.rechercheFromLabel("Combobox", label);
    }
    rechercheLabel(label) {
        for (const component of this._components) {
            if (label_1.Label.isLabel(component) && component.is(label)) {
                component.getVisibleOnScreen();
                return component;
            }
        }
    }
    rechercheBouton(label) {
        let found = false;
        var aRetourner;
        for (const cmpnt of this._components) {
            if (cmpnt.myClass() == "Bouton")
                if (cmpnt.read() == label) {
                    found = true;
                    aRetourner = cmpnt;
                }
        }
        if (!found)
            throw ("Pas trouvé de bouton au label : " + label);
        aRetourner.getVisibleOnScreen();
        return aRetourner;
    }
    rechercheTableau(label) {
        if (label == "") {
            for (const cmpnt of this._components) {
                if (cmpnt.myClass() == "Tableau")
                    return cmpnt;
            }
        }
        let y_label;
        let y = 0;
        let foundL;
        for (const component of this._components) {
            if (label_1.Label.isLabel(component) && component.is(label)) {
                y_label = component.positionY();
                foundL = component;
            }
        }
        if (!foundL)
            throw "Pas trouvé de label : " + label;
        let aRetourner;
        for (const cmpnt of this._components) {
            if (cmpnt.myClass() == "Tableau") {
                let y_challenger = cmpnt.positionY();
                if ((y_challenger > y_label) && (!y || (y_challenger < y))) {
                    y = y_challenger;
                    aRetourner = cmpnt;
                }
                ;
            }
            ;
        }
        if (!aRetourner)
            throw "pas trouvé de champ associé au label : " + label + "\n" + y;
        aRetourner.getVisibleOnScreen();
        return aRetourner;
    }
    getComponentsToString() {
        let s = "Ce que j'ai : " + this._components.length;
        this._components.forEach((element) => {
            s += "\n" + element.myClass() + " -> " + element.read();
        });
        return s;
    }
}
exports.Ecran = Ecran;
exports.componentMappings = {
    'MGDIS.N01.Comp.MGText': champ_1.Champ,
    'MGDIS.N01.WinForms.MGTextBox': champ_1.Champ,
    'MGDIS.N01.WinForms.MGNumericBox': champ_1.Champ,
    'MGDIS.N01.WinForms.MGLabel': label_1.Label,
    'MGDIS.N01.WinForms.MGLinkLabel': label_1.Label,
    'MGDIS.N01.WinForms.MGComboBox': combobox_1.Combobox,
    'System.Windows.Forms.Button': bouton_1.Bouton,
    'FarPoint.Win.Spread.FpSpread': tableau_1.Tableau,
    'MGDIS.N01.WinForms.MGDateTime': champ_1.Champ
};
//# sourceMappingURL=ecran.js.map