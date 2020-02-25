export declare class Component {
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
    myClass(): componentType;
}
export declare type componentType = "Component" | "Champ" | "Bouton" | "Combobox" | "Label" | "Tableau" | "Ecran";
