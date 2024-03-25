/*
SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
SNACK 4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti 
fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e 
falli subiti e stampiamo tutto in console.
BONUS
Stampare in pagina oltre che in console!
*/


// SNACK 3
let bici = [];

for(let i = 0; i < 10; i++) {
    let biciOgg = {
        nome: 'Bici' +' '+ (i + 1),
        peso: Math.floor(Math.random() * (30 - 20)) + 10  // Peso casuale tra 10 e 30
    };
    bici.push(biciOgg);
};
console.log(bici);



let biciClone = [...bici];

biciClone.forEach(({nome, peso }) => {
    console.log(`il peso della ${nome} è: ${peso}`);
    
    let elBoxArray = document.createElement('div');
    elBoxArray.classList.add('text-center', 'fw-3', 'fs-3', 'p-1');
    document.querySelector('.container').appendChild(elBoxArray);
    elBoxArray.innerHTML = `il peso della ${nome} è: ${peso}`;
});




let biciLeggera = biciClone.reduce(function(accumulatore, corrente) {
    if(corrente.peso < accumulatore.peso) {
        return corrente;
    } else {
        return accumulatore;
    }
});

/*
=a let biciLeggera  = bici.reduce((accumlatore, corrente) => {
    return (corrente.peso < accumulatore.peso) ? corrente : accumulatore;
});
*/
console.log(`La bici più leggera è ${biciLeggera.nome} con un peso di ${biciLeggera.peso}`);

let elBoxResult = document.createElement('div');
elBoxResult.classList.add('text-center', 'fw-2', 'fs-2', 'p-2');
document.querySelector('.container').appendChild(elBoxResult);

elBoxResult.innerHTML = `La bici più leggera è ${biciLeggera.nome} con un peso di ${biciLeggera.peso}`