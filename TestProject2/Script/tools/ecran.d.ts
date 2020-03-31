import { Component, componentType } from 'component';
import { Label } from 'label';
import { Bouton } from 'bouton';
import { Champ } from 'champ';
import { Combobox } from 'combobox';
import { Tableau } from 'tableau';
export declare class Ecran extends Component {
    private _components;
    static ecranCourant(): Ecran;
    constructor(wfo: WinForObj);
    getComponents(): Component[];
    myClass(): componentType;
    private parkour;
    refresh(): void;
    brille(): void;
    private rechercheFromLabel;
    rechercheChamp(label: string): Champ;
    rechercheCombobox(label: string): Combobox;
    rechercheLabel(label: string): Label;
    rechercheBouton(label: string): Bouton;
    rechercheTableau(label: string): Tableau;
    getComponentsToString(): string;
}
export declare type ComponentConstructor<T extends Component> = new (cmpnt: WinForObj) => T;
export interface ComponentMapping {
    [type: string]: ComponentConstructor<Component>;
}
export declare const componentMappings: ComponentMapping;
