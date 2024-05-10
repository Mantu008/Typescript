const User={
    name:"mantu",
    email:"mantu@gmail.com",
    isActive:true
}

const createUser=({name:string,isPaid:boolean}):string=>{
     return "User is Creatred";
}
const user=createUser({name:"mantu",isPaid:true})
console.log(user)


const createCource=(nm:string,pric:number):{name:string,price:number}=>{
    return {name:nm,price:pric};
}

const cource=createCource("React.js",200);
console.log(cource)

//better way of defining js function with object

const createPlaylist=({name:string,isPaid:boolean}):string=>{
        return "Playlist is created"
}

const newPlaylist={name:"java with me",isPaid:false,author:"mantu"}

const playlist=createPlaylist(newPlaylist)
console.log(playlist)

// Type aliases

type Book={
     name:string,
     author:string,
     price:number
}

const publishBook=(bk:Book):Book=>{
   return {name:bk.name,author:bk.author,price:bk.price};
}

const bk={name:"Java",author:"mantu",price:500,chepter:4};

const book=publishBook(bk);

console.log(book)

// acess demand

type User={
      readonly _id:string
      name:string,
      email:string,
      isActive:boolean
}

const myUser:User={
      _id:"12345",
      name:"mantu",
      email:"mantu@gmail.com",
      isActive:true
}

console.log(myUser)


myUser.name="Mantu Kumar Morya"

console.log(myUser)

// myUser._id="123456";        // this is not acceptable because _id is only readonly form