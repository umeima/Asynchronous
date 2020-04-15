var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');


button1.addEventListener('click', loadCustomer);
button2.addEventListener('click', loadCustomers);

function loadCustomer (){
    var request1 = new XMLHttpRequest;
    ;

    request1.onload = function (){       // fonction pour analyser le process de la requete envoyé
        if (request1.readyState == 4){
            if (request1.status == 200) {
                document.getElementById('customer').innerHTML=request1.response
                
            }
            if (request1.status == 404) {
                console.log("ERROR 404")
            }
        }
    }
    request1.open('get', 'customer.json')
    request1.send();
};




function loadCustomers (){
    var request2 = new XMLHttpRequest;

    request2.onload = function (){       // fonction pour analyser le process de la requete envoyé
        if (request2.readyState == 4){
            if (request2.status == 200) {
                document.getElementById('customers').innerHTML=request2.response
                
            }
            if (request2.status == 404) {
                console.log("ERROR 404")
            }
        }
    }
    request2.open('get', 'customers.json')
    request2.send();
};


