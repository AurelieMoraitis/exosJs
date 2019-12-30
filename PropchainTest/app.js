"use strict"; //force la déclaration de variables

let initialTable = ["voiture","banane","saumon","pates"];
let finalTable = [];

function myFunction(){
    //dingDingBottle(5);
    //upDownLeftRight(initialTable, false, true);
    //palindrome("sas");
    sufferingOfKeys("kayak");
}

function dingDingBottle(n) {
    for (var i =0; i<=n; i++){
        if(i%3 == 0 && i%5 == 0){
            console.log("ding ding bottle");
        }
        else if(i%3 ==0){
            console.log("ding ding");
        }
        else if (i%5 ==0){
            console.log("bottle");
        }
        else{
            console.log(i);
        }
    }

}


function upDownLeftRight(initialTable, isLow, isReversed){
    
    for(var i=0; i<initialTable.length; i++){
        if(isLow == true){
            initialTable[i] = initialTable[i].toLowerCase();
        }
        else{
            initialTable[i] = initialTable[i].toUpperCase();
        }
    }


    if(isReversed){
        finalTable=initialTable.reverse();
    }
    console.log(finalTable);
    return finalTable;
    
}

function palindrome(word){
    
    var wordReversed = "";

    for (var i=word.length-1; i>=0 ;i --){
        wordReversed += word[i];
    }

    if(word == wordReversed){
        console.log("palindrome");
        return true;   
    }
    else{
        console.log("not palindrome");
        return false;
    }
    
}

function sufferingOfKeys(text){
    var countLetters = {};
    var resultFinal = [];
    for(var i =0; i<text.length; i++){
        var letter = text[i];
        if(countLetters[letter]!==undefined){
            countLetters[letter] = countLetters[letter] + 1
        }
        else{
            //si lettre pas dedans
            countLetters[letter] = 1;
        }
    }

    for (var key in countLetters){
        var result = "{letter: '" + key + "', count: " + countLetters[key] +"}";
        resultFinal.push(result);
    }
    console.log(resultFinal);
}

