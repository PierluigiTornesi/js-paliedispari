//variabile per la parola inserita dall'utente
const parolaUser = prompt("Inserisci una parola e ti diró se é palindroma");
//variabile flag che avrá come risultato il return della funzione isPalindroma
const flag = isPalindroma(parolaUser);
//verifico se sia palindroma o no in base al return
if(flag){
    console.log('la parola è palindroma');
    alert("É PALINDROMA");
}else{
    console.log('la parola non è palindroma');
    alert("NON É PALINDROMA");
}


/**
 * Verifica se la parola passata come parametro sia palindroma o no
 * @param {string} parolaUser parola da verificare
 * @returns {boolean} true se é palindroma, altrimenti false
 */
function isPalindroma(parolaUser) {
    //variabile per il contenitore delle lettere della parola passata come parametro
    let curLetter = "";
    //variabile per la parola al contrario
    let parolaUserInvertita = "";
    //indice per scorrere al contrario la parola inserita
    let i = parolaUser.length - 1;
    //flag per il risultato
    let result = false;
    //ciclo che scorre al contrario la parola passata come parametro,ogni lettera verrá salvata e inserita in un contenitore apposito fino ad avere la parola al contrario
    while (i >= 0) {
        //prendo la lettera corrente
        curLetter = parolaUser[i];
        //inserisco la lettera nella variabile
        parolaUserInvertita += curLetter;
        //debug lettera
        console.log(curLetter);
        //decremento l'indice 
        i--;
    }   
    //debug parola passata come parametro
    console.log(parolaUser,"parola inserita dall'utente");
    //debug parola al contrario
    console.log(parolaUserInvertita, "parola al contrario");
    //verifico se siano uguali, nel caso metto true
    if(parolaUser === parolaUserInvertita){
        result = true;
    }
    return result;
}