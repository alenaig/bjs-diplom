"use strict";

let user = new UserForm();

user.loginFormCallback = function(data) {
    ApiConnector.login({ login, password }, callback => callback.sucess ? location.reload() : this.setLoginErrorMessage(message));
}