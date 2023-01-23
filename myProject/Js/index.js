// Toggle Mode
const checkbox = document.getElementById('checkbox');

// Add event listener
checkbox.addEventListener('change', () => {
// Change theme
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');

});