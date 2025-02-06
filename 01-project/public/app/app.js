import { handleStatus, log, timeoutPromise, retry } from "./utils/promise-helpers.js";
import'./utils/array-helpers.js';
import { notasService as service } from "./utils/nota/service.js";
import { debounceTime, takeUntil, partialize, pipe } from "./utils/operators.js";
import { EventEmitter } from './utils/event-emitter.js'
import { Maybe } from "./utils/maybe.js";


const opertations = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500)
);

const action = opertations(() =>
    retry(3, 3000, () => timeoutPromise(200, service.sumItems('2143')))
    .then(total => EventEmitter.emit('itensTotalizados', total))
    .catch(console.log)
);

document.querySelector('#myButton')
.onclick = action;
    
