function sendMail(params){
    var tempParams = {
        from_name: document.getElementById("sender").value,
        to_name: document.getElementById("receiver").value,
        message: document.getElementById("message").value
    };

    emailjs.send('service_5ua2d1s', 'template_slmauav', tempParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}
