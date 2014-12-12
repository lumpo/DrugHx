
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var dataGrid4 = {};	// @dataGrid
	var menuItem3 = {};	// @menuItem
	var menuItem1 = {};	// @menuItem
	var menuItem2 = {};	// @menuItem
	var comboboxRxName = {};	// @combobox
// @endregion// @endlock

// eventHandlers// @lock

	dataGrid4.onRowDblClick = function dataGrid4_onRowDblClick (event)// @startlock
	{// @endlock
		$$("tabViewDrugHx").selectTab(2);
	};// @lock
	
//MENU SYSTEM- COARSE December 8, 2014
	menuItem3.click = function menuItem3_click (event)// @startlock
	{// @endlock
		document.location.href = "../charts.waPAge/index.html";
	};// @lock

	menuItem1.click = function menuItem1_click (event)// @startlock
	{// @endlock
		document.location.href = "../index.waPAge/index.html";
	};// @lock

	menuItem2.click = function menuItem2_click (event)// @startlock
	{// @endlock
		document.location.href = "../dataEntry.waPAge/index.html";// Add your code here
	};// @lock

// CHANGE THE VISIBILITY OF SLIDERS BASED ON THE DRUGNAME COMBOBOX

	comboboxRxName.change = function comboboxRxName_change (event)// @startlock
	{// @endlock
	var rx1a = $$('comboboxRxName').getValue();

 	document.getElementById("myVars").innerHTML = rx1a;
 	 
 	 switch (rx1a) {
 	 case "Haloperidol":
 	 case "Risperidone":
 	 case "Olanzapine":
 	     $$('sliderLAI_1').hide();
 	     $$('slider01000_1').hide();
 	     $$('slider030_1').show();
 	     $$('sliderLAI_2').hide();
 	     $$('slider01000_2').hide();
 	     $$('slider030_2').show();
 	     break;
 	 case "Clozapine":
 	 case "Quetiapine":
 	 case "Chlorpromazine":
 	  case "Amisulpride":
 	     $$('slider01000_1').show();
 	     $$('slider030_1').hide();
 	     $$('sliderLAI_1').hide();
 	     $$('slider01000_2').show();
 	     $$('slider030_2').hide();
 	     $$('sliderLAI_2').hide();
 	     break;
 	 case "RLAI":
 	 case "OLAI":
 	 case "PLAI":
 	  case "ALAI":
 	 case "Zuclopentixol decanoate":
 	 case "Flupentixol decanoate":
 	 case "Haloperidol decanoate":
 	 case "Fluphenazine decanoate":

 	     $$('slider01000_1').hide();
 	     $$('slider030_1').hide();
 	     $$('sliderLAI_1').show();
 	      $$('slider01000_2').hide();
 	     $$('slider030_2').hide();
 	     $$('sliderLAI_2').show();
 	     break;
 	 default:
 	     alert('No matching antipsychotic found');
 	     break;
 	 }
	};// @lock
 

// @region eventManager// @startlock
	WAF.addListener("dataGrid4", "onRowDblClick", dataGrid4.onRowDblClick, "WAF");
	WAF.addListener("menuItem3", "click", menuItem3.click, "WAF");
	WAF.addListener("menuItem1", "click", menuItem1.click, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
	WAF.addListener("comboboxRxName", "change", comboboxRxName.change, "WAF");
// @endregion
};// @endlock
