function setup(){
    createCanvas(500,500);
    background(126);
 
    var rn =  new RedeNeural(1,3,1);
    var arr = [3,4];
    rn.feedforward(arr);
    
    
}

function draw(){

}