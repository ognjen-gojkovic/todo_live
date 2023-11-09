import React from "react";
import styled from "styled-components";
import Todos from "./components/todos/Todos";
import { GlobalStyles } from "./utils/GlobalStyle";

const App = () => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    let canvasBody = canvasRef.current;

    let w;
    let h;
    let particles = [];

    const opts = {
      particleColor: "#0f0038",
      lineColor: "#3b3b3b",
      particleAmount: 30,
      defaultSpeed: 0.2,
      variantSpeed: 0.1,
      defaultRadius: 50,
      variantRadius: 20,
      linkRadius: 200,
    };
    let drawArea = canvasBody.getContext("2d");
    let delay = 200,
      tid,
      rgb = opts.lineColor.match(/\d+/g);

    let resizeReset = function () {
      // added + 10px because of blur effect on right side of the screen, so with this 10px width of
      // canvas is bigger then screen, and additionally is taken care of with overflow-x: hidden on parent component
      w = canvasBody.width = window.innerWidth + 10;
      h = canvasBody.height = window.innerHeight;
    };

    window.addEventListener("resize", function () {
      deBouncer();
    });

    let deBouncer = function () {
      clearTimeout(tid);
      tid = setTimeout(function () {
        resizeReset();
      }, delay);
    };

    const Particle = function (xPos, yPos) {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed;
      this.directionAngle = Math.floor(Math.random() * 360);
      this.color = opts.particleColor;
      this.radius = opts.defaultRadius + Math.random() * opts.variantRadius;
      this.vector = {
        x: Math.cos(this.directionAngle) * this.speed,
        y: Math.sin(this.directionAngle) * this.speed,
      };
      this.update = function () {
        this.border();
        this.x += this.vector.x;
        this.y += this.vector.y;
      };
      this.border = function () {
        if (this.x >= w || this.x <= 0) {
          this.vector.x *= -1;
        }
        if (this.y >= h || this.y <= 0) {
          this.vector.y *= -1;
        }
        if (this.x > w) this.x = w;
        if (this.y > h) this.y = h;
        if (this.x < 0) this.x = 0;
        if (this.y < 0) this.y = 0;
      };
      this.draw = function () {
        drawArea.beginPath();
        drawArea.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        drawArea.closePath();
        drawArea.fillStyle = this.color;
        drawArea.fill();
      };
    };

    function setup() {
      particles = [];
      resizeReset();
      for (let i = 0; i < opts.particleAmount; i++) {
        particles.push(new Particle());
      }
      window.requestAnimationFrame(loop);
    }

    function loop() {
      window.requestAnimationFrame(loop);
      drawArea.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
    }
    resizeReset();
    setup();
  }, []);

  return (
    <AppStyled>
      <GlobalStyles />
      <canvas ref={canvasRef} id="canvas"></canvas>
      <Todos />
    </AppStyled>
  );
};

const AppStyled = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  canvas {
    background: linear-gradient(
      135deg,
      var(--border) 0% 20%,
      var(--background) 45%,
      var(--contentBg) 100%
    );
  }

  overflow-x: hidden;
`;

export default App;
