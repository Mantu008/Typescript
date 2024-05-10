var user = /** @class */ (function () {
    function user(email, name) {
        this.city = "jaipur";
        this.email = email;
        this.name = name;
    }
    return user;
}());
var mantu = new user("mantu@gmail.com", "mantu");
console.log(mantu.email);
console.log(mantu.name);
console.log(mantu.city);
