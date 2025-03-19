import { KEPLISTA } from "./adat.js";
import NagyKep from "./NagyKep.js";

export default class Kep {
    #kep
    #cim
    #i
    constructor(i, kep, cim, szuloElem) {
        this.#i = i;
        this.#kep = kep;
        this.#cim = cim;
        this.szuloElem = szuloElem;
        this.megjelenit();
        this.esemenykezelo();
    }

    esemenykezelo() {
        let kozepElem = document.querySelector('.nagykep')
        this.kepElem = document.querySelector('.kep:last-child');
        console.log(this.kepElem)
        this.kepElem.addEventListener('click', () => {
            console.log(this.#i)
            const e = new CustomEvent("kivalaszt", {detail:this.#i})
            window.dispatchEvent(e);
        });
    }

    megjelenit() {
        let html = `
                <div class="kep">
                    <img src="${this.#kep}" alt="${this.#cim}"</img>
                </div>
        `
        this.szuloElem.insertAdjacentHTML("beforeend", html);
    }
}