sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";
    
	return Controller.extend("ui5.playground.controller.Storage", {
        onInit: function () {
			this.productsModel = new JSONModel("data/products.json");
			this.getView().setModel(this.productsModel);

            this.getOwnerComponent().getModel("ProductsModel").setData(this.productsModel);
		},

        onAddItem: function(oEvent) {
            
        }

	});
});