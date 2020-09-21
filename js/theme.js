const body = document.querySelector('body')
const toggleButton = document.querySelector('.check');
const texto = document.querySelector('.button')

toggleButton.addEventListener('change', function() {
    if(this.checked) {
        darkTheme()
    } else {
        lightTheme();
    }
});

function darkTheme() {
    body.style.backgroundColor = "#000";
    texto.style.color = "#fff";
}

function lightTheme() {
    body.style.backgroundColor = "#fff";
    texto.style.color = "#000";
}

