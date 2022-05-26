const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.speed = 0
        this.gravity = 1
        this.width = 30
        this.height = 30
    }

    draw() {
        console.log(this.position.x)
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {

    }
}

const player = new Player()
player.draw()