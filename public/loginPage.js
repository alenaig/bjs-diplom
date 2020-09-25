"use strict";

let user = new UserForm();

//login
user.loginFormCallback = function(data) {
    ApiConnector.login(data, response => 
        response.success ? location.reload() : this.setLoginErrorMessage(response.error)
        );
};

//register
user.registerFormCallback = function(data) {
    ApiConnector.register(data, response => 
        response.success ? location.reload() : this.setRegisterErrorMessage(response.error)
        );
};