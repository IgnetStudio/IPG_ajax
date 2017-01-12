var xhr = new XMLHttpRequest();
var data = new FormData();

xhr.open("POST", "http://ignet.pc.pl/IPG_ajax/receive.php", true);

xhr.onreadystatechange = function(e) {
    
    if(this.readyState === 4 && this.status === 200) {
        console.log(this.response);
    }
    
};

data.append("firstName", "Jan");
data.append("lastName", "Nowak");

//xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // request payload info

//xhr.send("firstName=Jan&lastName=Nowak"); // string

xhr.send(data); // FormData