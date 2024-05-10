function detectType(val: number | string){
     if(typeof val === "string"){
        return val.toLowerCase();
     }
     return val+3;
}

console.log(detectType("MANTU"))
console.log(detectType(5))


function  provideId(id: string | null): string{
      if(!id){
          return "Plese provide id to me";
      }
      return `Id is ${id}`
}
console.log(provideId("y7y"))
console.log(provideId(null))


// in operator narrowing

console.log("----------------------------------------")

interface User{
     name:string,
     email:string
}

interface Admin{
  name:string,
  email:string,
  isAdmin:boolean,
}

function isAdminAccount(account: User | Admin){
       if("isAdmin" in account){
          console.log("Yes it is Admin Account")
       }else{
        console.log("No! it is not Admin Account")
       }
}

isAdminAccount({name:"mantu",email:"mantu@123",isAdmin:true})
isAdminAccount({name:"sahil",email:"sahil@123"})



//instance of narrowing

"----------------------------------"

function logValue(x: Date | string ){
    if(x instanceof Date){
      console.log(x.toUTCString);
    }else{
       console.log(x.toUpperCase())
    }
}

console.log(new Date());
console.log("mantu")


//Type Predicates

console.log("-------------------------------------------")

type Fish={swim:()=>void}
type Bird={fly:()=>void}

function isFish(Pet:Fish|Bird):Pet is Fish{
    return (Pet as Fish).swim !== undefined;
}

function getFood(Pet:Fish | Bird){
    if(isFish(Pet)){
       Pet
       return "Fish Food"
    }else{
      Pet
      return "Bird Food"
    }
}
console.log(getFood({swim(){}}))
console.log(getFood({fly(){}}))


// Discrimanited Union

console.log("-------------------------------------------------")

interface Circle{
   kind:"circle",
   radius:number
}

interface Squire{
    kind:"squire",
    side:number
}

interface Rectangle{
   kind:"rectangle",
   height:number,
   width:number
}

type Shape= Circle | Squire | Rectangle;

function getShape(shape:Shape){
   if(shape.kind==="circle"){
      return Math.PI* shape.radius**2
   }else if(shape.kind==="rectangle"){
      return  shape.height*shape.width
   }
    return shape.side*shape.side
}

console.log("Area of circle is:-"+getShape({kind:"circle",radius:10}))
console.log("Area of Squire is:-"+getShape({kind:"squire",side:10}))
console.log("Area of Ractangle is:-"+getShape({kind:"rectangle",height:10,width:20}))

//using switch case

console.log("---------------------------------------------------")

function getArea(shape:Shape){
      switch (shape.kind) {
         case "circle":
            return  Math.PI* shape.radius**2
            break;
         
         case "squire":
            return  shape.side*shape.side
            break;
      
         case "rectangle":
            return  shape.height*shape.width;
            break;

         default:
           const _defaultForShape:never=shape
            return _defaultForShape;
      }
}

console.log("Area of circle is:-"+getArea({kind:"circle",radius:10}))
console.log("Area of Squire is:-"+getArea({kind:"squire",side:10}))
console.log("Area of ractangle is:-"+getShape({kind:"rectangle",height:10,width:20}))