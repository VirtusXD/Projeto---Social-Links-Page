const simpleCardBtn = document.querySelector('.simple-card-btn')
const socialCardBtn = document.querySelector('.social-card-btn')

const modal = document.querySelector('dialog')
const closeModal = document.querySelector('.return-modal')
const openModal = document.querySelector('.delivery-section')

function Hidden(){
    document.querySelectorAll('.section-card').forEach(el =>{
        el.classList.add('hidden')
    })
}

simpleCardBtn.addEventListener('click', ()=>{
    document.querySelector('html').setAttribute('data-contexto','simple-card')
    Hidden()
    document.querySelector('.simple-card').classList.remove('hidden')
})

socialCardBtn.addEventListener('click', ()=>{
    document.querySelector('html').setAttribute('data-contexto','social-card')
    Hidden()
    document.querySelector('.social-card').classList.remove('hidden')
})


openModal.addEventListener('click', ()=>{
    modal.showModal();
})

closeModal.addEventListener('click', ()=>{
    modal.close();
})