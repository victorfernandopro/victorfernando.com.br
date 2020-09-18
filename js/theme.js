const body = document.querySelector('body')
const darkMode = document.querySelector('#switch-shadow');

darkMode.addEventListener('change', function() {
    if(this.checked) {
        darkTheme()
    } else {
        lightTheme();
    }
});

function darkTheme() {
    body.style.backgroundColor = "#000"
}

function lightTheme() {
    body.style.backgroundColor = "#fff"
}