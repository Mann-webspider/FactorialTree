var slider ;
var angle = PI/4;
var rotation;
function setup() {
    createCanvas(1200, 700);
    slider = createSlider(0, TWO_PI, PI/4,0.01)
    
  }
  

function draw() {
    stroke(255)
    background(51);
    var len = 200;
    translate(width/2, height)
    // line(0,0, 0, -100)
    
    angle = slider.value()
    branch(len)
  }
function branch(len){
    line(0,0,0,-len);
    translate(0,-len);
    

    if(len>4){
        push();
        rotate(-angle);
        branch(len*0.67);
        pop();
        push();
        rotate(angle)
        branch(len*0.67);
        pop();
    }
    
}