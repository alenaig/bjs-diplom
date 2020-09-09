"use strict";

let user = new UserForm();

user.loginFormCallback = function(data) {
    ApiConnector.login(data, responce => responce.success ? location.reload() : this.setLoginErrorMessage(message));
}

user.registerFormCallback = function(data) {
    ApiConnector.register(data, responce => responce.success ? location.reload() : this.setLoginErrorMessage(message));
}