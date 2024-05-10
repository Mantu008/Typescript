interface TakePhoto{
       camaraMode:string;
       filter:string;
       burst:number;
}

class Youtoub implements TakePhoto{
      constructor(
          public camaraMode:string,
          public filter:string,
          public burst:number
      ){

      }
}


//after implementing any interface we can also add new field in new class which is implemented by other interface

interface story{
     createStory():void
}

class InstaGram implements TakePhoto,story{              
  constructor(
    public camaraMode:string,
    public filter:string,
    public burst:number,
    public short:string
){}

 createStory(): void {
     console.log("this is story section")
 }

}

const mantu=new InstaGram("Front","Calibury",4,"light")
console.log(mantu)

mantu.createStory();