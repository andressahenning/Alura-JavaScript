import { handleStatus, log } from "./utils/promise-helpers.js";
import'./utils/array-helpers.js';
import { notasService as service } from "./utils/nota/service.js";

document.querySelector('#myButton')
.onclick = () => 
    service
    .sumItems('2143')
    .then(console.log)
    .catch(console.log);
