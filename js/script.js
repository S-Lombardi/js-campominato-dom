"use strict"
//DICHIARO FUNZIONE CHE GENERA UN NUMERO CASUALE
function generateRandomNumber(max){
    return Math.floor(Math.random() * max);
}
let punteggio = 0;
//DICHIARO FUNZIONE PER SVUOTARE GRIGLIA
function resetGrid(){
    let container_grid = document.getElementById("container-grid");
    container_grid.innerHTML = " ";
    
}

//DICHIARO FUNZIONE PER CREARE LA GRIGLIA
function makeGrid(n, arrayBombs){
   
    resetGrid()
    
    for(let i=1 ; i<=n*n ; i++){
        
        //Creo elemento div
        let square = document.createElement("div");
        
        //Assegno al div una classe per le misure
        square.classList.add("box");
        
        //Rendo modificabile la misura del div 
        square.style.width = `calc(100% / ${n})`;

        //Inserisco i numeri delle caselle
        square.innerHTML = i;
        
        //Recupero l'elemento in cui voglio inserire i quadrati
        let container_grid = document.getElementById("container-grid");
        
        
        //inserisco i quadrati nel dom
        container_grid.append(square);
    
        
        //Se l'array include uno dei numeri delle caselle 
        if(arrayBombs.includes(i)) {
            
            //colora la casella di rosso
            square.addEventListener('click', function() {
                this.classList.add("bomb");
                alert("hai perso")
              

            });
        } else{
            //altrimenti colora la casella di azzurro
            square.addEventListener('click', function(){
                this.classList.add("click-blu");
                console.log(i);
                
            });

        }
            
        
        
        
    }
    
}


//Recupero il pulsante del dom che al click genera la griglia
let button_play = document.getElementById("play");

//inserisco le griglie all'evento click del pulsante Play
button_play.addEventListener("click", function(){
    
    //Recupero i valori della select
    let level = document.getElementById("game-level").value;

    //Cambio numero di caselle a seconda del livello scelto
    let n;
    if (level === "1") {
        n = 10;
    }
    else if(level === "2") {
        n = 9;

    }else {
        n = 7;
    }

    //Creo array vuoto in cui inserirò i 16 numeri random
    let arrayBombs = [];
    
    
    for( let i=0; i<16 ; i++){

        //Chiamo la funzione che genera numeri random per 16 volte
        let number = generateRandomNumber(n*n);

        //finche l'array arrayBombs include il numero che ho appena generato ne genero
        //un altro, perche l'array non deve contenere duplicati
        while(arrayBombs.includes(number)) {
            number = generateRandomNumber(n*n);
        }
        
        //inserisco i numeri nell' array
        arrayBombs.push(number);
    }

    //Creo la griglia con n caselle e l'array delle bombe
    makeGrid(n, arrayBombs);

    console.log(arrayBombs)
});




