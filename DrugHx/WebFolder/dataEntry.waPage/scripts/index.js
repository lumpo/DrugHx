
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var combobox1 = {};	// @combobox
// @endregion// @endlock

// eventHandlers// @lock
 
	combobox1.change = function combobox1_change (event)// @startlock
	{// @endlock
		var rx=$$('combobox1').getValue();

		if (rx === "Haloperidol") {
			$$('slider01000').hide();
			$$('slider030').show();
			$$('slider01000_2').hide();
			$$('slider030_2').show();
			$$('slider01000_3').hide();
			$$('slider030_3').show();
 	}
		else {
			$$('slider01000').show();
			$$('slider030').hide();
			$$('slider01000_2').show();
			$$('slider030_2').hide();
			$$('slider01000_3').show();
			$$('slider030_3').hide();
 	}
	};// @lock
 

// @region eventManager// @startlock
	WAF.addListener("combobox1", "change", combobox1.change, "WAF");
// @endregion
};// @endlock
