class user{

    //  private _courceCount=1;      //this can only acess on the same class
     protected _courceCount=1;       //it acess same class as well as inharits classes
     readonly city:string="jaipur";
     
     constructor(
      public name:string,
      public email:string,
      // private userId:string                         // this is for futuure uses -
    ){
     }

     private deleteToken():void{
          console.log("Token is deleted")
     }

     get getEmail():string{
          return `The Email is ${this.email}`;
     }

     get getName():string{
      return `The Name is ${this.name}`;
    }

     get getCourceCount():string{
      return `The Current Cource Count is ${this._courceCount}`;
     }

     set setCourceCount(count:number){
           this._courceCount=count;
     }
}

class subUser extends user{
    isFamily:boolean=true;
    chengeCourceCount(count:number){
        this._courceCount=count
    }
}

const userObj=new user("mantu@gmail.com","mantu");

console.log(userObj)

userObj.setCourceCount=4;

console.log(userObj)

console.log(userObj.getCourceCount);
console.log(userObj.getEmail);
console.log(userObj.getName);


const subUserObj=new subUser("sahil@123","sahil");

console.log(subUserObj)

subUserObj.chengeCourceCount(8);

console.log(subUserObj)

console.log(subUserObj.getEmail)

