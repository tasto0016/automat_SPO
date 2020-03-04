export declare class Component {
    readonly _wfo: WinForObj;
    getTcName(): string;
    constructor(cmpnt: WinForObj);
    brille(color?: number): void;
    copy(): Component;
    static isVisible(wfo: WinForObj): boolean;
    read(): string;
    isEnabled(): boolean;
    protected size(): number;
    positionX(): number;
    positionY(): number;
    myClass(): componentType;
}
export declare type componentType = "Component" | "Champ" | "Bouton" | "Combobox" | "Label" | "Tableau" | "Ecran" | "Cell";
export declare function clean(s: any): string;
