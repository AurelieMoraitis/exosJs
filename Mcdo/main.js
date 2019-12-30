let button = document.querySelector('#okButton');
let prixMenu = [8.70, 12.50, 5, 2];


let calculPrix = function(){
    let menuChoisi = document.getElementById('selectionMenu').value;
    console.log(menuChoisi);

    if(menuChoisi === ""){
        alert('refais un choix, correct!');
    }else{
        total = 0 
        menuChoisi = menuChoisi.split(",");
        for (var i = 0; i<menuChoisi.length; i++){
            var currentElement = menuChoisi[i];
            total += prixMenu[currentElement-1];
        }
        document.getElementById("total").innerHTML = total;
    }
    
}



