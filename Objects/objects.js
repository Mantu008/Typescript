var User = {
  name: "mantu",
  email: "mantu@gmail.com",
  isActive: true,
};
var createUser = function (_a) {
  var string = _a.name,
    boolean = _a.isPaid;
  return "User is Creatred";
};
var user = createUser({ name: "mantu", isPaid: true });
console.log(user);
var createCource = function (nm, pric) {
  return { name: nm, price: pric };
};
var cource = createCource("React.js", 200);
console.log(cource);

//better way of defining js function with object
var createPlaylist = function (_a) {
  var string = _a.name,
    boolean = _a.isPaid;
  return "Playlist is created";
};
var newPlaylist = { name: "java with me", isPaid: false, author: "mantu" };
var playlist = createPlaylist(newPlaylist);
console.log(playlist);
var publishBook = function (bk) {
  return { name: bk.name, author: bk.author, price: bk.price };
};
var bk = { name: "Java", author: "mantu", price: 500, chepter: 4 };
var book = publishBook(bk);
console.log(book);
var myUser = {
  _id: "12345",
  name: "mantu",
  email: "mantu@gmail.com",
  isActive: true,
};
console.log(myUser);
myUser.name = "Mantu Kumar Morya";
console.log(myUser);
