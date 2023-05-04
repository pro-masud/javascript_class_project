// student information 

        let name = prompt("Name");
        let roll = prompt("Roll");


        //Subject name 
        let bangla = prompt("Bangla");
        let eng = prompt("English");
        let math = prompt("Math");
        let science = prompt("Science");
        let ss = prompt("social Science");
        let rel = prompt("Relagaon");

        console.log(`
        
                Student Name            : ${ name }
                Roll                    : ${ roll }

                Subject Name        Marks               GPA                         Greet Point
                bangla              ${ bangla }          ${ gpa( bangla )}               ${ greet( bangla )}
                English             ${ eng }             ${ gpa( eng )}                  ${ greet( eng )}
                Math                ${ math }            ${ gpa( math )}                 ${ greet( math )}
                Science             ${ science }         ${ gpa( science )}              ${ greet( science )}
                SScience            ${ ss }              ${ gpa( ss )}                   ${ greet( ss )}
                Relagon             ${ rel }             ${ gpa( rel )}                  ${ greet( rel )}
                ----------------------------------------------------------------------------------------------
                      Total CGPA ${ CGPA(gpa(bangla), gpa(eng), gpa(math), gpa(science), gpa(ss), gpa(rel))}
        `);