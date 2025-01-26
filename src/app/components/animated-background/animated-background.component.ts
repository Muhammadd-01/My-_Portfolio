import { Component, type OnInit, type ElementRef, type Renderer2 } from "@angular/core"

@Component({
  selector: "app-animated-background",
  template: `<canvas #canvas></canvas>`,
  styles: [
    `
    canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  `,
  ],
})
export class AnimatedBackgroundComponent implements OnInit {
  @ViewChild("canvas", { static: true }) canvasRef: ElementRef<HTMLCanvasElement>

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const canvas = this.canvasRef.nativeElement
    const ctx = canvas.getContext("2d")

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.size > 0.2) this.size -= 0.1
      }

      draw() {
        ctx.fillStyle = "rgba(0, 26, 51, 0.2)"
        ctx.strokeStyle = "rgba(0, 26, 51, 0.2)"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
        ctx.stroke()
      }
    }

    function init() {
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        if (particles[i].size <= 0.2) {
          particles.splice(i, 1)
          i--
          particles.push(new Particle())
        }
      }
      requestAnimationFrame(animate)
    }

    init()
    animate()

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    })
  }
}

