//program to predict credit card

// regex for master credit card

//TEST for master card:
//let credit_card = "5277-2234-0234-9821"
pattern = /^(5[1-5]\d{2}|[2221-2720])[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}$/

//let match = /^(5[1-5]\d{2}|[2221-2720])[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}$/.test(credit_card)
//console.log(match)


// regex for verve card
//TEST for verve card
//let credit_card1 = "650021-001234-99874689"
pattern1 = /^(506099|50610[0-8]|6500[0-2][0-7]|507[8-9][0-9][0-4])[ -]?\d{6}[ -]?(\d{4}$|\d{6}$|\d{7}$)$/

//let match1 = /^(506099|50610[0-8]|6500[0-2][0-7]|507[8-9][0-9][0-4])[ -]?\d{6}[ -]?(\d{4}$|\d{6}$|\d{7}$)$/.test(credit_card1)
//console.log(match1)


// regex for visa card
//TEST for visacard
//let credit_card2 = "4544-1234-1256-5345"
pattern2 = /^4\d{3}[ -]?\d{4}[ -]?\d{4}[ -]?(\d{1}$|\d{4}$)$/
//let match3 = /^4\d{3}[ -]?\d{4}[ -]?\d{4}[ -]?(\d{1}$|\d{4}$)$/.test(credit_card2)
//console.log(match3)


function verifyCreditCard(credit_card){
    if(pattern.test(credit_card)==true){
        return ("this is a MASTER CARD")
    }
    else if(pattern1.test(credit_card)== true){
        return ("this is a VERVE CARD")
    }
    else if(pattern2.test(credit_card)==true){
        return ("this is a VISA CARD")
    }
    else{
        return  ("you entered an INVALID CARD")
    }
}

credit_card= "5277-2234-0234-9821"

console.log(`the credit card number is ${credit_card},${verifyCreditCard(credit_card)}`)


