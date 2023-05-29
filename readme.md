Consegna:
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

Prima parte :

1-Creo una funzione che genera randomicamente un numero; ( max-min)
2-Creo un array vuoto 
3-Dentro all'array precedentemente creato dovrò inserire le 16 bombe
 3.1 Genero il numero casuale
   CONTROLLO:
  3.2 SE il numero random non è già incluso nell'array esco dal controllo 
  3.3 ALTRIMENTi  proseguo noncon nil ciclo fino al numero max
4.Riempio l'array con bombe