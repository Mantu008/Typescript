function identityOne(val: number | boolean): number | boolean {
  return val;
}
console.log(identityOne(8))


function identityTwo(val:any):any{
    return val;
}

console.log(identityTwo(6));

function identityThree<Type>(arg: Type): Type {
  return arg;
}

console.log(identityThree(3));

//simple way to define generics

function identityFour<T>(val:T):T{
    return val;
}

console.log(identityFour(89))


//create own datatype

function identityFive<Bootel>(val:Bootel):Bootel{
   return val;
}

interface Bootel{
      brand:string,
      price:number
}

console.log(identityFive<Bootel>({brand:"milton",price:600}))



//work with array

const arr:Array<number>=[5,4,7,8,3,2,1];

// function getSearchProduct<T>(product:T[]):T{
//       const maxIndex=4;
//       return product[maxIndex];
// }

//same methood as arrow function

const getSearchProduct=<T>(product:T[]):T=>{
    const maxIndex=3;
    return product[maxIndex];
}


console.log("value of array at index 3 is:-"+getSearchProduct(arr))




// classes of generics

interface DataBase{
    conection:string,
    userName:string,
    password:string    
}

const anotherFunction=<T,U,W extends DataBase>(valOne:T,ValTwo:U,valThree:W):object=>{
     return{
         valOne,
         ValTwo,
         valThree
     }
}

console.log(anotherFunction(5,"mantu",{conection:"mutual",userName:"mantu@123",password:"mantu@12345"}));


//generics classes

interface Quiz{
    name:string,
    type:string
}

interface Cource{
   name:string,
   author:string,
   subject:string
}

class Sellable<T>{
    public cart:T[]=[];

    addToCart(product:T){
        this.cart.push(product)
    }
}

const obj=new Sellable<Quiz>();

console.log(obj)

obj.addToCart({name:"Bee",type:"Electronics"});

console.log(obj)

obj.addToCart({name:"C programing",type:"Computer Language"});

console.log(obj)