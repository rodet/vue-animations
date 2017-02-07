<template>
  <div class='circles'>
    <h1 class='h1'>{{ title }}</h1>
    <canvas class='canvas'>
    </canvas>
    <div>{{ Math.floor(vari) }}</div>
  </div>
</template>

<script>
export default {
  name: 'circles',
  data() {
    return {
      title: 'Animated number visualization',
      value: 42,
      vari: 0,
    };
  },
  methods: {
    drawInnerCircle(canvas, width, height, start, len = 10, freq = 18, color = '#abb2b6') {
      // console.log(canvas);
      let angle = this.vari * (Math.PI / freq);
      const end = start + len;

      const ctx = canvas.getContext('2d');
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = color;
      ctx.fillStyle = color;

      while (angle < (Math.PI * 2)) {
        /* TODO Replace the sin and cos with ctx.rotate */
        ctx.moveTo((start * Math.cos(angle)) + (width / 2),
                   (start * Math.sin(angle)) + (height / 2));
        ctx.lineTo((end * Math.cos(angle)) + (width / 2),
                   (end * Math.sin(angle)) + (height / 2));
        ctx.stroke();
        angle += Math.PI / freq;
      }
    },
    displayLoop() {
      // Redraw text
      const canvas = document.querySelectorAll('.canvas')[0];
      /* Refit the canvas size to its real size */
      const width = canvas.width = canvas.clientWidth;
      const height = canvas.height = canvas.clientHeight;

      const ctx = canvas.getContext('2d');
      // Ensure to start on a clean basis
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw hallow
      // ctx.shadowBlur = 10;
      // ctx.shadowColor = '#ccc';
      // ctx.beginPath();
      // const grd = ctx.createRadialGradient(
      //   (width / 2), (height / 2), 50, (width / 2), (width / 2), 0);
      // grd.addColorStop(0, 'rgba(80, 80, 80, 0.5)');
      // grd.addColorStop(1, 'rgba(180, 180, 180, 0.5)');
      // ctx.arc((width / 2), (height / 2), 50, 0, 2 * Math.PI);
      // ctx.fillStroke = grd;
      // ctx.fill();
      // ctx.stroke();
      // // ctx.shadowBlur = 0;

      ctx.moveTo(width / 2, height / 2);
      ctx.font = '48px sans-serif';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#abb2b6';
      ctx.strokeStyle = ctx.fillStyle;
      ctx.fillText(Math.floor(this.vari), (width / 2), height / 2);

      // Draw circles 1
      this.vari += 0.2;
      this.drawInnerCircle(canvas, width, height, 90);

      // Draw circles 2
      this.drawInnerCircle(canvas, width, height, 60);

      // Draw pink lines
      this.drawInnerCircle(canvas, width, height, 150, 10, 24);
      this.drawInnerCircle(canvas, width, height, 130, 50, 8, '#dc3bdd');

      if (this.vari < 50) {
        window.requestAnimationFrame(this.displayLoop);
      }
    },
  },
  mounted() {
    window.requestAnimationFrame(this.displayLoop);
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.circles {
  color: white;
}

.h1 {
  font-size: 48px;
  margin: 20px auto;
}

.canvas {
  width: 600px;
  height: 600px;
  background-color: #282c34;
  margin: 50px auto;
}
</style>
