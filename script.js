let milisec = 0
let sec = 0 
let min = 0
let hour = 0
let pos = 0
let indextime = 1
let interval;
let val = []

let txtmilisec = window.document.getElementById('milisec')
let txtsec = window.document.getElementById('sec')
let txtmin = window.document.getElementById('min')
let txthour = window.document.getElementById('hour')
let btnstart = window.document.getElementById('btniniciar')
let btnpause = window.document.getElementById('btnpausar')
let btnreset = window.document.getElementById('btnresetar')
let btnstorage = window.document.getElementById('btnguardar')
let btnclear = window.document.getElementById('btnlimpar')
let tab = window.document.getElementById('seltimes')

btnclear.style.visibility = 'hidden'

//adiciona 0 na frente dos números caso forem menor do que 10
function twoDigits(digits) {
    if(digits < 10){
        return ('0' + digits)
    }
    else {
        return (digits)
    }
}

//Inicia o cronômetro
function start() {
    interval = setInterval(timer, 10)//dispara a função timer a cada 10 milissegundos
    
    btnstart.disabled = true
    btnstart.value = 'Iniciar'
    btnpause.disabled = false
    btnreset.disabled = true
    btnstorage.disabled = false
}

//pausa o cronômetro
function pause() {
    clearInterval(interval)
    btnstart.disabled = false
    btnstart.value = 'Retomar'
    btnpause.disabled = true
    btnreset.disabled = false
}

//reseta o cronômetro
function reset() {
    btnstart.value = 'Iniciar'
    btnreset.disabled = true
    btnstorage.disabled = true

    milisec = 0
    sec = 0
    min = 0
    hour = 0

    txtmilisec.innerText = '00'
    txtsec.innerText = '00'
    txtmin.innerText = '00'
    txthour.innerText = '00'
}

//Contador do tempo
function timer() {
    milisec++
    if(milisec == 100){
        sec++
        milisec = 0
    }
    if(sec == 60){
        min++
        sec = 0
    }
    if(min == 60){
        hour++
        min = 0
    }

    //imprimindo o tempo na tela
    txtmilisec.innerText = twoDigits(milisec)
    txtsec.innerText = twoDigits(sec)
    txtmin.innerText = twoDigits(min)
    txthour.innerText = twoDigits(hour)
    
}


function storage() { 
    //salva os tempos em objetos dentro de um array
    val.push({'Hora':hour, 'Minutos':min, 'Segundos':sec, 'Milissegundos':milisec})
    console.log(val)
    
    let item = document.createElement('option')
    item.text = `${indextime}# ${twoDigits(val[pos].Hora)}:${twoDigits(val[pos].Minutos)}:${twoDigits(val[pos].Segundos)}:${twoDigits(val[pos].Milissegundos)}`
    tab.appendChild(item)
    
    item.disabled = true
    item.style.color = 'white'
    btnclear.style.visibility = 'visible'
    btnclear.disabled = false

    pos++
    indextime++
}

function clean() {
    val = []
    pos = 0
    indextime = 1
    tab.innerText = ''
    btnclear.style.visibility = 'hidden'

    console.log(val)
}