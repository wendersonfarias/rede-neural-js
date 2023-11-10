function setup(){
    createCanvas(500,500);
    background(155);

    var A = new Matrix(2,2);
    var B = new Matrix(2,2);
    console.log(A);
    console.log(B);

    Matrix.add(A,B);
}

function draw(){

}