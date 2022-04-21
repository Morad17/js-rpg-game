const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')
console.log(collisions)

canvas.width = 1024
canvas.height = 576

const collisionsMap = []
for (let i = 0; i< collisions.length; i+= 70){
    collisionsMap.push(collisions.slice(i, 70 + i))
}

c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = './img/rpgTown.png'

let x = -740
let y = -600


const playerImage = new Image()
playerImage.src = './img/playerDown.png'

class Sprite {
    constructor({position,velocity, image}) {
        this.position = position
        this.image = image
    }
    draw() {
        c.drawImage(this.image, this.position.x , this.position.y)
    }
}

const background = new Sprite({
    position: {
    x:-740, y:-600
    },
    image: image
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
}

animate = () => {
    window.requestAnimationFrame(animate)
    background.draw()
    c.drawImage(
        playerImage,
        // Cropped Image //
        0,
        0,
        playerImage.width /4,
        playerImage.height,
        // Actual Image Position //
        canvas.width/2 - playerImage.width / 8, 
        canvas.height/2 - playerImage.height / 2,
        playerImage.width /4,
        playerImage.height,
        )
        if (keys.w.pressed && lastKey === 'w') background.position.y += 3
        else if (keys.a.pressed && lastKey === 'a') background.position.x +=3
        else if (keys.s.pressed && lastKey === 's') background.position.y -= 3
        else if (keys.d.pressed && lastKey === 'd') background.position.x -=3
}
animate()

let lastKey = ''
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
            lastKey = 'w'
            break
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            break
        case 's':
            keys.s.pressed = true
            lastKey = 's'
            break
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
            break
    }
})

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
    }
})
