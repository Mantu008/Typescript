abstract class TakePhoto{
     constructor(
       public cameraMode:string,
       public filter:string
     ){}

     abstract getPhoto():void

     getRealTime():number{
          //some complex calculation
          return 16;
     }

     count:number=5;
}


class Instagram extends TakePhoto{
     constructor(
         public cameraMode:string,
         public filter:string,
         public  time:number
     ){
         super(cameraMode,filter)
     }

     getPhoto(): void {
          console.log("this is your photo")
     }
} 

const newObj=new Instagram("test","test",7)

console.log(newObj);
console.log("the current count is:-"+newObj.count);
newObj.getPhoto()
console.log(newObj.getRealTime())