const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillStyle='white'
c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = './img/rpgGameMap.png'


image.onLoad = () => {
  c.drawImage(image,0 ,0)  
}

console.log(image)