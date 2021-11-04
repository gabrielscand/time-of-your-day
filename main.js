function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${min}`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'solpng.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE 
        img.src = 'pordosolpng.png'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE
        img.src = 'luapng.png'
        document.body.style.background = '#515154'
    }
}

