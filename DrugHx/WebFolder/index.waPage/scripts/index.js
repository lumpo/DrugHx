
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var sliderDose1 = {};	// @WakendoSlider
	var dataGrid1 = {};	// @dataGrid
	var button3 = {};	// @button
	var button4 = {};	// @button
	var menuItem3 = {};	// @menuItem
	var menuItem1 = {};	// @menuItem
	var menuItem2 = {};	// @menuItem
	var comboboxRxName = {};	// @combobox
// @endregion// @endlock

// eventHandlers// @lock

	sliderDose1.change = function sliderDose1_change (event)// @startlock
	{// @endlock
		var dd1= this.sliderDose1;
		//CODE HERE  if the value is >0 then show a tick mark or show the databox
		if (dd1 > 0)
		{
			$$('tick1').show();
		}
		else {
			$$('tick1').hide();
			//toggle_visibility('tick1');
		};
		return dd1;
	};// @lock

	dataGrid1.onRowDblClick = function dataGrid1_onRowDblClick (event)// @startlock
	{// @endlock
		$$("tabViewDrugHx").selectTab(2);
	};// @lock

//ONLY USEFUL IN v10
	button3.click = function button3_click (event)// @startlock
	{// @endlock
$$("tick2").show();

	};// @lock

	button4.mouseup = function button4_mouseup (event)// @startlock
	{// @endlock
		$$("tabViewDrugHx").selectTab(1);
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

// CHANGE THE RANGE OF SLIDERS BASED ON THE DRUGNAME COMBOBOX

	comboboxRxName.change = function comboboxRxName_change (event)// @startlock
	{// @endlock
	var rx1a = $$('comboboxRxName').getValue();
alert('risperidone switch');
 	//document.getElementById("myVars").innerHTML = rx1a;
// 	 switch (rx1a) {
// 	 case "Haloperidol":
// 	 case "Risperidone":
// 	 case "Trifluoperazine":
// 	 case "Thiothixene":
// 	 case "Paliperidone":
//	
// 	    $$('sliderDose1').max('20');
// 	    $$('sliderDose1').smallStep('0.5');
// 	    $$('sliderDose1').largeStep('5');
// 	     break;
// 	case "Olanzapine":
// 	case "Asenapine":
// 	case "Aripiprazole":
// 	    $$('sliderDose1').max('40');
// 	    $$('sliderDose1').smallStep('2.5');
// 	    $$('sliderDose1').largeStep('5');
// 	     break;
// 	 case "Clozapine":
// 	 case "Quetiapine":
// 	 case "Chlorpromazine":
// 	case "Amisulpride":
// 		$$('sliderDose1').max('1200');
// 	    $$('sliderDose1').smallStep('25');
// 	    $$('sliderDose1').largeStep('200');
// 	   break;
//	     case "RLAI":
//	     case "PLAI":
//	     case "Fluphenazine decanoate":
//	     $$('sliderDose1').max('150');
//	     $$('sliderDose1').smallStep('12.5');
//	     $$('sliderDose1').largeStep('25');
// 	 	//$$('sliderDose1').tickPlacement('bottomRight');
//	break;
//	     case "Zuclopentixol decanoate":
//	     case "Haloperidol decanoate":
//	     
//	     $$('sliderDose1').max('600');
//	     $$('sliderDose1').smallStep('25');
//	     $$('sliderDose1').largeStep('250');
//	     break;
//	     
//	     case "Ziprasidone":
//	     case "Flupentixol decanoate":
//	    
//	     $$('sliderDose1').max('200');
//	     $$('sliderDose1').smallStep('10');
//	     $$('sliderDose1').largeStep('100');
//	     var d1 = $$('slider1Val1').getValue();
//	     $$('sliderDose1').value(d1);
//	     
//		$$('sliderDose2').max('200');
//	     $$('sliderDose2').smallStep('10');
//	     $$('sliderDose2').largeStep('100');
//	    var d2 = $$('slider1Val2').getValue();
//	     $$('sliderDose2').value(d2);
//	     break;
//	     
//	     case "OLAI":
//	     $$('sliderDose1').min('0');
//	     $$('sliderDose1').max('405');
//	     $$('sliderDose1').smallStep('10');
//	     $$('sliderDose1').largeStep('100');
//	     break;
//	     case "ALAI":
//	     $$('sliderDose1').max('400');
//	     $$('sliderDose1').smallStep('100');
//	     $$('sliderDose1').largeStep('100');
//	     break;
//	     default:
//	     alert('No matching antipsychotic found');
//	     break;
//	     }
	 
	};// @lock
 
 //FUNCTIONS
 //TOGGLE TICK

    function toggle_visibility(id) {
       var e = document.getElementByName(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }


// @region eventManager// @startlock
	WAF.addListener("sliderDose1", "change", sliderDose1.change, "WAF");
	WAF.addListener("dataGrid1", "onRowDblClick", dataGrid1.onRowDblClick, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("button4", "mouseup", button4.mouseup, "WAF");
	WAF.addListener("menuItem3", "click", menuItem3.click, "WAF");
	WAF.addListener("menuItem1", "click", menuItem1.click, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
	WAF.addListener("comboboxRxName", "change", comboboxRxName.change, "WAF");
// @endregion
};// @endlock
