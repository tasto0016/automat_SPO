var file = require("ecran");


function Lanceur(){
  var wfo = Sys.Process("MGDIS.LanceurNET").WinFormsObject("FMPortail").WinFormsObject("tlp_principal").WinFormsObject("tlp_refresh").WinFormsObject("spc_dossier").WinFormsObject("SplitterPanel", "", 2);
  Sys.HighlightObject(wfo);
  var fen = file.Ecran.ecranCourant();
  
  
  Log.Message("fen.getComponentsToString()",fen.getComponentsToString());
  //fen.brille();
  
  //var chmp = fen.rechercheChamp("Libellé");
  //chmp.brille();
  
  //var chmpLiblOp = fen.rechercheCombobox("Nature des travaux");
  //chmpLiblOp.brille();
  
  //var btnAppliquer = fen.rechercheBouton("Appliquer");
  //btnAppliquer.brille();

  Log.Message("FIN");
   
}

function test() {
var x = Sys.Process("MGDIS.LanceurNET").WinFormsObject("FMPortail").WinFormsObject("tlp_principal").WinFormsObject("tlp_refresh").WinFormsObject("spc_dossier").WinFormsObject("SplitterPanel", "", 2).WinFormsObject("tlp_page").WinFormsObject("spc_page").WinFormsObject("SplitterPanel", "", 1).WinFormsObject("ModListeBudget").WinFormsObject("tlp").WinFormsObject("dgv") ;
Log.Message(x.Child(0).Name);
Log.Message(x.Child(0).GetType().Name);


}

function test2(){
  var cmb = Sys.Process("MGDIS.LanceurNET").WinFormsObject("FMPortail").WinFormsObject("tlp_principal").WinFormsObject("tlp_refresh").WinFormsObject("spc_dossier").WinFormsObject("SplitterPanel", "", 2).WinFormsObject("tlp_page").WinFormsObject("spc_page").WinFormsObject("SplitterPanel", "", 1).WinFormsObject("MGMODM04PROPRIETES").WinFormsObject("tlp_principal").WinFormsObject("cmb_typeOperation")
  cmb.ClickItem("Foncier");

}


