// Constractor function createing here now

function DevInfo(){


        this.DevName = "Masud Rana";
        this.DevAge = 22; 
        this.DevJob = "MERN Stack Developer";

        this.DevInfoAll = function (){

                return`my name is ${ this.DevName} and i'm ${ this.DevAge} Years Old. I'm ${ this.DevJob }`;
        }
}



//  create a object here now

  DevInfo = new DevInfo();

  //   object porparti name here now
  console.log(DevInfo.DevName);
  //   object porparti name here now
  console.log(DevInfo.DevAge);
  //   object porparti name here now
  console.log(DevInfo.DevJob);
  //   object porparti name here now
  console.log(DevInfo.DevInfoAll());