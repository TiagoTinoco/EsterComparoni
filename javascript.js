let veilsListDiv = document.getElementsByClassName('list')[0];

var names = document.getElementById('name');
var description = document.getElementById('description');
var price = document.getElementById('price');
var image = document.getElementById('img');

function fillList(){
    VEILS.forEach((veilObject, index) => {
        let veilCardHTML = 
        `<a class="list-item" href="#img">
            <div onclick="onSelectVeil(${index})" class="thickness">
                <img src="${veilObject.image}" alt="Véu">
                <h2>${veilObject.name}</h2>
            </div>
        </a>`;
        veilsListDiv.innerHTML += veilCardHTML;
    });
}

function onSelectVeil(index){
    let veilsCard = document.getElementsByClassName('thickness')[index];
    // TODO:(TiagoTinoco) resolve this problem!
    // veilsCard.classList.add('selected');
    // veilsCard.classList.remove('selected');

    names.innerHTML = VEILS[index].name;
    description.innerHTML = VEILS[index].description;
    price.innerHTML = VEILS[index].price.toFixed(2);
    image.src = VEILS[index].image;
}

document.addEventListener("DOMContentLoaded", fillList);