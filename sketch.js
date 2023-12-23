function setup() {
  createCanvas(800, 800);
  setInterval(printCurrentMinute, 60000);
  angleMode(DEGREES);
  colorMode(HSB, 90);
}

function draw() {
  background(220);
  let h = hour();
  let m = minute();
  let s = second();

  // Draw hours
  for (let k = 0; k < 24; k++) {
    let x = 200 + 100 * cos(k * 15 - 90);
    let y = 200 + 100 * sin(k * 15 - 90);
    if (k === h) {
      fill(150, 100, 100);
    } else {
      fill(150, 40, 40);
    }
    circle(x, y, 50);
  }

  // Draw seconds
  for (let i = 0; i < 60; i++) {
    let x = 200 + 100 * cos(i * 6 - 90);
    let y = 200 + 100 * sin(i * 6 - 90);
    if (i === s) {
      fill(150, 100, 100);
    } else {
      fill(150, 40, 40);
    }
    circle(x + 500, y, 50);
  }

  // Draw minutes
  for (let j = 0; j < 60; j++) {
    let x = 200 + 100 * cos(j * 6 - 90);
    let y = 200 + 100 * sin(j * 6 - 90);
    if (j === m) {
      fill(150, 100, 100);
    } else {
      fill(150, 40, 40);
    }
    circle(x + 250, y, 50);
  }
}

function printCurrentMinute() {
  const m = minute();
  console.log(m);
}
