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

  let DevInfoNew = new DevInfo();

  //   object porparti name here now
  console.log(DevInfoNew.DevName);
  //   object porparti name here now
  console.log(DevInfoNew.DevAge);
  //   object porparti name here now
  console.log(DevInfoNew.DevJob);
  //   object porparti name here now
  console.log(DevInfoNew.DevInfoAll());


//   Array creation start Now

        let Foods = ['alo','potol','law','amme','dab'];