const superHeros:string[]=[];
const heroPower:Array<number>=[];

superHeros.push("mantu");
heroPower.push(3);

console.log(superHeros);
console.log(heroPower)


//array of objects

type User={
  name:string,
  isActive:boolean
}


const allUsers:User[]=[];

allUsers.push({name:"mantu",isActive:false})

console.log(allUsers)

allUsers.push({name:"sahil",isActive:true})

console.log(allUsers)


export {}