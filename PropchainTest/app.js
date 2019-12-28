"use strict"; //force la déclaration de variables

let intialTable = ["voiture","banane","saumon","pates"];
let finalTable = [];

function myFunction(){
    //dingDingBottle(16);
    upDownLeftRight(intialTable, true, true);
    palindrome();
    sufferingOfKeys();
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


function upDownLeftRight(intialTable, isLow, isReversed){
    for(var i=0; i<intialTable.length; i++){
        if(isLow == true){
            i.toString().toLowerCase();
        }
        else{
            i.toString().toUpperCase();
        }

    }
    if(isReversed){
        finalTable=intialTable.reverse();
    }
    console.log(finalTable);
    return finalTable;
    
}

function palindrome(){
    console
}

function sufferingOfKeys(){
    console
}

