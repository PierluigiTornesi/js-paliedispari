//variabile per la scelta dell'utente tra pari o dispari
const sceltaUtente = prompt("Scegli tra pari o dispari");
//debug sceltaUtente
console.log("scelta utente", sceltaUtente);

//variabile per il numero inserito dall'utente tra 1 e 5
const numeroUtente  = parseInt(prompt("Inserisci un numero tra 1 e 5"))
//debug numeroUtente
console.log("numero utente", numeroUtente);

//variabile per il numero random del computer
const numeroComputer = generateRandomNumber(1,5)
//debug numeroComputer
console.log("numero computer", numeroComputer);

//variabile per somma dei due numeri
const sommaNumeri = numeroUtente + numeroComputer;
//debug sommaNumeri
console.log("somma dei due numeri", sommaNumeri);

//variabile per pari o dispari
const pariOdispari = oddEven(sommaNumeri);
//debug pariOdispari
console.log("risultato funzione pari o dispari", pariOdispari);

//verifico se la scelta dell'utente sia giusta o no
if(sceltaUtente === pariOdispari){
    console.log("l'utente ha vinto e il computer ha perso");
    alert("l'utente ha vinto e il computer ha perso")
}else{
    console.log("l'utente ha perso e il computer ha vinto");
    alert("l'utente ha perso e il computer ha vinto")
}







/**
 * la funzione che restituisce un numero intero randomico compreso tra min e max
 * @param {number} min il numero minimo che possiamo generare
 * @param {number} max il numero massimo che possiamo generare
 * @returns {number} un numero random compreso tra min e max
 */
function generateRandomNumber(min , max) {
    const rndNumber = Math.floor(Math.random() * (max - min)) + min ;
    return rndNumber;
}



/**
 * dato un numero restituisce "pari" se é numero pari,  altrimenti "dispari"
 * @param {number} numberToTest il numero da analizzare
 * @returns {string}
 */
function oddEven(numberToTest) {
    let result = "";
    //se il numero é divisibile per 2, salvo pari
    if(numberToTest % 2 === 0){
        result = "pari";
    }else{
        //altrimenti salvo dispari
        result = "dispari";
    }
    //ritorno il risultato
    return result
}