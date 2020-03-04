"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ecran_1 = require("./ecran");
class LocatorByToolTip {
    constructor(tooltip) {
        this.tooltip = tooltip;
    }
    find(all) {
        return all.filter((value) => value._wfo.tooltip === this.tooltip);
    }
}
class LocatorByText {
    constructor(text) {
        this.text = text;
    }
    find(all) {
        return all.filter((c) => c._wfo.text === this.text);
    }
}
class LocatorByLibelle {
    constructor(libelle, direction = 'droite') {
        this.libelle = libelle;
        this.direction = direction;
    }
    find(all) {
        const locatorByText = new LocatorByText(this.libelle);
        const libelles = locatorByText.find(all);
        return libelles.map((libelle) => {
            return null;
        });
    }
}
function x(...elements) {
    const e1 = elements[0];
    const e2 = elements[1];
}
const z = 'a/b'.split('/');
x(...z);
x('Opération', 'Montant HT');
let e = ecran_1.Ecran.ecranCourant();
e.rechercheChamp('Adresse');
e.locateOne(new LocatorByLibelle('Adresse', 'gauche'));
class ExtEcran extends ecran_1.Ecran {
    locate(locator) {
        return locator.find(this.getComponents());
    }
    locateOne(locator) {
        const ctrls = this.locate(locator);
        switch (ctrls.length) {
            case 0: return null;
            case 1: return ctrls[0];
            default:
                throw new Error('Plusieurs controls');
        }
    }
}
class EcranBudget extends ecran_1.Ecran {
}
exports.EcranBudget = EcranBudget;
//# sourceMappingURL=locator.js.map