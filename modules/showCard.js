export const ShowCard = (arr, cont) => {

    arr.forEach(element => {


        const { name: nameU, img: avatar, char_id:id } = element;
        if(avatar){
            cont.innerHTML += `
            <div class="card my-3" style="width: 18rem;">
            <img height="350px" src=${avatar}
                class="card-img-top" alt="Hola">
            <div class="card-body">
                <a href="#" id=${id} data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn d-block  btn-outline-success">${nameU}</a>
            </div>
        </div>
            `
        }

    });

}