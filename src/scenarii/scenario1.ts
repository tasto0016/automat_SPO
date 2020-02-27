import { Component } from "../tools/component";
import { Ecran } from "../tools/ecran";

function scenario1() : void {
    var e : Ecran = Ecran.ecranCourant();
    e.rechercheBouton("Appliquer");

} 