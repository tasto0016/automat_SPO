import { Ecran } from "./ecran";
import { Component } from "./component";

interface Locator {
    find(all: Component[]): Component[];
}

class LocatorByToolTip implements Locator {
    public readonly tooltip: string;
    constructor(tooltip: string) {
        this.tooltip = tooltip;
    }
    public find(all: Component[]): Component[] {
        return all.filter((value) => (value._wfo as any).tooltip === this.tooltip);
    }
}
class LocatorByText implements Locator {
    public readonly text: string;
    constructor(text: string) {
        this.text = text;
    }
    public find(all: Component[]): Component[] {
        return all.filter((c)=>(c._wfo as any).text === this.text);
    }
}
class LocatorByLibelle implements Locator {
    public readonly libelle: string;
    public readonly direction: string;
    constructor(libelle: string, direction: 'droite' | 'gauche' = 'droite') {
        this.libelle = libelle;
        this.direction = direction;
    }
    public find(all: Component[]): Component[] {
        const locatorByText = new LocatorByText(this.libelle);
        const libelles = locatorByText.find(all);
        return libelles.map((libelle) => {
            // todo return component à droite? du libelle
            return null;
        })
    }
}

function x(...elements: string[]) {
    const e1 = elements[0]; //'Opération'
    const e2 = elements[1]; //'Montant HT'
}

const z = 'a/b'.split('/')
x(...z)
x('Opération', 'Montant HT')
let e = Ecran.ecranCourant() as ExtEcran;
e.rechercheChamp('Adresse')

e.locateOne(new LocatorByLibelle('Adresse', 'gauche'));

class ExtEcran extends Ecran {
    public locate(locator: Locator): Component[] {
        return locator.find(this.getComponents()); //this.getComponents().filter(c => locator.find(c));
    }
    public locateOne(locator: Locator): Component {
        const ctrls = this.locate(locator);
        switch (ctrls.length) {
            case 0: return null;
            case 1: return ctrls[0];
            default:
                throw new Error('Plusieurs controls');
        }
    }
}

export class EcranBudget extends Ecran {

}