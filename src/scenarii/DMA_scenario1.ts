import { Component } from "../tools/component";
import { Ecran } from "../tools/ecran";
import {Bouton} from "../tools/bouton";
function scenario1() : void {
    var e : Ecran  = Ecran.ecranCourant();
    var b : Bouton = e.rechercheBouton("Appliquer");
    b.brille();
} 