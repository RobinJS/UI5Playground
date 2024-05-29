sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";
	return Controller.extend("ui5.playground.controller.Storage", {
        onInit: function () {
			var productsModel = new JSONModel("data/products.json");
			this.getView().setModel(productsModel);
		}
	});
});