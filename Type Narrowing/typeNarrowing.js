function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
console.log(detectType("MANTU"));
console.log(detectType(5));
function provideId(id) {
    if (!id) {
        return "Plese provide id to me";
    }
    return "Id is ".concat(id);
}
console.log(provideId("y7y"));
console.log(provideId(null));
// in operator narrowing
console.log("----------------------------------------");
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        console.log("Yes it is Admin Account");
    }
    else {
        console.log("No! it is not Admin Account");
    }
}
isAdminAccount({ name: "mantu", email: "mantu@123", isAdmin: true });
isAdminAccount({ name: "sahil", email: "sahil@123" });
//instance of narrowing
"----------------------------------";
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString);
    }
    else {
        console.log(x.toUpperCase());
    }
}
console.log(new Date());
console.log("mantu");
//Type Predicates
console.log("-------------------------------------------");
function isFish(Pet) {
    return Pet.swim !== undefined;
}
function getFood(Pet) {
    if (isFish(Pet)) {
        Pet;
        return "Fish Food";
    }
    else {
        Pet;
        return "Bird Food";
    }
}
console.log(getFood({ swim: function () { } }));
console.log(getFood({ fly: function () { } }));
// Discrimanited Union
console.log("-------------------------------------------------");
function getShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else if (shape.kind === "rectangle") {
        return shape.height * shape.width;
    }
    return shape.side * shape.side;
}
console.log("Area of circle is:-" + getShape({ kind: "circle", radius: 10 }));
console.log("Area of Squire is:-" + getShape({ kind: "squire", side: 10 }));
console.log("Area of Ractangle is:-" + getShape({ kind: "rectangle", height: 10, width: 20 }));
//using switch case
console.log("---------------------------------------------------");
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
            break;
        case "squire":
            return shape.side * shape.side;
            break;
        case "rectangle":
            return shape.height * shape.width;
            break;
        default:
            var _defaultForShape = shape;
            return _defaultForShape;
    }
}
console.log("Area of circle is:-" + getArea({ kind: "circle", radius: 10 }));
console.log("Area of Squire is:-" + getArea({ kind: "squire", side: 10 }));
console.log("Area of ractangle is:-" + getShape({ kind: "rectangle", height: 10, width: 20 }));
