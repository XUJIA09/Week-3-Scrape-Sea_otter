let canvas;
let x;
let loading = true;
let data = {};
let words = [];
let wordData;

let displayState = 0;

function preload(){
  data = loadJSON(/json/sea_otter.json)
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container"); //move our canvas inside this HTML element

}

function draw() {
  background(200,200,250);
  let wordData = data.content.text[floor(random(0, 310))];
  console.log(wordData);
  x = wordData;
  textAlign(CENTER);
  textSize(30);
  text(x, 0, 0, width);


}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}