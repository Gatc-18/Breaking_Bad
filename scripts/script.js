import { ShowCard } from "../modules/showCard.js";
let contCards = document.getElementById('container');
let containerModal = document.querySelector('.modal-content');
let data;


document.addEventListener('DOMContentLoaded', async () => {
    fetch('https://www.breakingbadapi.com/api/characters')
        .then(res => res.json())
        .then(casita => {
            ShowCard(casita, contCards)
            data = casita
        })
        .catch(() => alert("Hubo un error"))


});


document.addEventListener('click', ({ target }) => {

    if (target.classList.contains('btn')) {
        let id = target.id;
        let personaje = data.find(item => item.char_id == id);

        containerModal.innerHTML = `
        <div class="modal-header">
             <h5 class="modal-title" id="exampleModalLabel">${personaje.nickname}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body d-flex justify-content-evenly">
            <img  height="350px" src=${personaje.img}>
        </div>
        `
    }
})




