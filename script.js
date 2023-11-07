document.addEventListener('DOMContentLoaded', (event) => {
    // Get the buttons by their class name
    const bookCallButton = document.querySelector('.book-call');
    const myWorkButton = document.querySelector('.my-work');

    // Function to scroll to a section
    function scrollToSection(selector) {
        const section = document.querySelector(selector);
        if(section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Event listener for 'Book a Call' button
    bookCallButton.addEventListener('click', () => {
        scrollToSection('#book-call-section');
    });

    // Event listener for 'My Work' button
    myWorkButton.addEventListener('click', () => {
        scrollToSection('#my-work-section');
    });
});
