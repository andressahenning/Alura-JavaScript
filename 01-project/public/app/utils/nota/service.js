import { handleStatus } from "../promise-helpers.js";
import { partialize, pipe } from "../operators.js";
import { Maybe } from "../maybe.js";

const API = 'http://localhost:3000/notas';

const getItemsFromNotas = notasM => notasM.map(notas => notas.$flatMap(nota => nota.itens)); //obter uma lista de itens das notas, uma única dimensão
const filterItemsByCode = (code, itemsM) => itemsM.map(items => items.filter(item => item.codigo == code)); // filtrar itens por um determinado código
const SumItemsValue = itemsM => itemsM.map(items => items.reduce((total, item) => total + item.valor, 0)); // totalizar o valor desses itens

export const notasService = {
    listAll() {
        return fetch(API)
            .then(handleStatus)
            .then(notas => Maybe.of(null))
            .catch(err => {
                console.log(err);
                return Promise.reject('Não foi possível obter as notas fiscais')
            });
    },

    sumItems(code) {
        const filterItems = partialize(filterItemsByCode, code);
        const sumItems = pipe(
            getItemsFromNotas, 
            filterItems, 
            SumItemsValue
        );

        return this.listAll()
            .then(sumItems)
            .then(result => result.getOrElse(0))
    }
};