sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";
	return Controller.extend("ui5.playground.controller.Recipes", {
        onInit: function () {
			var recipesModel = new JSONModel("data/recipes.json");
			this.getView().setModel(recipesModel);
		}
	});
});