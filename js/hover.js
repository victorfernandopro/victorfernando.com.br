//Script para mostrar o ícone do app ao passar o mouse

const whatsapp = document.querySelector('.button-whatsapp');
const instagram = document.querySelector('.button-instagram');
const facebook = document.querySelector('.button-facebook');
const github = document.querySelector('.button-github');
const button = document.querySelector('.button');

whatsapp.onmouseover = function() {
    whatsapp.style.width = '30px';
    whatsapp.style.width = '30px';
};

button.onmouseout = function() {
    button.style.width = '0px';
};