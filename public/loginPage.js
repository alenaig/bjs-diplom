"use strict";

let user = new UserForm();

user.loginFormCallback = function(data) {
    ApiConnector.login({ login, password }, responce => responce.success ? location.reload() : this.setLoginErrorMessage(message));
}