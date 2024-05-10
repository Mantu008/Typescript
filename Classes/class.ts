class user{
      email:string;
      name:string;
      readonly city:string="jaipur"

      constructor(email,name){
            this.email=email;
            this.name=name
      }

}

const mantu=new user("mantu@gmail.com","mantu")

console.log(mantu.email);
console.log(mantu.name)
console.log(mantu.city)