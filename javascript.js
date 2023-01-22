var names = document.getElementById('name');
var description = document.getElementById('description');
var price = document.getElementById('price');
var image = document.getElementById('img');

var idThin = document.getElementById('thin');
var idMedium = document.getElementById('medium');
var idThick = document.getElementById('Thick');

var descriptionThin = "Um modelo clássico e elegante. Tecido de algodão e renda com 3,0cm de largura. Acompanha um porta véu com fita de cetim e detalhe em renda.";
var descriptionMedium = "Um modelo delicado e charmoso. Tecido de algodão e rende com 3,0 cm de largura. Acompanha um porta véu com fita de cetim e detalhe em renda."; 
var descriptionThick = "Modelo floral e romântico. Tecido de algodão e renda com 5,2cm de largura. Acompanha um porta véu com fita de cetim e detalhe em renda";

function thin() {
    if (description.innerHTML === descriptionMedium || description.innerHTML === descriptionThick) {
        names.innerHTML = "Renda Fina";
        description.innerHTML = descriptionThin;
        price.innerHTML = "R$ 60,00";
        image.src = "image/thin-veil.jpeg";
    }
}

function medium() {
    if (description.innerHTML === descriptionThin || description.innerHTML === descriptionThick) {
        names.innerHTML = "Renda Média";
        description.innerHTML = descriptionMedium;
        price.innerHTML = "R$ 65,00";
        image.src = "image/medium-veil.jpeg";
    }
}

function thick() {
    if (description.innerHTML === descriptionThin || description.innerHTML === descriptionMedium) {
        names.innerHTML = "Renda Larga";
        description.innerHTML = descriptionThick;
        price.innerHTML = "R$ 78,00";
        image.src = "image/thick-veil.jpeg";
    }
}