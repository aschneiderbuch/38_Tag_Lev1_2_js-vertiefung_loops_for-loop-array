console.log("test");

/* 
Frage

array mit schleife 0-10 befüllen

übergabe mit push

ausgabe numArray
*/


let Array =[];

for ( runden = 0 ; runden <11 ; runden = runden + 1) {
    let numArray = Array.push(runden);
    console.log(numArray);
    console.log(Array);
}