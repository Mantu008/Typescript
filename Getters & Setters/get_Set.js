var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user = /** @class */ (function () {
    function user(name, email) {
        this.name = name;
        this.email = email;
        //  private _courceCount=1;      //this can only acess on the same class
        this._courceCount = 1; //it acess same class as well as inharits classes
        this.city = "jaipur";
    }
    user.prototype.deleteToken = function () {
        console.log("Token is deleted");
    };
    Object.defineProperty(user.prototype, "getEmail", {
        get: function () {
            return "The Email is ".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(user.prototype, "getName", {
        get: function () {
            return "The Name is ".concat(this.name);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(user.prototype, "getCourceCount", {
        get: function () {
            return "The Current Cource Count is ".concat(this._courceCount);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(user.prototype, "setCourceCount", {
        set: function (count) {
            this._courceCount = count;
        },
        enumerable: false,
        configurable: true
    });
    return user;
}());
var subUser = /** @class */ (function (_super) {
    __extends(subUser, _super);
    function subUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    subUser.prototype.chengeCourceCount = function (count) {
        this._courceCount = count;
    };
    return subUser;
}(user));
var userObj = new user("mantu@gmail.com", "mantu");
console.log(userObj);
userObj.setCourceCount = 4;
console.log(userObj);
console.log(userObj.getCourceCount);
console.log(userObj.getEmail);
console.log(userObj.getName);
var subUserObj = new subUser("sahil@123", "sahil");
console.log(subUserObj);
subUserObj.chengeCourceCount(8);
console.log(subUserObj);
console.log(subUserObj.getEmail);
