
        //user put Currency Amount
        let amount = prompt("Amount Here Now :");

        //user put Convert Currency Sign Here
        let currency = prompt("currency Sing Here:");


        // currency convert condition here now
        if( amount == '' || currency == ''){
            alert("Plz All Frield Must Be Emplay ?");
        }else{
            if( currency == '$'){
                console.log(`${amount}${currency} = ${amount * 112.45} BDT`);
            }else if( currency == '€' ){
                console.log(`${amount}${currency} = ${amount * 160} BDT`);
            }else if( currency == 'rupi' ){
                console.log(`${amount}${currency} = ${amount * 1.23} BDT`);
            }
        }