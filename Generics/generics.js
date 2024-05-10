function identityOne(val) {
    return val;
}
console.log(identityOne(8));
function identityTwo(val) {
    return val;
}
console.log(identityTwo(6));
function identityThree(arg) {
    return arg;
}
console.log(identityThree(3));
//simple way to define generics
function identityFour(val) {
    return val;
}
console.log(identityFour(89));
//create own datatype
function identityFive(val) {
    return val;
}
console.log(identityFive({ brand: "milton", price: 600 }));
//work with array
var arr = [5, 4, 7, 8, 3, 2, 1];
// function getSearchProduct<T>(product:T[]):T{
//       const maxIndex=4;
//       return product[maxIndex];
// }
//same methood as arrow function
var getSearchProduct = function (product) {
    var maxIndex = 3;
    return product[maxIndex];
};
console.log("value of array at index 3 is:-" + getSearchProduct(arr));
var anotherFunction = function (valOne, ValTwo, valThree) {
    return {
        valOne: valOne,
        ValTwo: ValTwo,
        valThree: valThree
    };
};
console.log(anotherFunction(5, "mantu", { conection: "mutual", userName: "mantu@123", password: "mantu@12345" }));
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return Sellable;
}());
var obj = new Sellable();
console.log(obj);
obj.addToCart({ name: "Bee", type: "Electronics" });
console.log(obj);
obj.addToCart({ name: "C programing", type: "Computer Language" });
console.log(obj);
