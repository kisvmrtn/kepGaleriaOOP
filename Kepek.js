import Kep from "./Kep.js";

export class Kepek {
    #lista
    constructor(lista, szuloElem) {
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.listaMegjelenit();
    }
    listaMegjelenit() {
        for (let i = 0; i < this.#lista.length; i++) {
            const KEP = new Kep(i, this.#lista[i].kep, this.#lista[i].cim, this.szuloElem)
        }
    }
}