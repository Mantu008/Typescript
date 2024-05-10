function addTwo(num:number){
    return num+2;
}
let ans=addTwo(3);
console.log(ans)


function getUpper(val:string){
  return val.toUpperCase();
}

let uppervalue=getUpper("mantu") 
console.log(uppervalue)

function SignUpUser(name:string,email:string,isPaid:boolean
){
  return "SignUp Sucessfull"
}

console.log(SignUpUser("mantu","mantu@gmail.com",true))

let loginUser=(email:string,password:string,isPaid:boolean=true)=>{
  return "Login Sucessfull"
}   //by default is paid is true

console.log(loginUser("mantu@123gmail.com","mantukumarmorya"))
console.log(loginUser("mantu@123gmail.com","mantukumarmorya",false))



//how return a function

const addThree=(val:number):number=>{
     return val+3;
}
console.log("The value of addThree is:-"+addThree(6))

const heros=["thor","spiderman","ironman"];

heros.map((hero):string=>{
     return `i am ${hero}`
})

//use void

const consoleErr=(errmsg:string):void=>{
      console.log(errmsg)
}

consoleErr("typon err")

//use never

const throwerr=(errmsg:string):never=>{
       throw new Error(errmsg);
}

throwerr("throw err")