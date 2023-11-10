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

    map(func) {
        //seleciona araay por linha
        this.data =  this.data.map((arr,indexI) =>{
            //seleciona o elemento
            return arr.map((num,indexJ) =>{
                return func(num,indexI,indexJ);
            })
        })
    }

    static add(A, B){

        if(A.cols == B.rows){
            var matrix = new Matrix(A.rows, A.cols);
            console.log(A.data)
            console.log(B.data)
            matrix.map((elm,indexI,indexJ)=>{
                return A.data[indexI][indexJ] + B.data[indexI][indexJ];
            });
            console.log(matrix.data)

        }else{
            console.log("Erro!: O numero de Colunas da Primeira deve ser igual ao numero de linha da segunda");
        }  
    }
}