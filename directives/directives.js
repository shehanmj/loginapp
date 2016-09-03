angular.module("myApp")

.directive("login", function() {
    return {
        controller: 'loginInterface',
        template:
            '<h1>Login</h1>'
                +'<div>{{loginMessage}}</div>'
                
                +'<input ng-model="username">'+'<br>'
                +'<input ng-model="password">'+'<br>'
                +'<button  ng-click="Users.login(username, password, login)">login</button>'
    };
})

.directive("logout", function() {
    return {
        controller: 'logoutInterface',
        template: 
        '<div>{{logoutMessage}}</div>'
        +'<button ng-click="Users.logout(username, password, logout)">Logout</button>'
        
    };
})

.directive("register", function() {
    return {
        controller: "registrationInterface",
        template: 
        '<h1>Register</h1>'
            +'<div>{{regisMessage}}</div>'
                +'name:     <input ng-model="username">'+'<br>'
                +'password: <input type="password" ng-model="password">'+'<br>'
                +'password: <input type="password" ng-model="repeat">'+'<br>'
                +'<button ng-click="Users.register(username, password, repeat, register)">register</button>'
    };
})

.directive("list", function() {
    return {
        scope: {
            object: "="
        },
        template: 
        '<ul ng-repeat= "(name, user) in object">'
        +'<li>{{name}}</li>'
        +'</ul>'
    };
})