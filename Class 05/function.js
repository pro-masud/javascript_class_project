


// create a student gpa function here 
function gpa(marks){

    let gpa;

    if( marks >= 0 && marks < 33 ){
        gpa = 0;
     }else if( marks >= 33 && marks < 40 ){
         gpa = 1;
     }else if( marks >= 40 && marks < 50 ){
         gpa = 2;
     }else if( marks >= 50 && marks < 60 ){
         gpa = 3;
     }else if( marks >= 60 && marks < 70 ){
         gpa = 3.5;
     }else if( marks >= 70 && marks < 80 ){
         gpa = 4;
     }else if( marks >= 80 && marks <= 100 ){
         gpa = 5;
     }     
     return gpa;
}


//greet pointe funtion here 
function greet(marks){

    let greet;

    if( marks >= 0 && marks < 33 ){
        greet = 'F';
     }else if( marks >= 33 && marks < 40 ){
        greet = 'D';
     }else if( marks >= 40 && marks < 50 ){
        greet = 'C';
     }else if( marks >= 50 && marks < 60 ){
        greet = 'B';
     }else if( marks >= 60 && marks < 70 ){
        greet = 'A-';
     }else if( marks >= 70 && marks < 80 ){
        greet = 'A';
     }else if( marks >= 80 && marks <= 100 ){
        greet = 'A+';
     }
     
     return greet;
}

// student total cgpa function
function CGPA(bangla, eng, math, s, ss, rel){

    if( bangla == 0 || eng == 0 || math == 0 || s == 0 || ss == 0 || rel == 0 ){
        return"Your Are Frield This Years. Next year Full piparetion New Future Your";
    }else{

        let total = bangla + eng + math + s + ss + rel;
        let totalCGPA = total / 6;
       return totalCGPA.toFixed(2);
    }

}

// user defiend function
function anyfunction(){

}


// functon expariation
let devFunction = function(){

}

// Arrow Function 
// Arrow Multipul paramitar section 
let phpDev = () => {

}

let phpDevSingle = tumi  => "this is a single arrow function here now"