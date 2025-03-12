import Kep from "./Kep.js";
import { Kepek } from "./Kepek.js";
import { KEPLISTA } from "./adat.js";

let szamlalo = 1
let balGomb = document.querySelector('#bal')
let jobbGomb = document.querySelector('#jobb')
let szuloElem = document.querySelector('.kiskepek')
let kozepElem = document.querySelector('.nagykep')
// new Kep('kepek/DSC7681.jpeg', 'asd', szuloElem)

let kozepKep = new Kep(KEPLISTA[0].kep, KEPLISTA[0].cim, kozepElem)
new Kepek(KEPLISTA, szuloElem)

jobbGomb.addEventListener('click', () => {
    if (szamlalo === KEPLISTA.length) {
        szamlalo = 0
        console.log(szamlalo)
    }
    console.log(szamlalo)
    kozepElem.innerHTML = "";
    new Kep(KEPLISTA[szamlalo].kep, KEPLISTA[szamlalo].cim, kozepElem)
    szamlalo++
})

balGomb.addEventListener('click', () => {
    if (szamlalo === 1) {
        szamlalo = KEPLISTA.length-1
    }
    console.log(szamlalo)
    kozepElem.innerHTML = "";
    new Kep(KEPLISTA[szamlalo].kep, KEPLISTA[szamlalo].cim, kozepElem)
    szamlalo--
})