// Snack2
// Creare un array di oggetti di squadre di scalcio. Ogni squadra avrà divere proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const soccerTeam =[
    {
        "nome" : "Roma",
        "pF"   : 0,
        "fS"   : 0
    },
    {
        "nome" : "Chelsea",
        "pF"   : 0,
        "fS"   : 0
    },
    {
        "nome" : "RealMadrid",
        "pF"   : 0,
        "fS"   : 0
    }
]

// funzione genera numero casuale
const randomNumer = (min,max) => Math.floor(Math.random() * (max - min) ) + min;
const newSoccerTeam = [];
// ciclo per generare puntiFatti e falliSubiti in maniera casuale
// e pusha solo i nomi e i falli subiti nel nuovo array
for (let i = 0; i < soccerTeam.length; i++){
    soccerTeam[i].pF = randomNumer(1,100);
    soccerTeam[i].fS = randomNumer(1,100);
    let thisTeam = soccerTeam[i];
    const {nome , fS} = thisTeam;
    newSoccerTeam.push({nome,fS});
}

console.log(soccerTeam);
console.log(newSoccerTeam);




