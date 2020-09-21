const body = document.querySelector('body')
const darkMode = document.querySelector('#switch-shadow');
const texto = document.querySelector('.botao')
const header = document.querySelector('.header')

darkMode.addEventListener('change', function() {
    if(this.checked) {
        darkTheme()
    } else {
        lightTheme();
    }
});

function darkTheme() {
    body.style.backgroundColor = "#000";
    texto.style.color = "#fff";
    header.style.backgroundColor = "#fff";
}

function lightTheme() {
    body.style.backgroundColor = "#fff";
    texto.style.color = "#000";
    header.style.backgroundColor = "#000";
}