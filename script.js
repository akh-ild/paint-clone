const activeToolEl = document.getElementById('active-tool');
const bucketColorBtn = document.getElementById('bucket-color');
const brushColorBtn = document.getElementById('brush-color');
const brushIcon = document.getElementById('brush');
const brushSize = document.getElementById('brush-size');
const brushSlider = document.getElementById('brush-slider');
const eraser = document.getElementById('eraser');

const { body } = document;

// Global Variables
const canvas = document.createElement('canvas');
canvas.id = 'canvas';
const context = canvas.getContext('2d');

let bucketColor = '#FFFFFF';
let currentColor = '#A51DAB';
let currentSize = 10;
let isEraser = false;

// Create Canvas
function createCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 50;
  context.fillStyle = bucketColor;
  context.fillRect(0, 0, canvas.width, canvas.height);
  body.appendChild(canvas);
  switchToBrush();
}

// Setting background color
bucketColorBtn.addEventListener('change', () => {
  isEraser = false;
  currentColor = `#${brushColorBtn.value}`;
});

// Setting brush color
brushColorBtn.addEventListener('change', () => {
  currentColor = `#${brushColorBtn.value}`;
  createCanvas();
});

// Formatting brush size
function displayBrushSize() {
  brushSize.textContent = brushSlider.value < 10 ? `0${brushSlider.value}` : brushSlider.value;
}

// Setting brush size
brushSlider.addEventListener('change', () => {
  currentSize = brushSlider.value;
  displayBrushSize();
});

// Eraser
eraser.addEventListener('click', () => {
  isEraser = true;
  brushIcon.style.color = '#fff';
  eraser.style.color = '#000';
  activeToolEl.textContent = 'Eraser';
  currentColor = bucketColor;
  currentSize = 50;
});

// Switch back to brush
function switchToBrush() {
  isEraser = false;
  brushIcon.style.color = '#000';
  eraser.style.color = '#fff';
  activeToolEl.textContent = 'Brush';
  currentColor = `#${brushColorBtn.value}`;
  currentSize = 10;
  brushSlider.value = 10;
  displayBrushSize();
}

// Event listener
brushIcon.addEventListener('click', switchToBrush);


// On Load
createCanvas();
