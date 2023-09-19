// let num = 8
// let total = 1

// for (let i = 2; i <= num; i++) {
//     total *= i
// }
// console.log(total);

// let num = 5

// for (let i = 1; i <= 10; i++) {
//     console.log(num + " x " + i + " = " + num*i);    
// }

// let value = prompt("choisir un nombre entre 10 et 20")
// console.log(value);

// let is_not_corect = true

// while(is_not_corect){
//     if(value > 20 ){
//         value = prompt("plus petit")
//     }else if(value < 10){
//         value = prompt("plus grand")
//     }else{
//         alert("win")
//         is_not_corect = true
//     }
//     console.log(value);
// }

// let annee = 2400
// let mois = 2
// let jour = 29

// let date_is_good = false

// if (annee > 0 && mois > 0 && mois <= 12 && jour > 0 && jour <= 31) {
//     if(mois%2 !== 0){
//         date_is_good = true
//     }else if(mois%2 === 0 && jour <= 30){
//         if (mois !== 2 ) {
//             date_is_good = true
//         }else{
//            if(annee % 4 === 0 && annee % 400 === 0 && jour <= 29){
//                 date_is_good = true
//             }else if(annee % 4 === 0 && annee % 100 !== 0 && jour <= 29){
//                 date_is_good = true
//             }
//         }
//     }
// }

// console.log("the date you entered is " + date_is_good);


// let mec1 = 13
// let mec2 = 51
// let mec3 = 25
// let mec4 = 22

// if(mec1 > 50){
//     console.log("est elue");
// }else if(50 < mec2 || 50 < mec3 || 50 < mec4){
//     console.log("eliminer");
// }else if(mec1 > mec2 && mec1 > mec3 && mec1 > mec4){
//     console.log("balotage favorable");
// }else if(mec1 >= 12.5){
//     console.log("defavorable");
// }else{
//     console.log("eliminer");
// }

// let nombre = 20
// let total = 0

// if(nombre >= 30){
//     total += 10*0.1
//     nombre -= 10

//     total+= 20*0.09
//     nombre -=20
//     if(nombre > 0 ){
//         total += nombre*0.08
//         nombre = 0
//     }
// }else if(nombre > 10){
//     total += 10*0.1
//     nombre -= 10

//     total += nombre*0.09
//     nombre = 0
// }else{
//     total += nombre*0.1
//     nombre = 0
// }

// console.log(total);



// let heure = 23
// let min = 59
// let seconde = 59

// seconde++

// if(seconde === 60){
//     seconde = 0
//     min++
//     if(min === 60 ){
//         min = 0
//         heure ++
//         if (heure === 24) {
//             heure = 0
//         }
//     }
// }

// console.log("heure "+ heure + " min " + min + " seconde " + seconde );

// if(!localStorage.visite){
//     localStorage.setItem("visite",0)
// }

// localStorage.visite++
// const body = document.body
// body.innerHTML = `nombre de visite ${localStorage.visite}`

// let value = prompt("choose a age")

// if (value >= 6 && value <= 7) {
//     console.log('poussin');
// }else if (value <= 9) {
//     console.log('pupille');
// }else if (value <= 11) {
//     console.log('minime');
// }else {
//     console.log('cadet');
// }


// let value1 = prompt("choose a num 1")
// let value2 = prompt("choose a num 2")


// if (value1 > 0 && value2 > 0 || value1 < 0 && value2 < 0 ) {
//     console.log("positif");
// }else{
//     console.log("negatif");
// }