var names = document.getElementById('name');
var description = document.getElementById('description');
var price = document.getElementById('price');
var image = document.getElementById('img');

var idEmily = document.getElementById('emily');
var idBianca = document.getElementById('bianca');
var idsophie = document.getElementById('sophie');
var idsophie = document.getElementById('alanis;')
var idsophie = document.getElementById('ana');

var descriptionEmily = "Um modelo clássico e elegante. Tecido de algodão e renda com 3,0cm de largura. Acompanha um porta véu com fita de cetim e detalhe em renda.";
var descriptionBianca = "Um modelo delicado e charmoso. Tecido de algodão e renda com 3,0 cm de largura. Acompanha um porta véu com fita de cetim e detalhe em renda."; 
var descriptionSophie = "Modelo floral e romântico. Tecido de algodão e renda com 5,2cm de largura. Acompanha um porta véu com fita de cetim e detalhe em renda.";
var descriptionAlanis = "Tecido de algodão e renda com 8cm de largura. Acompanha um porta véu com fita de cetim e detalhe em renda.";
var descriptionAna = "Tecido de algodão e renda com 5,8cm de largura. Acompanha um porta véu com fita de cetim e detalhe em renda.";

function emily() {
    if (description.innerHTML === descriptionBianca || description.innerHTML === descriptionSophie || description.innerHTML === descriptionAlanis || description.innerHTML === descriptionAna) {
        names.innerHTML = "Véu Emily";
        description.innerHTML = descriptionEmily;
        price.innerHTML = "R$ 60,00";
        image.src = "image/emily-veil.jpeg";
    }
}

function bianca() {
    if (description.innerHTML === descriptionEmily || description.innerHTML === descriptionSophie || description.innerHTML === descriptionAlanis || description.innerHTML === descriptionAna) {
        names.innerHTML = "Véu Bianca";
        description.innerHTML = descriptionBianca;
        price.innerHTML = "R$ 65,00";
        image.src = "image/bianca-veil.jpeg";
    }
}

function sophie() {
    if (description.innerHTML === descriptionEmily || description.innerHTML === descriptionBianca || description.innerHTML === descriptionAlanis || description.innerHTML === descriptionAna) {
        names.innerHTML = "Véu Sophie";
        description.innerHTML = descriptionSophie;
        price.innerHTML = "R$ 78,00";
        image.src = "image/sophie-veil.jpeg";
    }
}

function alanis() {
    if (description.innerHTML === descriptionEmily || description.innerHTML === descriptionBianca || description.innerHTML === descriptionSophie || description.innerHTML === descriptionAna) {
        names.innerHTML = "Véu Alanis";
        description.innerHTML = descriptionAlanis;
        price.innerHTML = "R$ 66,00";
        image.src = "image/alanis-veil.jpeg";
    }
}

function ana() {
    if (description.innerHTML === descriptionEmily || description.innerHTML === descriptionBianca || description.innerHTML === descriptionSophie || description.innerHTML === descriptionAlanis) {
        names.innerHTML = "Véu Ana";
        description.innerHTML = descriptionAna;
        price.innerHTML = "R$ 72,00";
        image.src = "image/ana-veil.jpeg";
    }
}