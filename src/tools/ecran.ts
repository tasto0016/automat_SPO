import { Component, componentType } from 'component'
import { Label } from 'label'
import { Bouton } from 'bouton'
import { Champ } from 'champ'
import { Combobox } from 'combobox'
import { Tableau } from 'tableau'


export class Ecran extends Component {
    private _components: Component[] = [];


    public static ecranCourant(): Ecran {
        let tab: WinForObj[] = Sys.Process("MGDIS.LanceurNET").FindAllChildren("Visible", true);
        let wfo : WinForObj ;
        for (const obj of tab){
            if (obj.Enabled) wfo = obj ;
        }
        return new Ecran(wfo);
    }

    constructor(wfo: WinForObj) {
        super(wfo);
        this.parkour(this._wfo);
    }

    public getComponents(): Component[] {
        return this._components;
    }

    public myClass(): componentType {
        return "Ecran";
    }

    private parkour(wfo: WinForObj): void {
        if(wfo.Name.includes('WinFormsObject')){
            const type = wfo.GetType().FullName;
            let constr = componentMappings[type];
            if (!constr) {
                let nChild: number = wfo.ChildCount;
                if (nChild == 0) Log.Message("Objet non reconnu", "Full name : " + wfo.Name + " est de type : " + type);
                else if (Component.isVisible(wfo) && wfo.Enabled)
                    for (let i = 0; i < nChild; i++) this.parkour(wfo.Child(i));
            } else {
                const component = new constr(wfo);
                this._components.push(component);
            }
        }
    }

    public refresh(): void {
        this._components = [];
        this.parkour(this._wfo);
    }

    public brille(): void {
        this._components.forEach(cpmnt => {
            cpmnt.brille();
        });
    }

    private rechercheFromLabel(nameClass: componentType, label: string): Component {
        let y: number;
        let x: number = 0;
        let x_label : number;
        let foundL: Label;
        for (const component of this._components) {
            if (Label.isLabel(component) && component.is(label)) {
                y = component.positionY();
                foundL = component;
                x_label = component.positionX();
            }
        }
        if (!foundL) throw "Pas trouvé de label : " + label;
        let aRetourner: Component;
        for (const cmpnt of this._components) {
            if (cmpnt.myClass() == nameClass)
                if (Math.abs(cmpnt.positionY()-y) < 5) { // petite sensibilité de <5 pixel, pour corriger les alignements non parfait.
                    let x_challenger : number = cmpnt.positionX();
                    // vérifie que le component est bien à droite du label & qu'il est plus à gauche que le précédent (acceptation automatique si il n'y a pas de précédent)
                    if( (x_challenger>x_label) && (!x || (x_challenger<x)) ){ 
                        x = cmpnt.positionX();
                        aRetourner = cmpnt;
                    }
                };
        };
        if (!aRetourner) throw "pas trouvé de champ associé au label : " + label + "\n" + y;

        return aRetourner;
    }

    public rechercheChamp(label: string): Champ {
        return this.rechercheFromLabel("Champ", label) as Champ;
    }

    public rechercheCombobox(label: string): Combobox {
        return this.rechercheFromLabel("Combobox", label) as Combobox;
    }

    public rechercheBouton(label: string): Bouton {
        let found: boolean = false;
        var aRetourner: Bouton;
        for (const cmpnt of this._components) {
            if (cmpnt.myClass() == "Bouton")
                if (cmpnt.read() == label) {
                    found = true;
                    aRetourner = cmpnt;
                }
        }
        if (!found) throw ("Pas trouvé de bouton au label : " + label);

        return aRetourner;
    }

    public getComponentsToString(): string {
        let s: string = "Ce que j'ai : " + this._components.length;
        this._components.forEach((element: Component) => {
            s += "\n" + element.myClass() + " -> " + element.read();
        });
        return s;
    }
}

export type ComponentConstructor<T extends Component> = new (cmpnt: WinForObj) => T;

export interface ComponentMapping {
    [type: string]: ComponentConstructor<Component>;
}
export const componentMappings: ComponentMapping = {
    'MGDIS.N01.Comp.MGText': Champ,
    'MGDIS.N01.WinForms.MGTextBox': Champ,
    'MGDIS.N01.WinForms.MGNumericBox': Champ,
    'MGDIS.N01.WinForms.MGLabel': Label,
    'MGDIS.N01.WinForms.MGComboBox': Combobox,
    'System.Windows.Forms.Button': Bouton,
    'FarPoint.Win.Spread.FpSpread': Tableau,
    //'MGDIS.N01.WinForms.MGDataGridView' : Tableau,
};
