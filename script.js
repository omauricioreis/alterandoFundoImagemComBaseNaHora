
function carregar(){
const msg = document.querySelector('div#msg')
const img = document.querySelector('img#imagem')
const data = new Date()
const hora = data.getHours()

msg.innerHTML = `Agora são <strong>${hora}horas</strong>`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}

