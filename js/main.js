// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bici = [
    {
        "nome" : "bici1",
        "peso" : 77
    },
    {
        "nome" : "bici2",
        "peso" : 45
    },
    {
        "nome" : "bici3",
        "peso" : 100
    },
]

let biciLeggera = bici[0];

for (let i = 0 ; i<bici.length; i++){
    if (biciLeggera.peso > bici[i].peso){
        biciLeggera = bici[i];
    }
}
console.log(biciLeggera);

const {nome} = biciLeggera;
const {peso} = biciLeggera;
console.log(peso);
console.log(nome);
console.log(`la bici piu leggera è ${nome} e pesa ${peso} g`);
