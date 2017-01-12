var xhr = new XMLHttpRequest();

//console.log (xhr.readyState); // 0

xhr.open("GET", "http://ignet.pc.pl/IPG_ajax/test.html", true); // true = asynchronic; extra parameteres possible

// xhr.open("GET", "http://ignet.pc.pl/IPG_ajax/test.html", false); // synchronous

//console.log (xhr.readyState); // 1

xhr.onreadystatechange = function(e) {
    
//    console.log(this.status);
    
    if(this.readyState === 4 && this.status === 200) {
        console.log(this.response);
    }
    
};

function logType(e) {
    console.log(e.type);
}

//xhr.timeout = 1; // miliseconds

// types:

xhr.onloadstart = logType; // ok
xhr.onprogress = logType; // ok
xhr.onabort = logType; // wrong
xhr.onerror = logType; // wrong
xhr.onload = logType; // ok
xhr.ontimeout = logType; // wrong
xhr.onloadend = logType; // ok

xhr.send(null); // finish sending, if done; enable "Log XMLHttpRequest" in Chrome Developer Tools

//xhr.abort();

//console.log (xhr.readyState); // 4

//console.log(xhr.response);

// UNSENT = 0
// OPENED = 1
// HEADERS_RECEIVED = 2
// LOADING = 3
// DONE = 4