  
//Créer un event listner de type click qui déclenchera la fonction loadData

var request = new XMLHttpRequest;  // Créer un objet XMLHttpRequest
var btn = document.getElementById('button');

button.addEventListener('click',function loadData (){
   
    request.onload = function (){       // fonction pour analyser le process de la requete envoyé
        if (request.readyState == 4){
            if (request.status == 200) {
                document.getElementById('output').innerHTML = request.responseText;  //  declarer l'emplacement d'affichage de resultat de la requete
            }
            if (request.status == 404) {
                console.log("ERROR 404")
            }
        }
    }
    request.open('get', 'data.txt'); // Charger les données à partir  le fichier data.txt
    request.send();
})


