import { Kepek } from "./Kepek.js";
import NagyKep from "./NagyKep.js";
import { KEPLISTA } from "./adat.js";
import LeptetoKezelo from "./LeptetesKezelo.js";


let kiskepek = document.querySelector('.kiskepek')
let kozepElem = document.querySelector('.nagykep')
new LeptetoKezelo(KEPLISTA, kozepElem)
new Kepek(KEPLISTA, kiskepek)
