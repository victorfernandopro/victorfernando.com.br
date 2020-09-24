//Script para alterar cor do background e alguns estilos do botão ao passar o mouse

const body = document.querySelector('body');
const whats = document.querySelector('.button-whatsapp');
const insta = document.querySelector('.button-instagram');
const face = document.querySelector('.button-facebook');
const git = document.querySelector('.button-github');

whats.onmouseover = function() {
    body.style.backgroundColor = '#14ad00';
    whats.style.color = 'white';
    whats.style.border = '1px solid white'
    whats.onmouseout = function() {
        body.style.backgroundColor = 'white';
        whats.style.color = 'black';
        whats.style.border = '1px solid #eaeaea';
    }
};

insta.onmouseover = function() {
    body.style.backgroundColor = '#ff1981';
    insta.style.color = 'white';
    insta.style.border = '1px solid white'
    insta.onmouseout = function() {
        body.style.backgroundColor = 'white';
        insta.style.color = 'black';
        insta.style.border = '1px solid #eaeaea';
    }
};

face.onmouseover = function() {
    body.style.backgroundColor = '#006add';
    face.style.color = 'white';
    face.style.border = '1px solid white'
    face.onmouseout = function() {
        body.style.backgroundColor = 'white';
        face.style.color = 'black';
        face.style.border = '1px solid #eaeaea';
    }
};

git.onmouseover = function() {
    body.style.backgroundColor = '#5c5e61';
    git.style.color = 'white';
    git.style.border = '1px solid white'
    git.onmouseout = function() {
        body.style.backgroundColor = 'white';
        git.style.color = 'black';
        git.style.border = '1px solid #eaeaea';
    }
};