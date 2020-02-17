System.register("component", [], function (exports_1, context_1) {
    "use strict";
    var Component;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Component = class Component {
                constructor(cmpnt) {
                    this._wfo = cmpnt;
                }
                getTcName() {
                    return this._wfo.Name;
                }
                brille(color) {
                    if (color == null)
                        color = 0x0000FF;
                    Sys.HighlightObject(this._wfo, 5, color);
                }
                copy() {
                    return new Component(this._wfo);
                }
                static isVisible(wfo) {
                    return (wfo.Visible && wfo.VisibleOnScreen);
                }
                lire() {
                    return this._wfo.WndCaption;
                }
                size() {
                    return this._wfo.Width * this._wfo.Height;
                }
                positionX() {
                    return this._wfo.ScreenLeft;
                }
                positionY() {
                    return this._wfo.ScreenTop;
                }
                myClass() {
                    return "Component";
                }
            };
            exports_1("Component", Component);
        }
    };
});
System.register("bouton", ["component"], function (exports_2, context_2) {
    "use strict";
    var component_1, Bouton;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (component_1_1) {
                component_1 = component_1_1;
            }
        ],
        execute: function () {
            Bouton = class Bouton extends component_1.Component {
                constructor(wfo) {
                    super(wfo);
                }
                copy() {
                    return new Bouton(this._wfo);
                }
                brille() {
                    super.brille(0x00FF00);
                }
                myClass() {
                    return "Bouton";
                }
            };
            exports_2("Bouton", Bouton);
        }
    };
});
System.register("champ", ["component"], function (exports_3, context_3) {
    "use strict";
    var component_2, Champ;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (component_2_1) {
                component_2 = component_2_1;
            }
        ],
        execute: function () {
            Champ = class Champ extends component_2.Component {
                constructor(wfo) {
                    super(wfo);
                }
                copy() {
                    return new Champ(this._wfo);
                }
                brille() {
                    super.brille(0xFF0000);
                }
                myClass() {
                    return "Champ";
                }
                lire() {
                    return this._wfo.wText;
                }
                ecrire(s) {
                    this._wfo.Keys(s);
                }
                effacer() {
                    this._wfo.SetText("");
                }
            };
            exports_3("Champ", Champ);
        }
    };
});
System.register("combobox", ["component"], function (exports_4, context_4) {
    "use strict";
    var component_3, Combobox;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (component_3_1) {
                component_3 = component_3_1;
            }
        ],
        execute: function () {
            Combobox = class Combobox extends component_3.Component {
                constructor(wfo) {
                    super(wfo);
                }
                copy() {
                    return new Combobox(this._wfo);
                }
                brille() {
                    super.brille(0x00FFFF);
                }
                myClass() {
                    return "Combobox";
                }
                select(valeur) {
                    this._wfo.ClickItem(valeur);
                }
            };
            exports_4("Combobox", Combobox);
        }
    };
});
System.register("label", ["component"], function (exports_5, context_5) {
    "use strict";
    var component_4, Label;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (component_4_1) {
                component_4 = component_4_1;
            }
        ],
        execute: function () {
            Label = class Label extends component_4.Component {
                constructor(wfo) {
                    super(wfo);
                }
                static isLabel(component) {
                    return component instanceof Label;
                }
                brille() {
                    super.brille(0xA4A0A0);
                }
                myClass() {
                    return "Label";
                }
                is(s) {
                    return this.lire().includes(s);
                }
            };
            exports_5("Label", Label);
        }
    };
});
System.register("ecran", ["component", "label", "bouton", "champ", "combobox"], function (exports_6, context_6) {
    "use strict";
    var component_5, label_1, bouton_1, champ_1, combobox_1, Ecran, componentMappings;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (component_5_1) {
                component_5 = component_5_1;
            },
            function (label_1_1) {
                label_1 = label_1_1;
            },
            function (bouton_1_1) {
                bouton_1 = bouton_1_1;
            },
            function (champ_1_1) {
                champ_1 = champ_1_1;
            },
            function (combobox_1_1) {
                combobox_1 = combobox_1_1;
            }
        ],
        execute: function () {
            Ecran = class Ecran extends component_5.Component {
                constructor(wfo) {
                    super(wfo);
                    this._components = [];
                    this.parkour(wfo);
                }
                getComponents() {
                    return this._components;
                }
                myClass() {
                    return "Ecran";
                }
                addComponent(wfo) {
                    let wclass = wfo.WndClass;
                    if (wclass.includes("STATIC"))
                        this._components.push(new label_1.Label(wfo));
                    else if (wclass.includes("EDIT"))
                        this._components.push(new champ_1.Champ(wfo));
                    else if (wclass.includes("BUTTON"))
                        this._components.push(new bouton_1.Bouton(wfo));
                    else if (wclass.includes("COMBOBOX"))
                        this._components.push(new combobox_1.Combobox(wfo));
                    else
                        this._components.push(new component_5.Component(wfo));
                }
                parkour(wfo) {
                    if (component_5.Component.isVisible(wfo)) {
                        let nChild = wfo.ChildCount;
                        if (nChild == 0)
                            this.addComponent(wfo);
                        else
                            for (let i = 0; i < nChild; i++)
                                this.parkour(wfo.Child(i));
                    }
                }
                brille() {
                    this._components.forEach(cpmnt => {
                        cpmnt.brille();
                    });
                }
                rechercheFromLabel(nameClass, label) {
                    let y;
                    let foundL = false;
                    for (const component of this._components) {
                        if (label_1.Label.isLabel(component) && component.is(label)) {
                            y = component.positionY();
                            foundL = true;
                        }
                    }
                    if (!foundL)
                        throw "Pas trouvé de label : " + label;
                    let found = false;
                    var aRetourner;
                    for (const cmpnt of this._components) {
                        if (cmpnt.myClass() == nameClass)
                            if (cmpnt.positionY() == y) {
                                found = true;
                                aRetourner = cmpnt;
                            }
                        ;
                    }
                    ;
                    if (!found)
                        throw "pas trouvé de champ associé au label : " + label + "\n" + y;
                    return aRetourner;
                }
                rechercheChamp(label) {
                    return this.rechercheFromLabel("Champ", label);
                }
                rechercheCombobox(label) {
                    return this.rechercheFromLabel("Combobox", label);
                }
                rechercheBouton(label) {
                    let found = false;
                    var aRetourner;
                    for (const cmpnt of this._components) {
                        if (cmpnt.myClass() == "Bouton")
                            if (cmpnt.lire() == label) {
                                found = true;
                                aRetourner = cmpnt;
                            }
                    }
                    ;
                    if (!found)
                        throw ("Pas trouvé de bouton au label : " + label);
                    return aRetourner;
                }
                getComponentsToString() {
                    let s = "Ce que j'ai : " + this._components.length;
                    this._components.forEach((element) => {
                        s += "\n" + element.myClass() + " -> " + element.lire();
                    });
                    return s;
                }
            };
            exports_6("Ecran", Ecran);
            exports_6("componentMappings", componentMappings = {
                'MGDIS.N01.Comp.MGText': champ_1.Champ,
            });
        }
    };
});
System.register("tableau", ["component"], function (exports_7, context_7) {
    "use strict";
    var component_6, Tableau;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (component_6_1) {
                component_6 = component_6_1;
            }
        ],
        execute: function () {
            Tableau = class Tableau extends component_6.Component {
                constructor(wfo) {
                    super(wfo);
                }
            };
            exports_7("Tableau", Tableau);
        }
    };
});
//# sourceMappingURL=tools.js.map