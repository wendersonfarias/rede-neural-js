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

    static add(A, B){
        //!A.rows == B.rows &&
        if( A.cols == B.rows){
            var matrix = new Matrix(A.rows, A.cols);

        }else{
            console.log("Erro!: O numero de Colunas da Primeira deve ser igual ao numero de linha da segunda");
        }  
    }
}