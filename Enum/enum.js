var setChoice;
(function (setChoice) {
    setChoice["one"] = "hii";
    setChoice[setChoice["two"] = 1] = "two";
    setChoice[setChoice["three"] = 44] = "three";
    setChoice["four"] = "i am here";
})(setChoice || (setChoice = {}));
var mySeat = setChoice.four;
console.log(mySeat);
