var Youtoub = /** @class */ (function () {
    function Youtoub(camaraMode, filter, burst) {
        this.camaraMode = camaraMode;
        this.filter = filter;
        this.burst = burst;
    }
    return Youtoub;
}());
var InstaGram = /** @class */ (function () {
    function InstaGram(camaraMode, filter, burst, short) {
        this.camaraMode = camaraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    InstaGram.prototype.createStory = function () {
        console.log("this is story section");
    };
    return InstaGram;
}());
var mantu = new InstaGram("Front", "Calibury", 4, "light");
console.log(mantu);
mantu.createStory();
