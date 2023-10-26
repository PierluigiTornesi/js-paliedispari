const parolaUser = prompt("Inserisci una parola e ti diró se é palindroma");

const flag = isPalindroma(parolaUser);

if(flag){
    console.log('la parola è palindroma');
    alert("É PALINDROMA");
}else{
    console.log('la parola non è palindroma');
    alert("NON É PALINDROMA");
}

function isPalindroma(parolaUser) {
    let curLetter = "";
    let parolaUserInvertita = "";
    let i = parolaUser.length - 1;
    let result = false;
    while (i >= 0) {
      curLetter = parolaUser[i];
      parolaUserInvertita += curLetter;
      console.log(curLetter);
      i--;
    }   
    console.log(parolaUser,"parola inserita dall'utente");
    console.log(parolaUserInvertita, "parola al contrario");
    if(parolaUser === parolaUserInvertita){
        result = true;
    }
    return result;
}