import { Component, componentType } from 'component';
import { Bouton } from 'bouton';
import { Champ } from 'champ';
import { Combobox } from 'combobox';
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
    rechercheBouton(label: string): Bouton;
    getComponentsToString(): string;
}
export declare type ComponentConstructor<T extends Component> = new (cmpnt: WinForObj) => T;
export interface ComponentMapping {
    [type: string]: ComponentConstructor<Component>;
}
export declare const componentMappings: ComponentMapping;
