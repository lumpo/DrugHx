
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var slider1 = {};	// @slider
	var combobox1 = {};	// @combobox
// @endregion// @endlock

// eventHandlers// @lock

	slider1.slidechange = function slider1_slidechange (event)// @startlock
	{// @endlock
				if (sources.drugs.drugDose1 != 0)
		waf.widgets.val2.setValue(sources.drugs.drugDose1/2);
	};// @lock

	slider1.slide = function slider1_slide (event)// @startlock
	{// @endlock
		if (sources.drugs.drugDose1 != 0)
		waf.widgets.val2.setValue(sources.drugs.drugDose1/2);
	};// @lock
 
	combobox1.change = function combobox1_change (event)// @startlock
	{// @endlock
	
	};// @lock
 

// @region eventManager// @startlock
	WAF.addListener("slider1", "slidechange", slider1.slidechange, "WAF");
	WAF.addListener("slider1", "slide", slider1.slide, "WAF");
	WAF.addListener("combobox1", "change", combobox1.change, "WAF");
// @endregion
};// @endlock
