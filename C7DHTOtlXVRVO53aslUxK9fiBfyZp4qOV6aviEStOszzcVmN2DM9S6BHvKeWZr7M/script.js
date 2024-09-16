document
  .querySelector('a[href="#footer"]')
  .addEventListener("click", function (e) {
    e.preventDefault(); // 阻止默认锚点跳转行为
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }); // 滚动到页面底部
  });


document.addEventListener("DOMContentLoaded", function () {
  const quoteButton = document.getElementById("quote-button");
  const article = document.querySelector("article");
  const headerBar = document.querySelector(".header-bar"); // 获取标题栏元素
  const video = document.getElementById("background-video"); // 获取视频元素

  // Initially hide the quote button, article, and header bar
  quoteButton.style.display = "none";



  // Function to show the quote button and later reveal the article and header bar
  function showQuote() {
    quoteButton.style.display = "block";
    quoteButton.style.opacity = "0";
    quoteButton.style.transition = "opacity 4s";
    quoteButton.style.opacity = "0.8";

    setTimeout(function () {
      quoteButton.style.opacity = "0";
      quoteButton.style.transition = "opacity 2s"; // Faster fade out
      setTimeout(function () {
        quoteButton.style.display = "none";
        showArticleAndHeader(); // Show the article and header bar after the quote button fades out
      }, 1500); // Wait for the faster fade out before hiding the button
    }, 2200); // Wait for 3 seconds before starting to fade out
  }

  // Function to show the article and header bar with a fade-in effect and removing blur
  function showArticleAndHeader() {
    article.style.display = "block";
    article.style.transition = "opacity 2s, filter 2s";
    video.style.filter = 'blur(10px)'; // Video gradually becomes blurry
    video.style.transition = 'filter 2s'; // Smooth transition for video blur
    setTimeout(() => {
      article.style.filter = 'blur(0)'; // Gradually remove blur from the article
      article.style.opacity = "1"; // Gradually show article
    }, 1000); // Start removing blur and showing article after 1 second
  } 

  // Detect any user interaction
  function handleUserInteraction() {
    setTimeout(showQuote, 2000); // Wait for 3 seconds before showing the quote
    document.removeEventListener("click", handleUserInteraction);
    document.removeEventListener("touchend", handleUserInteraction);
  }

  document.addEventListener("click", handleUserInteraction);
  document.addEventListener("touchend", handleUserInteraction);
});

document.addEventListener("click", function () {
  let video = document.getElementById("background-video");
  if (video.paused) {
    video.play();
    video.style.opacity = "1";
    video.muted = false;
  }
});



const canvas = document.createElement('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth * 2
canvas.height = innerHeight * 2
canvas.style.width = innerWidth + 'px'
canvas.style.height = innerHeight + 'px'
document.body.append(canvas)
canvas.style.filter = `contrast(1.3) sharpen(2)`

class Quad {
  constructor() {
    this.xs = []
    this.ys = []

    this.dxs = []
    this.dys = []
    this.rad = 50 + Math.random() * 100
    this.a = 0
    this.da = 1
    this.x = Math.random() * (canvas.width + 100)
    this.dx = Math.random() * (canvas.width + 100)

    this.y = Math.random() * (canvas.height + 100)
    this.dy = Math.random() * (canvas.height + 100)
    this.calc(this.xs, this.ys)
    this.calc(this.dxs, this.dys)
    this.c = Math.random() * 255
    if (Math.random() < .3) this.c = 255

    this.state = 'start'
    this.timeO = Math.random()
    if (Math.random() < .2) this.timeO *= -1

    this.ddamp = 40 + Math.random() * Math.random() * 40
  }
  calc(xs, ys) {
    let t = Math.random() * 7
    for (let i = 0; i < 4; i++) {
      t += Math.random() * 2;
      let x = Math.cos(t) * this.rad
      let y = Math.sin(t) * this.rad
      xs[i] = x
      ys[i] = y
    }
  }

  draw() {
    this.a += (this.da - this.a) / 100
    if (this.a > .9 && !this.rebuilding) {
      this.rebuilding = true;
      setTimeout(() => {
        this.a = 0
        this.x = Math.random() * (canvas.width + 100)
        this.y = Math.random() * (canvas.height + 100)

        this.rebuilding = false
      }, Math.random() * 2000)
    }
    c.fillStyle = `rgba(${this.c}, ${this.c}, ${this.c}, ${this.a})`
    c.beginPath()
    this.x += (this.dx - this.x) / 90

    if (Math.random() < .01) this.calc(this.dxs, this.dys)
    for (let i = 0; i < this.xs.length; i++) {
      this.xs[i] += (this.dxs[i] - this.xs[i]) / this.ddamp
      this.ys[i] += (this.dys[i] - this.ys[i]) / this.ddamp
      const method = i === 0 ? 'moveTo' : 'lineTo'
      c[method](this.x + this.xs[i], this.y + this.ys[i] + time * this
        .timeO)
    }
    c.fill()
  }
}

let qs = []
let NUM = 40
for (let i = 0; i < NUM; i++) {
  setTimeout(() => qs.push(new Quad()), Math.random() * 2000)
}


let xo = 0,
  yo = 0,
  xdo = 0,
  ydo = 0

let time = 0

onresize = e => {
  canvas.width = innerWidth * 2
  canvas.height = innerHeight * 2
  canvas.style.width = innerWidth + 'px'
  canvas.style.height = innerHeight + 'px'
}
onresize()

function loop() {

  c.globalAlpha = 1
  if (Math.random() < 0.003) {

    c.clearRect(0, 0, canvas.width, canvas.height)
  }

  for (let j = 0; j < 6; j++) {
    for (let i = 0; i < qs.length; i++) {
      qs[i].draw()
    }
  }
  time += 10
  if (time > canvas.height * 2) time = 0
  c.globalAlpha = .5

  xo += (xdo - xo) / 22
  yo += (ydo - yo) / 22
  if (Math.random() < Math.random()) xdo = Math.random() * 50 - 25
  if (Math.random() < Math.random()) ydo = Math.random() * 50 - 25

  c.globalAlpha = .5
  c.drawImage(canvas, xo, yo)
  c.globalAlpha = .05
  c.drawImage(canvas, 0, Math.random() * 200 - 100)

  c.globalAlpha = .05
  c.globalCompositeOperation = 'color-burn'
  c.drawImage(canvas, 2, 1)
  c.globalCompositeOperation = 'source-over'
  c.globalAlpha = 1


  requestAnimationFrame(loop)
}
loop()
