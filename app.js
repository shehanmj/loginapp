var app = angular.module("myApp", []);

app.controller('userSessionsController', ["$scope", function(scope) {
    var users, passwords, sessions;
    
    users = scope.users = {};
    passwords = {};
    scope.sessions = {};
// register as a user

    scope.register = function(name, pass, repeat, config, cb) {
        if(pass == repeat) {
            if(!users[name]) {
                config.name = name;
                
                users[name] = config;
                passwords[name] = {
                    name: name,
                    pass: pass
                };
                cb(null, {message:"User creation successful!"});
            }
            cb({message:"There is already a user by that name"});
        }
        cb({message:"Passwords don't match"});
    };
    
    scope.login = function(username, password, cb) {
        if(users[username] && passwords[username]) {
            sessions[username] = users[username];
            cb(null, {message:"Username and password matched, welcome back" + username + "!",
                user: users[username]
            });
        }
        cb({message:"Check your spelling, username and/or password not found"});
    };
    
    //logging out
    scope.logout = function(username, password, cb) {
        if(users[username] && password[username]) {
            sessions[username] = null;
            cb(null, {message: username + "has successfully logged out, goodbye!"});
        }
        cb({message: "user not logged in or invalid password given"});
    };
}]);    
    
    //login interface controller
    
app.controller("loginInterface", ["$scope", function(s) {
    
    s.loginMessage = "";
    
    s.login = function(success, fail) {
        if(success) {
            s.loginMessage = success.message;
        }
        else if(fail) {
            s.loginMessage = fail.message;
        }
    };
}]);

// logout interface controller

app.controller("logoutInterface", ["$scope", function(s) {
    
    s.logoutMessage = "";
    
    s.logout = function(success, fail) {
        if(success) {
            s.logoutMessage = success.message;
        }
        else if(fail) {
            s.logoutMessage = fail.message;
        }
    };
}]);

// registration interface controller

app.controller("registrationInterface", ["$scope", function(s) {
    
    s.regisMessage = "Waiting on registration attempt";
    
    s.register = function(success, fail) {
        if(success) {
            s.regisMessage = success.message;
        }
        
        else if(fail) {
            s.regisMessage = fail.message;
        }
    };
}]);




