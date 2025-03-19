import { KEPLISTA } from "./adat.js"
import NagyKep from "./NagyKep.js"

export default class LeptetoKezelo {
    #szamlalo
    #lista
    constructor(lista, szuloElem) {
        this.#lista = lista;
        this.#szamlalo = 0;
        this.jobbGomb = document.querySelector('#jobb');
        this.balGomb = document.querySelector('#bal');
        this.szuloElem = szuloElem;

        const NAGYKEP = this.szuloElem.innerHTML = "";
        new NagyKep(this.#lista[this.#szamlalo].kep, this.#lista[this.#szamlalo].cim, this.szuloElem);
        this.esemenykezelo()
        this.kisKepKezeles()
    }

    kisKepKezeles() {
        window.addEventListener("kivalaszt", (event) => {
            this.#szamlalo = event.detail
            this.szuloElem.innerHTML = "";
            new NagyKep(this.#lista[this.#szamlalo].kep, this.#lista[this.#szamlalo].cim, this.szuloElem)
        })
    }

    esemenykezelo() {
        this.jobbGomb.addEventListener('click', () => {
            this.#szamlalo++
            if (this.#szamlalo === this.#lista.length) {
                this.#szamlalo = 0
                console.log(this.#szamlalo)
            }
            console.log(this.#szamlalo)
            this.szuloElem.innerHTML = "";
            new NagyKep(this.#lista[this.#szamlalo].kep, this.#lista[this.#szamlalo].cim, this.szuloElem)
        })

        this.balGomb.addEventListener('click', () => {
            this.#szamlalo--
            if (this.#szamlalo < 0) {
                this.#szamlalo = this.#lista.length-1
            }
            console.log(this.#szamlalo)
            this.szuloElem.innerHTML = "";
            new NagyKep(this.#lista[this.#szamlalo].kep, this.#lista[this.#szamlalo].cim, this.szuloElem)
        })
    }
}
