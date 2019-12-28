var afficherOnglet = function(a, animations){
    if(animations === undefined){
        animations = true;
    }
    var li = a.parentNode;
    var div = a.parentNode.parentNode.parentNode;
    var activeTab = div.querySelector('.tab-content.active');
    var target = div.querySelector(a.getAttribute('href'));

    if (li.classList.contains('active')) { //demande si li contient class active
        return false;
    }

    //retire la classe active de l'onglet actif
    div.querySelector('.tabs .active').classList.remove('active');

    //aoute la classe active à l'onglet actuel
    li.classList.add('active');

    //si animations = true, on joue les != anim
    if (animations) {
        activeTab.classList.add('fade');
        activeTab.classList.remove('in');

        var endTransition = function () {
            this.classList.remove('fade');
            this.classList.remove('active');

            target.classList.add('active');
            target.classList.add('fade');
            target.offsetWidth;//force le navigateur a appliquer les changements précédants
            target.classList.add('in');//applique ceci après les autres
            activeTab.removeEventListener('transitionend', endTransition);
        }

        activeTab.addEventListener('transitionend',endTransition )
    }
    else {
        target.classList.add('active');
        activeTab.classList.remove('active');
    }

}

//permet de cliquer sur les != onglets
var tabs = document.querySelectorAll('.tabs a');
for (var i=0; i<tabs.length; i++){
    tabs[i].addEventListener('click', function(e){
        afficherOnglet(this);
        
    });
}


/*
la function suivante permet de changer l'onglet actif quand on revient en arrière
--> retourner à l'onglet précédant (pour enlever animations -- enlever 'e' et mettre false après 'a',)
*/
var changeHash = function (e) {
    var hash = window.location.hash;
    var a = document.querySelector('a[href="' + hash + '"]');
    if (a != null && !a.classList.contains('active')) {
        afficherOnglet(a, e!==undefined);
    }
}

window.addEventListener('hashchange', changeHash);
changeHash();