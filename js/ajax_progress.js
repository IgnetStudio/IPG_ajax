var xhr = new XMLHttpRequest(),
    data = new FormData(),
    downloadProgress = document.querySelector("#download"),
    uploadProgress = document.querySelector("#upload");

xhr.open("POST", "http://ignet.pc.pl/IPG_ajax/receive.php", true);

xhr.onreadystatechange = function(e) {

    if(this.readyState === 4 && this.status >= 200 && this.status < 300) {
        console.log(this.response);
    }

};

xhr.onprogress = function(e) {

    if(e.lengthComputable) {
        var percent = (e.loaded / e.total) * 100;

//        console.log(percent); 100
        downloadProgress.value = percent;
    }

};

xhr.upload.onprogress = function(e) {

    if(e.lengthComputable) {
        var percent = (e.loaded / e.total) * 100;

//        console.log(percent); 100
        uploadProgress.value = percent;
    }

};

data.append("firstName", "Jan");
data.append("lastName", "Nowak");

xhr.send(data);