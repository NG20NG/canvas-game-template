//
//
//
//
//
const canvas = document.getElementById("canvas")! as HTMLCanvasElement;

const ctx = canvas.getContext("2d")! as CanvasRenderingContext2D;
//
//
//
//
//
let counter = 0;
//
const gameLoop = () => {
  counter++;
  console.log(counter);
  requestAnimationFrame(gameLoop);
};
gameLoop();
