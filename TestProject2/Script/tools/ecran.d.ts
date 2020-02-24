import { Component } from 'component';
import { Bouton } from 'bouton';
export declare class Ecran extends Component {
    private _components;
    constructor(wfo: WinForObj);
    getComponents(): Component[];
    myClass(): string;
    private parkour;
    refresh(): void;
    brille(): void;
    private rechercheFromLabel;
    rechercheChamp(label: string): Component;
    rechercheCombobox(label: string): Component;
    rechercheBouton(label: string): Bouton;
    getComponentsToString(): string;
}
export declare type ComponentConstructor<T extends Component> = new (cmpnt: WinForObj) => T;
export interface ComponentMapping {
    [type: string]: ComponentConstructor<Component>;
}
export declare const componentMappings: ComponentMapping;
