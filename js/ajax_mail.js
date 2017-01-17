(function() {
    
    var mailForm = document.querySelector("#mailForm");
    var mailMessage = document.querySelector("#mailMessage");
    
    function showMessage(type, msg) {
        
        mailMessage.className = type;
        mailMessage.innerHTML = msg;
        
    }
    
    // showMessage("success", "Wiadomość wysłano");
    // showMessage("error", "Błąd");
    
    function sendMail(e) {
        
        e.preventDefault();
        
        var mailFields = mailForm.querySelectorAll("input, textarea");
        var mailData = {};
        
        [].forEach.call(mailFields, function(field) {
            
            // console.log(field); // show input & textarea
            mailData[field.name] = field.value;
            
        });
        
        // console.log(mailData); // show Object: your-name, your-email, your-message
        AJAX({
            type: mailForm.getAttribute("method"),
            url: mailForm.getAttribute("action"),
            data: mailData,
            success: function (response, xhr) {
                // console.log(response); // "Wiadomość została wysłana poprawnie"
                var mailResponse = JSON.parse(response);
                // console.log(mailResponse); // show JSON from server
                if(Array.isArray(mailResponse)) {
                    showMessage("error", mailResponse.join("<br>"));
                } else if ("error" in mailResponse) {
                    showMessage("error", mailResponse.error);
                } else if ("success" in mailResponse) {
                    showMessage("success", mailResponse.success);
                    mailForm.removeEventListener("submit", sendMail, false);
                    mailForm.querySelector("button").setAttribute("disabled", "disabled"); // disable button after submit
                }
            }
            
        });
        
    }
    
    mailForm.addEventListener("submit", sendMail, false);
    
})();