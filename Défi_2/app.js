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
                var cust = JSON.parse(request1.response)
                document.getElementById('customer').innerHTML= "name: " +  cust.name + "<br>" + "company: " +  cust.company + "<br>" + "phone: " +  cust.phone +"<br>" + "id: " +  cust.id 
                
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
        
            if (request2.status == 200) {
                var custs = JSON.parse(request2.response)
                var data='';
                for( var i in custs ){
                    data +="name: " +  custs[i].name + "<br>" + "company: " + custs[i].company + "<br>" + "phone: " + custs[i].phone +"<br>" + "id: " + custs[i].id + "<hr>";
                
                 
        document.getElementById('customers').innerHTML = data
    }
    
            if (request2.status == 404) {
                console.log("ERROR 404")
            }
        }
    }
    request2.open('get', 'customers.json')
    request2.send();
};


