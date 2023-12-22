let lastSecond = -1; // Initialize lastSecond to an invalid value

function setup() {
  createCanvas(600, 400);
  frameRate(1); // Set frame rate to 1 frame per second
}

function draw() {
  const currentSecond = second();

  // Check if the second has changed
  if (currentSecond !== lastSecond) {
    background(255); // Clear the background

    drawClockGrid(15, 12, width, height);
    lastSecond = currentSecond; // Update lastSecond
  }
}

function drawClockGrid(rows, cols, width, height) {
  const cellWidth = width / cols;
  const cellHeight = height / rows;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const x = j * cellWidth;
      const y = i * cellHeight;

      // Determine the section based on the column index
      const section = floor(j / 4); // Divide into three sections (0, 1, 2)

      // Use the current time values for coloring
      const redValue = section === 0 ? hour() * 10 : 0;
      const greenValue = section === 1 ? minute() * 4 : 0;
      const blueValue = section === 2 ? second() * 4 : 0;

      fill(redValue, greenValue, blueValue);
      stroke(255);
      rect(x, y, cellWidth, cellHeight);

      fill(255);
      noStroke();
      textAlign(CENTER, CENTER);
      textSize(10);
      text(`${i + 1}, ${j + 1}`, x + cellWidth / 2, y + cellHeight / 2);
    }
  }
}