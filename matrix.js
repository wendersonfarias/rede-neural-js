//Operações matriciais 
class Matrix {
    constructor(rows, cols ){
        this.rows = rows;
        this.cols = cols;

        this.data = [];

        for(let i = 0; i< rows; i++){
            //cria uma nova linha
            let arr = [];
            for(let j = 0; j< cols; j++){
                arr.push(Math.floor(Math.random()*10))    
            }
            //adiciona nova linha ao array
            this.data.push(arr);
        }
    }

    static map(A,func) {
        let matrix = new Matrix(A.rows, B.rows);
        //seleciona Array por linha
        matrix.data =  matrix.data.map((arr,indexI) =>{
            //seleciona o elemento
            return arr.map((num,indexJ) =>{
                return func(num,indexI,indexJ);
            })
        })

        return matrix;
    }

    map(func) {
        //seleciona Array por linha
        this.data =  this.data.map((arr,indexI) =>{
            //seleciona o elemento
            return arr.map((num,indexJ) =>{
                return func(num,indexI,indexJ);
            })
        })

        return this;
    }

    print(){
        console.table(this.data);
    }

    randomize(){
        this.map( (elm,i,j) =>{
            return Math.random()*2 - 1;
        });
    }

    static arrayToMatrix(arr){
        let matrix = new Matrix(arr.length,1);
        
        matrix.map((elm,i,j)=>{
            return arr[i];
        })

        return matrix;
    }

    
    static add(A, B){
        var matrix = new Matrix(A.rows, A.cols);
        
        matrix.map((elm,indexI,indexJ)=>{
            return A.data[indexI][indexJ] + B.data[indexI][indexJ];
        });

        return matrix;


      
    }

    static multiply(A, B){
        var matrix = new Matrix(A.rows, B.cols);
        
        matrix.map((num,indexI, indexJ) => {
            let sum = 0;
            for(let k = 0 ; k < A.cols; k++){
               let elem1 = A.data[indexI][k];
               let elem2 = B.data[k][indexJ];
               sum += elem1 * elem2;
                
            }

            return sum;
        })

        return matrix;

    }
}