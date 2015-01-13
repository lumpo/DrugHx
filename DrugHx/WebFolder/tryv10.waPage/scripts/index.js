
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
	var arr='';
		ds.Drugs.toArray("drugName1, drugDose1", {
        	onSuccess: function(ev) 
        {
        var arr = ev.result;
            var myHTML = '';
            arr.forEach(function(elem) { 
                myHTML += '<p>' + elem.drugName1 + ' ' + elem.drugDose1 + '</p>';
                });
            $('#container2').html(myHTML);                
        }      
    });		 
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
// @endregion
};// @endlock
