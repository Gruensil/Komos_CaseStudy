"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//import { ProfileService } from '../services/profile.service';
var User = (function () {
    function User(email, password, role, id, firstname, lastname) {
        this.email = email;
        this.password = password;
        this.role = role;
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    return User;
}());
exports.User = User;
var users = [
    new User('userA', 'userA', 'client', '1234567', 'Mustermann', 'Max'),
    new User('userB', 'userB', 'client', '1234568', 'Musterfrau', 'Mara')
];
var AuthenticationService = (function () {
    function AuthenticationService(_router) {
        this._router = _router;
        this.isLoggedIn = false;
    }
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('user');
        this.isLoggedIn = false;
        // localStorage.setItem('userRole', 'none');
        // localStorage.setItem('clientID', 'none');
        localStorage.clear();
        this._router.navigate(['login']);
    };
    AuthenticationService.prototype.login = function (username, pw) {
        var authenticatedUser = users.find(function (u) { return u.email === username; });
        if (authenticatedUser && authenticatedUser.password === pw) {
            localStorage.setItem('user', JSON.stringify(authenticatedUser));
            //this._router.navigate(['login']);
            this.isLoggedIn = true;
            localStorage.setItem('userRole', authenticatedUser.role);
            localStorage.setItem('clientID', authenticatedUser.id);
            return true;
        }
        return false;
    };
    AuthenticationService.prototype.getName = function () {
        if (localStorage.getItem('user') !== null) {
            return JSON.parse(localStorage.getItem("user")).firstname + " " + JSON.parse(localStorage.getItem('user')).lastname;
        }
    };
    AuthenticationService.prototype.getId = function () {
        if (localStorage.getItem('user') !== null) {
            return JSON.parse(localStorage.getItem("user")).id;
        }
    };
    AuthenticationService.prototype.checkCredentials = function () {
        if (localStorage.getItem('user') === null) {
            this._router.navigate(['login']);
        }
    };
    AuthenticationService.prototype.checkStaffPrivileges = function () {
        var user;
        user = JSON.parse(localStorage.getItem('user'));
        if (user === null) {
            this._router.navigate(['login']);
        }
        else {
            if (user.role !== "staff") {
                this._router.navigate(['/']);
            }
        }
    };
    AuthenticationService.prototype.checkPrivilegesIncludeOne = function (roleArray) {
        var user;
        user = JSON.parse(localStorage.getItem('user'));
        if (user === null) {
            this._router.navigate(['/login']);
        }
        else {
            var result = $.grep(roleArray, function (e) { return e.role == user.role; });
            if (result.length == 0) {
                this._router.navigate(['/login']);
            }
        }
    };
    AuthenticationService.prototype.boolCheckPrivilegesIncludeOne = function (roleArray) {
        var user;
        user = JSON.parse(localStorage.getItem('user'));
        if (user === null) {
            return false;
        }
        else {
            var result = $.grep(roleArray, function (e) { return e.role == user.role; });
            if (result.length == 0) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map