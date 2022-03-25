// SpreadDestructFuncExercise 
// 1a
const jPDinos = [
    `Velociraptors`,
    `Tyrannosaurus Rex`,
    `Dilophosaurus`
];

// 1b
function seeDinos (a, ...b){
    console.log(a);
    console.log(b);
}

seeDinos(...jPDinos);

console.log(`=====================`);

// 2a
const jpCharacters = {
    alanGrant: `Sam Neill`, 
    ellieSattler: `Laura Dern`, 
    ianMalcolm: `Jeff Goldblum`
};

// 2b
seeCharacters = (a) => console.log(a);


seeCharacters(jpCharacters.ellieSattler);

// BONUS
// 3a
console.log(`=====================`);

const jurassicParkMovies = [
    {
        one: `Jurassic Park`, 
        two: `The Lost World: Jurassic Park`, 
        three: `Jurassic Park III`
    },
    {
        four: `Jurassic World`, 
        five: `Jurassic World: Fallen Kingdom`, 
        six: `Jurassic World: Dominion`
    }
];

// 3b
function seeJPMovies ({one, two, three}, {four, five, six}){
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
}
seeJPMovies(...jurassicParkMovies);

