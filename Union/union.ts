let score: number | string;
score=10;
score="10";

console.log(score)

type User={
      name:string,
      id:number
}

type Admin={
  username:string,
  id:number
}

let mantu:User|Admin;

mantu={
    name:"mantu",
    id:123
}

mantu={
  username:"mkm",
  id:123
}

console.log(mantu)


//function

function getDbId(id:number|string):void{
     if(typeof id==="string"){
        console.log(`id is ${id} and it is string`)
     }else{
      console.log(`id is ${id} and it is number`)
     }
}

getDbId(15);
getDbId("11")


// array

const data:(number|string)[]=[1,2,3,"3","88"];

data.push(9);

console.log(data)
data.pop();
console.log(data)

//asing data

let seatAllotment:"mantu"|"sahil"|"abhi";

seatAllotment="mantu";
seatAllotment="sahil";
seatAllotment="abhi";

// seatAllotment="ashish";       //this is invalid