sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
], (Controller, MessageToast, JSONModel) => {
	"use strict";

	return Controller.extend("ui5.playground.controller.App", {
		onInit: function () {
			
		},

        getRandomRecipe: function(recipeList) {
            const randomIndex = Math.floor(Math.random() * recipeList.length);
            return recipeList[randomIndex];
        },

        getRecipeList: function() {
            var oModel = new JSONModel({});
            oModel.loadData("data/recipes.json", "", false);
            this.getView().setModel(oModel);

            return oModel.getData()["RecipeList"];
        },

        onOpenRandomDishToast: function () {
            var chosenDish = this.getRandomRecipe(this.getRecipeList());
            var msg = `Today we should eat...${chosenDish.name}`;
			MessageToast.show(msg);
        }

	});
});