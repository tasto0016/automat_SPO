var file = require("ecran");


function Lanceur(){
  var wfo = Sys.Process("MGDIS.LanceurNET").WinFormsObject("FMPortail").WinFormsObject("tlp_principal").WinFormsObject("tlp_refresh").WinFormsObject("spc_dossier").WinFormsObject("SplitterPanel", "", 2);
  Sys.HighlightObject(wfo);
  var fen = file.Ecran.ecranCourant();
  
  
  Log.Message("fen.getComponentsToString()",fen.getComponentsToString());
  fen.brille();
  
  //var chmp = fen.rechercheChamp("Nom commercial");
  //chmp.brille();
  
 // var chmpLiblOp = fen.rechercheCombobox("Tranche travaux");
  //chmpLiblOp.brille();
  
  //var btnAppliquer = fen.rechercheBouton("Appliquer");
  //btnAppliquer.brille();

  Log.Message("FIN");
   
}

function test() {
var cs = Sys.Process("MGDIS.LanceurNET").FindAllChildren("Visible", true,1);
var c = cs.Find
var n = cs.length
Log.Message(n)
for (var i=0;i<n;i++) {
  Log.Message(i);
  if (cs[i].Enabled) Log.Message(cs[i].FullName);
}

}

function test2(){
  var cmb = Sys.Process("MGDIS.LanceurNET").WinFormsObject("FMPortail").WinFormsObject("tlp_principal").WinFormsObject("tlp_refresh").WinFormsObject("spc_dossier").WinFormsObject("SplitterPanel", "", 2).WinFormsObject("tlp_page").WinFormsObject("spc_page").WinFormsObject("SplitterPanel", "", 1).WinFormsObject("MGMODM04PROPRIETES").WinFormsObject("tlp_principal").WinFormsObject("cmb_typeOperation")
  cmb.ClickItem("Foncier");

}


