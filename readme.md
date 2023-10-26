### ESERCIZI

**Palindroma**

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma (non usare funzioni predefinite di js).

**Pari e Dispari**

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

**Consigli del giorno**

1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.


#### SOLUZIONE 

**Palindroma**

**Dati**
1. Parola inserita dall'utente
2. Lunghezza della parola 
3. Contenitore per le lettere della prima parola
4. Contenitore per la parola al contrario
5. Indice per scorrere le lettere della parola

**Logica**
1. Ciclo per scorrere la parola inserita dall'utente
2. Ogni iterazione del ciclo prenderó una lettera e la inseriró nel suo contenitore
3. Inserisco nel contenitore della parola ogni lettera che prendo
4. Verifico se sono uguali:
    1. Se sono uguali stamperó che la parola é palindroma
    2. Altrimenti stampo che non lo é

**Output**
1. Restituisco il messaggio finale


#### SOLUZIONE 

**Pari e Dispari**

**Dati**
1. Variabile con pari o dispari scelto dall'utente
2. Numero tra 1 e 5 inserito dall'utente
3. Numero random tra 1 e 5 per il computer

**Logica**
1. Sommare i due numeri
2. Verificare se la somma sia pari o dispari:
    1. Se la somma é pari e l'utente ha scelto pari ha vinto altrimenti ha vinto il computer
    2. Se la somma é dispari l'utente ha scelto dispari ha vinto altrimenti ha vinto il computer

**Output**
1. Messaggio finale con dichiarazione del vincitore.