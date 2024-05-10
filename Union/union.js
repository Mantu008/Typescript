var score;
score = 10;
score = "10";
console.log(score);
var mantu;
mantu = {
    name: "mantu",
    id: 123
};
mantu = {
    username: "mkm",
    id: 123
};
console.log(mantu);
//function
function getDbId(id) {
    if (typeof id === "string") {
        console.log("id is ".concat(id, " and it is string"));
    }
    else {
        console.log("id is ".concat(id, " and it is number"));
    }
}
getDbId(15);
getDbId("11");
// array
var data = [1, 2, 3, "3", "88"];
data.push(9);
console.log(data);
data.pop();
console.log(data);
