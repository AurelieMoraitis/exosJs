let button = document.querySelector('#okButton');
let prixMenu = [8.70, 12.50, 3.80, 2];
let currentLi;
let lisArray = document.querySelectorAll('ul li');
for (var i=0; i<lisArray.length; i++){
    currentLi = lisArray[i];
    let number = i+1;
    
    if(number===4){
        currentLi.innerHTML = "Boissons" + number + ": " + prixMenu[i] + "€";
    }else{
        currentLi.innerHTML = "Menu" + number + ": " + prixMenu[i] + "€";
    }
}


let calculPrix = function(){
    let total;
    let menuChoisi = document.getElementById('selectionMenu').value;
    let input;
    let errorText;
 

    if(menuChoisi === ""){
        input= document.getElementById('selectionMenu');
        input.classList.add('errorInput');
        errorText = document.getElementsByClassName('errorMessage')[0];
        errorText.classList.remove('hidden');
        total = 0

    }else{
        input=document.getElementById('selectionMenu');
        input.classList.remove('errorInput');
        errorText = document.getElementsByClassName('errorMessage')[0];
        errorText.classList.add('hidden');

        total = 0 
        menuChoisi = menuChoisi.split(",");
        let currentElement;
        for (var i = 0; i<menuChoisi.length; i++){
            currentElement = menuChoisi[i];
            total += prixMenu[currentElement-1];
        }
        
    }
    document.getElementById("total").innerHTML = total;
    
}



