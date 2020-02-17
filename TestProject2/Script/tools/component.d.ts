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
    myClass(): string;
}
