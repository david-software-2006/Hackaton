function getRandomNumber(numMin: number, numMax: number): number {
    return Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
}

let pokeNumber1:number = getRandomNumber(1, 900);
let pokeNumber2:number = getRandomNumber(1, 900);

console.log(pokeNumber1, pokeNumber2);

