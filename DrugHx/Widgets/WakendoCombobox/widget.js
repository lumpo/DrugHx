WAF.define('WakendoCombobox', ['waf-core/widget', 'wakendoCore', 'kendoHelpers'], function(widget, $, kendoHelpers) {
	'use strict';

    var WakendoCombobox = widget.create('WakendoCombobox', {

    	value: widget.property({
    		type: 'string'
    	}),
    	
        items: widget.property({
            type: 'datasource',
            attributes: [ { name: 'id'}, { name: 'text'}]
        }),
        
        suggest: widget.property({
        	type: 'boolean',
        	defaultValue: true
        }),
        
        filterType: widget.property({
        	type: 'enum',
    		values: ['startswith', 'endswith', 'contains'],
    		defaultValue: 'startswith'        	
        }),
        
        maxResults: widget.property({
        	type: 'integer',
        	defaultValue: 0,
        	bindable: false
        }),

        init: function() {
        	var self = this;

        	self.valueChangeSubscriber = self.value.onChange(function(newValue) {
        		self.kendoWidget.value(newValue);
        	});
        	
        	self.suggest.onChange(self.render);
        	self.filterType.onChange(self.render);
        	
        	self.render();
        },
        
        render: function() {
        	var self = this;	
        	$(self.node).empty();
		var $el = $('<input />').appendTo(self.node);

		var datasource = kendoHelpers.kendoDatasourceFromWakanda(this.items, self.maxResults());
			
        	$el.kendoComboBox({
        		dataSource: datasource,
				dataTextField: 'text',
				dataValueField: 'id',
				autoBind: false,
				filter: self.filterType(),
				suggest: self.suggest(),
        		change: function(event) {
        			self.valueChangeSubscriber.pause();
        			self.value(self.kendoWidget.value());
        			self.valueChangeSubscriber.resume();
        		}
        	});

        	self.kendoWidget = $el.data("kendoComboBox");
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

    return WakendoCombobox;

});
