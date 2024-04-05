
emailjs.init('xyXCpcNuNrlWqRojS')

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm('service_etbx9qq','template_p35qp2x',this)
    .then(function(response) {
        console.log('Email Sent Successfully', response);
        alert('Your message has been sent!');
        window.location.href= 'index.html';
    }, function(error) {
        console.log('Email Failed', error);
        alert('Oops! Something went wrong. Please try again later.');        
    });
});