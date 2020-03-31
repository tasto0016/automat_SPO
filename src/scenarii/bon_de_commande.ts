import { Ecran } from "../tools/ecran";
import { Tableau, Cell } from "../tools/tableau";
import { Champ } from "../tools/champ";
import { Label } from "../tools/label";

export interface optionBonCommande {
    libelle : string, 
    date : string,
    prestataire : string,
    montant : string,
    posteBudgt : string;
    engager : boolean;
    tauxTVA? : string;
    numero? : string; //en haut à droite, au dessus du code

};

export const forThis : optionBonCommande = {
    libelle : "Bon de commande 03",
    date : "11/03/2020",
    prestataire : "DAVRIL PROMOTION",
    montant : "20000" ,
    posteBudgt : "PUP",
    engager : true,
    tauxTVA : "20",
    numero : "100001",
};


/*let ecran = Ecran.ecranCourant();
ecran.rechercheLabel("Ajouter bon de commande").click();*/


export function saisieBonDeCommande(obc : optionBonCommande ) : void {

    //wait
    let ecran : Ecran = Ecran.ecranCourant();

    ecran.rechercheChamp("Libellé").write(obc.libelle);
    ecran.rechercheChamp("Date (*)").write(obc.date);
    ecran.rechercheChamp("Montant HT du devis").write(obc.montant)
    ecran.rechercheChamp("Prestataire").write(obc.prestataire);


    let l : Label = ecran.rechercheLabel("Ajouter un poste budgétaire");
    l.click();
    var ecranPosteBudg : Ecran = Ecran.ecranCourant();
    var tabPosteBudg : Tableau = ecranPosteBudg.rechercheTableau("");
    var cell : Cell = tabPosteBudg.getCell(obc.posteBudgt,"Poste");
    cell.select();
    if(obc.engager) ecran.rechercheLabel("Engager").click();
    else ecran.rechercheLabel("Appliquer").click();

    ecran.refresh();
    ecran.rechercheLabel("Fermer");

    


}

export function saisieBonDeCommandeSerie(tabObc : optionBonCommande[]): void {

    for (const obc of tabObc){
        let ecran = Ecran.ecranCourant();
        ecran.rechercheLabel("Ajouter bon de commande").click();
        saisieBonDeCommande(obc);
    }
}