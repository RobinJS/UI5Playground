sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "sap/ui/core/syncStyleClass"
], function (Controller, JSONModel, Fragment, syncStyleClass) {
	"use strict";
    
	return Controller.extend("ui5.playground.controller.Storage", {
        onInit: function () {
			this.productsModel = new JSONModel("data/products.json");
			this.getView().setModel(this.productsModel);

            this.getOwnerComponent().getModel("ProductsModel").setData(this.productsModel);
		},

        onAddItem: function(oEvent) {
            if (!this.pDialog) {
                this.pDialog = this.loadFragment({
                    name: "ui5.playground.fragments.AddItem"
                }).then(function (oDialog) {
                    syncStyleClass(this.getOwnerComponent().getContentDensityClass(), this.getView(), oDialog);
                    return oDialog;
                }.bind(this));
            }

            this.pDialog.then(function (oDialog) {
                oDialog.open();
            });
        },

        onOkItemDialog: function () {
            var inputName = this.getView().byId("itemNameInput").getValue();

            if (!this.validName(inputName)) return;

            var inputQuantity = this.getView().byId("itemQuantityInput").getValue();
            var existingItem = this.getItemFromModel(inputName);

            if (existingItem != null) existingItem.quantity = inputQuantity;
            else this.addToProductList(inputName, inputQuantity);

            this.resetItemDialog();
            this.byId("addItemDialog").close();
        },

        resetItemDialog: function(e) {
            this.getView().byId("itemNameInput").setValue("");
            this.getView().byId("itemQuantityInput").setValue("");
        },

        onCancelItemDialog: function () {
            this.resetItemDialog();
            this.byId("addItemDialog").close();
        },

        validName: function(inputName) {
            return inputName.trim().length == 0 ? false : true;
        },

        addToProductList: function(inputName, inputQuantity) {
            var list = this.productsModel.getProperty("/ProductList");
            list.push({
                "name": inputName,
                "quantity": inputQuantity
            });

            this.productsModel.setProperty("/ProductList", list);
        },

        getItemFromModel: function (itemName) {
            return this.productsModel.getData().ProductList.filter(item => item.name === itemName)[0];
        },

        onLiveChange: function (oEvent) {
			var value = oEvent.getParameter("value");
			var oInput = oEvent.getSource();
            value = value.substr(0, 3);
            value = value.replace(/[^\d]/g, '');
            oInput.setValue(value);
		}

	});
});