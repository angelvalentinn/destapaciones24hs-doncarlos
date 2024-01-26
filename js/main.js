const ask = document.querySelectorAll('.asktowhatsapp');
const tels = document.querySelectorAll('.call-tel');
const arrowUp = document.querySelector('.arrow-up');

tels.forEach(e => {
    e.addEventListener('click', e => {
        window.location.href = 'tel:' + e.currentTarget.textContent.split('').filter(e => e != "-").join("");
    })
})

ask.forEach(elem => {
    
    elem.addEventListener('click', e =>  {
        askToWhatsapp(e.currentTarget.textContent.split('').filter(e => e != "-").join("") === '' ? 1154906707 : e.currentTarget.textContent.split('').filter(e => e != "-").join(""))
        console.log(e.currentTarget.textContent.split('').filter(e => e != "-").join(""));
    })
})

const askToWhatsapp = cel => {
    const link = `https://wa.me/${cel}?text=Hola, estoy interesado en el servicio de destapaciones.`;
    window.open(link, "_blank");
}

arrowUp.addEventListener('click', () => window.scrollTo(0,0) )