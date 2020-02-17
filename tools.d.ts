declare module "component" {
    export class Component {
        protected _wfo: WinForObj;
        getTcName(): string;
        constructor(cmpnt: WinForObj);
        brille(color?: number): void;
        copy(): Component;
        static isVisible(wfo: WinForObj): boolean;
        lire(): string;
        protected size(): number;
        positionX(): number;
        positionY(): number;
        myClass(): string;
    }
}
declare module "bouton" {
    import { Component } from "component";
    export class Bouton extends Component {
        constructor(wfo: WinForObj);
        copy(): Bouton;
        brille(): void;
        myClass(): string;
    }
}
declare module "champ" {
    import { Component } from "component";
    export class Champ extends Component {
        constructor(wfo: WinForObj);
        copy(): Champ;
        brille(): void;
        myClass(): string;
        lire(): string;
        ecrire(s: string): void;
        effacer(): void;
    }
}
declare module "combobox" {
    import { Component } from "component";
    export class Combobox extends Component {
        constructor(wfo: WinForObj);
        copy(): Combobox;
        brille(): void;
        myClass(): string;
        select(valeur: string): void;
    }
}
declare module "label" {
    import { Component } from "component";
    export class Label extends Component {
        constructor(wfo: WinForObj);
        static isLabel(component: Component): component is Label;
        brille(): void;
        myClass(): string;
        is(s: string): boolean;
    }
}
declare module "ecran" {
    import { Component } from "component";
    import { Bouton } from "bouton";
    export class Ecran extends Component {
        private _components;
        constructor(wfo: WinForObj);
        getComponents(): Component[];
        myClass(): string;
        private addComponent;
        private parkour;
        brille(): void;
        private rechercheFromLabel;
        rechercheChamp(label: string): Component;
        rechercheCombobox(label: string): Component;
        rechercheBouton(label: string): Bouton;
        getComponentsToString(): string;
    }
    export type ComponentConstructor<T extends Component> = new (cmpnt: WinForObj) => T;
    export interface ComponentMapping {
        [type: string]: ComponentConstructor<Component>;
    }
    export const componentMappings: ComponentMapping;
}
declare module "tableau" {
    import { Component } from "component";
    export class Tableau extends Component {
        protected _headerTop: HeaderColumn;
        constructor(wfo: WinForObj);
    }
    interface HeaderColumn {
        [columnName: string]: number;
    }
}
