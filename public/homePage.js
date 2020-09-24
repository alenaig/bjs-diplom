"use strict";

let logout = new LogoutButton();

//logout
logout.action = function() {
    ApiConnector.logout(response =>{
        if(response.success){
            location.reload();
        }
    });
};

//show profile
ApiConnector.current(response => {
    if (response.success) {
        ProfileWidget.showProfile(response.data);
    }
});

//exchange rates
let rates = new RatesBoard();

function exchangeRate() {
    ApiConnector.getStocks(response => {
    if (response.success) {
        rates.clearTable();
        rates.fillTable(response.data);
    }
})
};

exchangeRate();
setInterval(exchangeRate(), 60000);

//transactions
let money = new MoneyManager();

money.addMoneyCallback = function(data) {
    ApiConnector.addMoney(data, response =>{
        if(response.success){
            ProfileWidget.showProfile(response.data);
            money.setMessage(response.success, "Ваш баланс успешно пополнен");
        } 
        else {money.setMessage(response.success, response.error);}
    });
};

money.conversionMoneyCallback = function(data) {
    ApiConnector.convertMoney(data, response =>{
        if(response.success){
            ProfileWidget.showProfile(response.data);
            money.setMessage(response.success, "Конвертация совершена успешно");
        } 
        else {money.setMessage(response.success, response.error);}
    });
};

money.sendMoneyCallback = function(data) {
    ApiConnector.transferMoney(data, response =>{
        if(response.success){
            ProfileWidget.showProfile(response.data);
            money.setMessage(response.success, "Деньги успешно отправлены");
        } 
        else {money.setMessage(response.success, response.error);}
    });
};

//favorite
let favorite = new FavoritesWidget();

ApiConnector.getFavorites(response => {
    if (response.success) {
        favorite.clearTable();
        favorite.fillTable(response.data);
        money.updateUsersList(response.data);
    }
});

favorite.addUserCallback = function(data) {
    ApiConnector.addUserToFavorites(data, response =>{
        if(response.success){
            favorite.clearTable();
            favorite.fillTable(response.data);
            money.updateUsersList(response.data);
            money.setMessage(response.success, "Пользователь добавлен в избранное");
        } 
        else {money.setMessage(response.success, response.error);}
    });
};

favorite.removeUserCallback = function(data) {
    ApiConnector.removeUserFromFavorites(data, response =>{
        if(response.success){
            favorite.clearTable();
            favorite.fillTable(response.data);
            money.updateUsersList(response.data);
            money.setMessage(response.success, "Пользователь удалён из избранного");
        } 
        else {money.setMessage(response.success, response.error);}
    });
};


