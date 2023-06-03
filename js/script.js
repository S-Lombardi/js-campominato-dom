"use strict"
//DICHIARO FUNZIONE CHE GENERA UN NUMERO CASUALE
function generateRandomNumber(max, min){
    return Math.floor(Math.random() * (max - min +1) + min);
}
//DICHIARO FUNZIONE PER SVUOTARE GRIGLIA
function resetGrid(){
    let container_grid = document.getElementById("container-grid");
    container_grid.innerHTML = " ";
    
}

let score ;

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
        const container_grid = document.getElementById("container-grid");
        
        
        //inserisco i quadrati nel dom
        container_grid.append(square);
    
        //Se tra i numeri random(bombe) c'è uno dei numeri delle caselle 
        if(arrayBombs.includes(i)) {
             
            score = 0
        
            //colora la casella di rosso al click della casella
            square.addEventListener('click', function() {
                this.classList.add("bomb");
                alert("hai perso");
                
                //tolgo il click alle caselle
                square.replaceWith(square.cloneNode(true));
                
                //punteggio
                container_grid.classList.add("stop-game");
                container_score.innerHTML = `<div>${score} è il tuo punteggio</div>`;
                
                let boxes = document.getElementsByClassName("box");

                for(let j = 0; j < boxes.length; j++) {
                    boxes[j].replaceWith(boxes[j].cloneNode(true));
                }
            });
        
        
        } else{
            //altrimenti colora la casella di azzurro
            square.addEventListener('click', function(){
                this.classList.add("click-blu");
                //tolgo il click alle caselle
                square.replaceWith(square.cloneNode(true));
                score++;
            });
        
        }
        
        
    }
    
}


//Recupero contenitore per inerire il punteggio
const container_score = document.getElementById('container-score');


//Recupero il pulsante del dom che al click genera la griglia
let button_play = document.getElementById("play");

button_play.addEventListener("click", function(){
    
    //Recupero i valori della select
    let level = document.getElementById("game-level").value;
    
    //Creo array vuoto in cui inserirò i 16 numeri random
    let arrayBombs = [];
    //definisco n
    let n;
    //Cambio numero di caselle a seconda del livello scelto
    if (level === "1") {
        n = 10;
    }
    else if(level === "2") {
        n = 9;

    }else {
        n = 7;
    }
    
    for( let i=0; i<16 ; i++){
        //Chiamo la funzione che genera numeri random per 16 volte
        let number = generateRandomNumber(n*n,1);

        //finche l'array arrayBombs include il numero che ho appena generato ne genero
        //un altro, perche l'array non deve contenere duplicati
        while(arrayBombs.includes(number)) {
            number = generateRandomNumber(n*n,1);
        }
        
        //inserisco i numeri nell' array
        arrayBombs.push(number);

        //Svuota il contenitore punteggio
        container_score.innerHTML = " ";
    }

    //Creo la griglia con n caselle e l'array delle bombe
    makeGrid(n, arrayBombs);

    console.log(arrayBombs)
});




