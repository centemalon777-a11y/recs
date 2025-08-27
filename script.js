// Add event listener to book a table button
document.querySelector('button').addEventListener('click', () => {
    alert('Table booked!');
});

// Add event listener to send message button
document.querySelector('form button').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Message sent!');
});