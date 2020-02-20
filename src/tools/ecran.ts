import {Component} from 'component'
import {Label} from 'label'
import {Bouton} from 'bouton'
import {Champ} from 'champ'
import {Combobox} from 'combobox'


export class Ecran extends Component {
    private _components: Component[] = [];

    constructor(wfo: WinForObj) {
        super(wfo);
        this.parkour(this._wfo);
    }

    public getComponents(): Component[] {
        return this._components;
    }

    public myClass(): string {
        return "Ecran";
    }

    private addComponent(wfo: WinForObj): void {

        /*
        const type = wfo.GetType().FullName;
        let constr = componentMappings[type];
        if (!constr) {
            constr = Component;
            Log.Message(wfo.GetType().FullName);
        }
        const component = new constr(wfo);
        this._components.push(component);
        */

        let wclass: string = wfo.WndClass;
        if (wclass.includes("STATIC")) this._components.push(new Label(wfo));
        else if (wclass.includes("EDIT")) this._components.push(new Champ(wfo));
        else if (wclass.includes("BUTTON")) this._components.push(new Bouton(wfo));
        else if (wclass.includes("COMBOBOX")) this._components.push(new Combobox(wfo));
        else this._components.push(new Component(wfo));
        
    }

    private parkour(wfo: WinForObj): void {
        if (Component.isVisible(wfo)) {
            let nChild: number = wfo.ChildCount;
            if (nChild == 0) this.addComponent(wfo);
            else for (let i = 0; i < nChild; i++) this.parkour(wfo.Child(i));
        }
    }

    private parkour2(wfo: WinForObj): void {
        if (Component.isVisible(wfo) && wfo.Enabled) {
            let nChild: number = wfo.ChildCount;
            const type = wfo.GetType().FullName;
            let constr = componentMappings[type];
            if (!constr) {
                if (nChild == 0 ) Log.Message("Objet non reconnu","Full name : "+ wfo.Name + " est de type : " + wfo.GetType().FullName);
                else for (let i = 0; i < nChild; i++) this.parkour(wfo.Child(i));
            } else { 
            const component = new constr(wfo);
            this._components.push(component); 
            }
            
        }

    }

    public brille(): void {
        this._components.forEach(cpmnt => {
            cpmnt.brille();
        });
    }

    private rechercheFromLabel(nameClass: string, label: string): Component {
        let y: number;
        let foundL: boolean = false;
        for (const component of this._components) {
            if (Label.isLabel(component) && component.is(label)) {
                y = component.positionY();
                foundL = true;
            }
        }
        if (!foundL) throw "Pas trouvé de label : " + label;
        let found: boolean = false;
        var aRetourner: Component;
        for (const cmpnt of this._components) {
            if (cmpnt.myClass() == nameClass)
                if (cmpnt.positionY() == y) {
                    found = true;
                    aRetourner = cmpnt;
                };
        };
        if (!found) throw "pas trouvé de champ associé au label : " + label + "\n" + y;

        return aRetourner;
    }

    public rechercheChamp(label: string): Component {
        return this.rechercheFromLabel("Champ", label);
    }

    public rechercheCombobox(label: string): Component {
        return this.rechercheFromLabel("Combobox", label);
    }

    public rechercheBouton(label: string): Bouton {
        let found: boolean = false;
        var aRetourner: Bouton;
        for (const cmpnt of this._components) {
            if (cmpnt.myClass() == "Bouton")
                if (cmpnt.lire() == label) {
                    found = true;
                    aRetourner = cmpnt;
                }
        };

        if (!found) throw ("Pas trouvé de bouton au label : " + label);

        return aRetourner;
    }

    public getComponentsToString(): string {
        let s: string = "Ce que j'ai : " + this._components.length;
        this._components.forEach((element: Component) => {
            s += "\n" + element.myClass() + " -> " + element.lire();
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
};
