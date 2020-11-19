var natureImg 
var noiseImg

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}
function preload(){
	natureImg = loadImage("nature.jpg")
	noiseImg = loadImage("rain.jpg")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	image(natureImg,-500,0)
}

function draw() {
	noStroke()
	let span =map(mouseX,0,width,30,100)
	for(var i=0;i<natureImg.width;i+=span){
		for(var j=0;j<natureImg.height;j+=span){
			let c = natureImg.get(i,j)
			fill(c)
			push()
				translate(i,j)
				scale(random(2))
				rect(0,0,random(30),random(30))
			pop()
		}
	}
	
	push()
		blendMode(MULTIPLY)
		image(noiseImg,0,0,width,height)
	pop()
}