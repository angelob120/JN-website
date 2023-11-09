const serviceID = 'service_dburs96';
const templateID = 'template_ztl1ney';

// Listen for the form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Change the text of the submit button to indicate progress
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.value = 'Sending...';

    // Send the form data using EmailJS
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Sent!');
            submitBtn.value = 'Send Email';
            // Clear the form fields
            this.reset();
        }, (err) => {
            alert('Failed to send the email: ' + JSON.stringify(err));
            submitBtn.value = 'Send Email';
        });
});
