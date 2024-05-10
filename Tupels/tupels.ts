let data:[string,number,boolean];
data=["mantu",1234,true];

console.log(data)

let rgb:[number,number,number]=[255,255,255];
console.log(rgb)


//with type

type user=[number,string];
const newUser:user=[123,"mantu"];
console.log(newUser)
newUser[1]="Mantu Kumar Morya"
console.log(newUser)

export {}