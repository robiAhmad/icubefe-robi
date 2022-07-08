define([
    'ko',
    'uiComponent'
], function (ko, UiComponent) {
    'use strict';
 
    return UiComponent.extend({
        defaults: {
            qty: 1,
        },
        
        initialize: function () {
            //initialize parent Component
            this._super();
            this.qty = ko.observable(this.defaultQty);
        },
 
        decrease: function() {
            let qty = this.qty() - 1;
            qty = qty < this.minQty ? this.minQty : qty
            this.qty(qty);
        },
 
        increase: function() {
            var qty = this.qty() + 1;
            qty = qty > this.maxQty ? this.maxQty : qty;
            this.qty(qty);
        } 
    });
});