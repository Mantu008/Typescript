function addTwo(num) {
    return num + 2;
}
var ans = addTwo(3);
console.log(ans);
function getUpper(val) {
    return val.toUpperCase();
}
var uppervalue = getUpper("mantu");
console.log(uppervalue);
function SignUpUser(name, email, isPaid) {
    return "SignUp Sucessfull";
}
console.log(SignUpUser("mantu", "mantu@gmail.com", true));
var loginUser = function (email, password, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
    return "Login Sucessfull";
}; //by default is paid is true
console.log(loginUser("mantu@123gmail.com", "mantukumarmorya"));
console.log(loginUser("mantu@123gmail.com", "mantukumarmorya", false));
//how return a function
var addThree = function (val) {
    return val + 3;
};
console.log("The value of addThree is:-" + addThree(6));
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "i am ".concat(hero);
});
//use void
var consoleErr = function (errmsg) {
    console.log(errmsg);
};
consoleErr("typon err");
//use never
var throwerr = function (errmsg) {
    throw new Error(errmsg);
};
throwerr("throw err");
