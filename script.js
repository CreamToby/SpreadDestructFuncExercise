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
// or
seeDinos( `Velociraptors`, `Tyrannosaurus Rex`, `Dilophosaurus`);

console.log(`=====================`);

// 2a
const jpCharacters = {
    alanGrant: `Sam Neill`, 
    ellieSattler: `Laura Dern`, 
    ianMalcolm: `Jeff Goldblum`
};

// 2b
// seeCharacters = (a) => console.log(a);

// seeCharacters(jpCharacters.ellieSattler);
// nope...

seeCharacters = ({ellieSattler}) => {
    console.log(ellieSattler);
}
// or
// seeCharacters = ({ellieSattler}) => console.log(ellieSattler);

seeCharacters(jpCharacters);

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
// function seeJPMovies ({one, two, three}, {four, five, six}){
//     console.log(one);
//     console.log(two);
//     console.log(three);
//     console.log(four);
//     console.log(five);
//     console.log(six);
// }
// seeJPMovies(...jurassicParkMovies);

// or

// seeJPMovies = ({one, two, three}, {four, five, six}) => {
//     console.log(one);
//     console.log(two);
//     console.log(three);
//     console.log(four);
//     console.log(five);
//     console.log(six);
// }
// seeJPMovies(...jurassicParkMovies);

// or

function seeJPMovies ([{one, two, three}, {four, five, six}]){
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
}
seeJPMovies(jurassicParkMovies);

// or

const [{one, two, three}, {four, five, six}] = jurassicParkMovies;
const allMovies = [one, two, three, four, five, six];
seeJPMovies = y => {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
}

seeJPMovies(allMovies);

