const topButton = document.querySelector('#button-top')
const downButton = document.querySelector('#button-down')
const leftButton = document.querySelector('#button-left')
const rightButton = document.querySelector('#button-right')
const player = document.querySelector('#player')
const playground = document.querySelector('#playground')
const coin = document.querySelector('.coin')
let text = document.querySelector('.text')
const coinCount = document.querySelector('#coin-count')
let collectedCoins = 0
player.style.left = '0px'
player.style.top = '0px'
coin.style.left = '0px'
coin.style.top = '0px'

rightButton.addEventListener('click', () => {
    text.innerHTML = 'мяу'
        if(+player.style.left != playground.clientWidth - player.clientWidth){
            if(player.style.left !== '380px'){
                let newValue = +player.style.left.split('px')[0] + 20
                player.style.left = `${newValue}px`
                console.log('мяу')
            }else{
                text.innerHTML = 'стоять!!' 
            }
}})

leftButton.addEventListener('click', () => {
        text.innerHTML = 'мяу'
        if(+player.style.left != playground.clientWidth - player.clientWidth){
            if(player.style.left !== '0px'){
                let newValue = +player.style.left.split('px')[0] - 20
                player.style.left = `${newValue}px`
            }else{
                text.innerHTML = 'стоять!!'
            }
        }
})

topButton.addEventListener('click', () => {
    text.innerHTML = 'мяу'
    if(+player.style.top != playground.clientHeight - player.clientHeight){
        if(player.style.top !== '0px'){
            let newValue = +player.style.top.split('px')[0] - 20
            player.style.top = `${newValue}px`
            console.log('мяу')
        }else{
            text.innerHTML = 'стоять!!'
        }
}})

downButton.addEventListener('click', () => {
    text.innerHTML = 'мяу'
    if(+player.style.top != playground.clientHeight - player.clientHeight){
        if(player.style.top !== '380px'){
            let newValue = +player.style.top.split('px')[0] + 20
            player.style.top = `${newValue}px`
            console.log('мяу')
        }else{
            text.innerHTML = 'стоять!!'
        }
}})

function moveCoin() {
    const positions = []
    const maxX = playground.clientWidth - coin.offsetWidth
    const maxY = playground.clientHeight - coin.offsetHeight

    for (let x = 0; x <= maxX; x += 20) {
        for (let y = 0; y <= maxY; y += 20) {
            if (x !== player.offsetLeft || y !== player.offsetTop) {
                positions.push({ x, y })
            }
        }
    }

    const position = positions[Math.floor(Math.random() * positions.length)]
    coin.style.left = `${position.x}px`
    coin.style.top = `${position.y}px`
}

function collectCoinIfTouched() {
    if (player.offsetLeft !== coin.offsetLeft || player.offsetTop !== coin.offsetTop) {
        return
    }

    collectedCoins += 1
    coinCount.textContent = collectedCoins
    moveCoin()
}

[topButton, downButton, leftButton, rightButton].forEach(button => {
    button.addEventListener('click', collectCoinIfTouched)
})

moveCoin()


function playCatSound() {
    const audio = document.getElementById('cat-sound');
    audio.currentTime = 0;
    audio.play();
}