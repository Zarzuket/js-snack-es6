// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.


// function arrayOfXY(arr, x , y){
//     newArray = [];
//         for (let i=0; i<arr.length; i++){
//             if (i >= x && i<=y){
//                 newArray.push(arr[i]);
//             }
//         }
    
//     return newArray;
// }






const array5 = [1,2,3,4,5,6,7,8,9,10];
// const num1 = 2;
// const num2 = 7;
const num1 = parseInt(prompt("inserisci un numero da 1 a" + array5.length));
const num2 = parseInt(prompt("inserisci un numero da 1 a" + array5.length));

const newArray = array5.filter((element) =>{
    if (num1 < element && num2 > element){
        return true;
    }
         return false;
}
);

console.log(newArray);



// while(isNaN(num2) || num2 > array5.length){
//     num2 = parseInt(prompt("il valore inserito non è corretto"));
// }
// while(isNaN(num1) || num1 > num2 || num1>array5.length){
//     num1 = parseInt(prompt("attento non hai inserito il numero correttamente"));
// }
// arrayOfXY(array5 , num1 , num2);
// console.log(newArray);