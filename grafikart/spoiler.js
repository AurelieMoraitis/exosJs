/*
//sur un seul element
var button=document.querySelector('.spoiler button');
button.addEventListener('click', function(){
    this.nextElementSibling.classList.add('visible');
    this.parentNode.removeChild(this);
});*/

//sur tous elements .spoiller
var elements = document.querySelectorAll('.spoiler');

var createSpoilerButton = function(element){

    //creer button
    var button = document.createElement('button');
    button.textContent = 'Afficher le spoil';
    
    //creer span .spoiler-content
    var span = document.createElement('span');
    span.className = 'spoiler-content';
    span.innerHTML = element.innerHTML;
    
    //ajoute element au DOM
    element.innerHTML = '';
    element.appendChild(button);
    element.appendChild(span);

    button.addEventListener('click', function(){
        button.parentNode.removeChild(button);
        span.classList.add('visible');
    });

};

for(var i=0; i<elements.length; i++){
    createSpoilerButton(elements[i])
};