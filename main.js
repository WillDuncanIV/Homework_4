const backgroundSelect = document.querySelector('#background-select');

backgroundSelect.addEventListener('change', function() {
    const selectedOption = backgroundSelect.options[backgroundSelect.selectedIndex];
    const selectedValue = selectedOption.value;
    const body = document.querySelector('body');

    if (selectedValue === 'light-blue') {
        body.style.backgroundImage = 'url(lightblue.jpg)';
    } else if (selectedValue === 'light-gold') {
        body.style.backgroundImage = 'url(lightgold.jpg)';
    }
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('service-worker.js').then(function(registration) {
            console.log('Service worker registered with scope:', registration.scope);
        }, function(error) {
            console.log('Service worker registration failed:', error);
        });
    });
}
