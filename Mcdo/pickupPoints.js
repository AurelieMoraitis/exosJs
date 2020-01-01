function findPickupPoints(){
    let codePostal = document.getElementById('selectionCodePostal').value;
    let input;
    let errorText;

    if(codePostal === "" || isNaN(parseInt(codePostal,10))){
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
    }
}