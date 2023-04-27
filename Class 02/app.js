

// // user name checked now

// let userFirstName = prompt("First Name");
// let userLastName = prompt("Last Name");

// if( userLastName == "rana"){
//     console.log(`My name is ${ userFirstName } ${ userLastName }`);
// }else{
//     console.log(`My name is ${ userFirstName } ${ userLastName }`);
// }


// student result here now
    let studentNumber = prompt("Put Your Subject Number");


    //student management result system and condition here now
    if( studentNumber >= 0 && studentNumber < 33){
        console.log("vaiya apni taratari vangari chalan apnr diye ai kub hobe");
    }else if( studentNumber >= 33 && studentNumber < 40 ){
        console.log("vaiya apni D Paisen");
    }else if( studentNumber >= 40 && studentNumber < 50 ){
        console.log("vaiya apni C Paisen");
    }else if( studentNumber >= 50 && studentNumber < 60 ){
        console.log("vaiya apni B Paisen");
    }else if( studentNumber >= 60 && studentNumber < 70 ){
        console.log("vaiya apni A- Paisen");
    }else if( studentNumber >= 70 && studentNumber < 80 ){
        console.log("vaiya apni A Paisen");
    }else if( studentNumber >= 80 && studentNumber < 100 ){
        console.log("vaiya apni A+ Paisen");
    }else{
        console.log("vai apni porikkha disen to ");
    }