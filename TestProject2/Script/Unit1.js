﻿var file = require("tools\\ecran");


function Lanceur(){
  var wfo = Sys.Process("MGDIS.LanceurNET").WinFormsObject("FMPortail").WinFormsObject("tlp_principal").WinFormsObject("tlp_refresh").WinFormsObject("spc_dossier").WinFormsObject("SplitterPanel", "", 2);
  Sys.HighlightObject(wfo);
  var fen = new file.Ecran(wfo);
  //fen.brille();
  
  Log.Message("fen.getComponentsToString()",fen.getComponentsToString());
  
  
  var chmp = fen.rechercheChamp("Nom commercial");
  chmp.brille();
  
 // var chmpLiblOp = fen.rechercheCombobox("Tranche travaux");
  //chmpLiblOp.brille();
  
  var btnAppliquer = fen.rechercheBouton("Appliquer");
  btnAppliquer.brille();

  Log.Message("FIN");
   
}

function test() {
Log.Message(Sys.Process("MGDIS.LanceurNET").WinFormsObject("FMPortail").WinFormsObject("tlp_principal").WinFormsObject("tlp_refresh").WinFormsObject("spc_dossier").WinFormsObject("SplitterPanel", "", 2).WinFormsObject("tlp_page").WinFormsObject("spc_page").WinFormsObject("SplitterPanel", "", 1).WinFormsObject("MGMODM04PROPRIETES").WinFormsObject("tlp_principal").WinFormsObject("clr_procedure").GetType().FullName);
//Log.Message(Sys.Process("MGDIS.LanceurNET").WinFormsObject("FMPortail").WinFormsObject("tlp_principal").WinFormsObject("tlp_refresh").WinFormsObject("spc_dossier").WinFormsObject("SplitterPanel", "", 2).WinFormsObject("tlp_page").WinFormsObject("spc_page").WinFormsObject("SplitterPanel", "", 1).WinFormsObject("MGMODM04PROPRIETES").WinFormsObject("tlp_principal").WinFormsObject("TextCP").GetType().FullName);
}

function test2(){
  var cmb = Sys.Process("MGDIS.LanceurNET").WinFormsObject("FMPortail").WinFormsObject("tlp_principal").WinFormsObject("tlp_refresh").WinFormsObject("spc_dossier").WinFormsObject("SplitterPanel", "", 2).WinFormsObject("tlp_page").WinFormsObject("spc_page").WinFormsObject("SplitterPanel", "", 1).WinFormsObject("MGMODM04PROPRIETES").WinFormsObject("tlp_principal").WinFormsObject("cmb_typeOperation")
  cmb.ClickItem("Foncier");

}

