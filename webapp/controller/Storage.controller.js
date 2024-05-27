sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController",
    "sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
	"use strict";
	return BaseController.extend("sap.ui.demo.nav.controller.Storage", {
        onInit: function () {
			var productsModel = new JSONModel(sap.ui.require.toUrl("data/products.json"));
			this.getView().setModel(oModel); 
		}
	});
});