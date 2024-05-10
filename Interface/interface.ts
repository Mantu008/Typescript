interface user{
      name:string,
      userid:number
      // startTrail:()=>string      // both are correct
      startTrail():string           // but it is simple
      getCoopen(coopnename:string,value:number):number
}  

let mantu:user;

mantu={name:"mantu",userid:1,
startTrail:()=>{
    return "i am mantu kumar"
},
getCoopen:(name:string,off:number)=>{
      return off;
}
};

console.log(mantu)
console.log(mantu.startTrail())
console.log(mantu.getCoopen("hh",67))