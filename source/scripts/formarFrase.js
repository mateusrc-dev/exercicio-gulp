const formarFrase = require("./juntarFrase");
const prompt = require("prompt-sync")();

let parte1 = prompt("Escreva a primeira parte: ")
let parte2 = prompt("Escreva a segunda parte: ")

formarFrase(parte1, parte2);
