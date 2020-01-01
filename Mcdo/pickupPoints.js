document.getElementById('selectionCodePostal').onkeydown = function(event){
    if (event.keyCode == 13){//enter
        findPickupPoints();
    }
}

function findPickupPoints(){
    let codePostal = document.getElementById('selectionCodePostal').value;
    codePostal = parseInt(codePostal,10);
    let input;
    let errorText;
    let mcdoPoints = {
        1702: ["Robert Dansaertlaan 11"],
        1000: ["Place de la Bourse 3", "Rue Neuve 124"]
    }

    if(codePostal === "" || isNaN(codePostal)){
        input = document.getElementById('selectionCodePostal');
        input.classList.add('errorInput');
        errorText = document.getElementsByClassName('errorMessage')[0];
        errorText.classList.remove('hidden');
    }
    else {
        input = document.getElementById('selectionCodePostal');
        input.classList.remove('errorInput');
        errorText = document.getElementsByClassName('errorMessage')[0];
        errorText.classList.add('hidden');
        let adresses = mcdoPoints[codePostal];
        let results;
        let textResult
        let previousResult = document.getElementById('results').children;
        let previousResultLength = previousResult.length;

        for(var i =0; i<previousResultLength; i++){

            previousResult[0].remove();
        }
        
        if(adresses === undefined){
            results = document.createElement("DIV");
            textResult = document.createTextNode("Aucun Mcdo dans cette zone");
            results.appendChild(textResult);
            document.getElementById("results").appendChild(results);

        }
        else{
            for (var i = 0; i < adresses.length; i++) {

                results = document.createElement("DIV");
                textResult = document.createTextNode(adresses[i]);
                results.appendChild(textResult);
                document.getElementById("results").appendChild(results);
            }
        }

    }
}