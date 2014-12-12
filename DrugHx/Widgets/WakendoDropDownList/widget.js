WAF.define('WakendoDropDownList', ['waf-core/widget', 'wakendoCore', 'kendoHelpers'], function(widget, $, kendoHelpers) {
	'use strict';


    var WakendoDropDownList = widget.create('WakendoDropDownList', {

    	value: widget.property({
    		type: 'string'
    	}),
    	
        items: widget.property({
            type: 'datasource',
            attributes: [ { name: 'id'}, { name: 'text'}]
        }),

        init: function() {
        	var self = this;

        	self.valueChangeSubscriber = self.value.onChange(function(newValue) {
        		self.kendoWidget.value(newValue);
        	});
        	
        	self.render();
        },
        
        render: function() {
        	var self = this;	
        	$(self.node).empty();
			var $el = $('<input />').appendTo(self.node);
			
			
			var datasource = kendoHelpers.kendoDatasourceFromWakanda(this.items);
			
        	$el.kendoDropDownList({
        		dataSource: datasource,
				dataTextField: 'text',
				dataValueField: 'id',
				autoBind: false,				        		
        		change: function(event) {
        			self.valueChangeSubscriber.pause();
        			self.value(self.kendoWidget.value());
        			self.valueChangeSubscriber.resume();
        		}
        	});
        	
        	self.kendoWidget = $el.data("kendoDropDownList");
        },

        enable: function() {
        	this.kendoWidget.enable();
        },

        disable: function() {
        	this.kendoWidget.enable(false);
        },
        
        open: function() {
        	this.kendoWidget.open();
        },

        close: function() {
        	this.kendoWidget.close();
        }
        
    });

    return WakendoDropDownList;

});
