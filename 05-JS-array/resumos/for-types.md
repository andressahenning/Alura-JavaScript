# Loops em JavaScript

## `for`

A forma mais “clássica” de se efetuar um loop em JavaScript e em várias outras linguagens. O `for` é muito conveniente pois pode ser utilizado com vários tipos de iteráveis e deixa explícitas todas as “fases” de cada loop.

### O que é um "iterável"?

Além de arrays, **strings**, **sets** (conjuntos) e **maps** (mapas ou dicionários) são considerados iteráveis. Um iterável representa uma sequência de elementos que pode ser percorrida (ou seja, iterada) utilizando ferramentas próprias para isso.

### Exemplo de uso do `for`

```javascript
const lista = [1, 2, 3, 4, 5];
 
for (let indice = 0; indice < lista.length; indice++) {
    console.log(lista[indice]); 
}
```

### Estrutura do `for`

Dentro da expressão `()` após a palavra-chave `for`, temos:

1. **Variável contadora**: Criada antes do início do laço (`let indice = 0`).
2. **Expressão de teste**: Executada antes de cada iteração (`indice < lista.length`).
3. **Incremento/Decremento**: Executado ao final de cada laço (`indice++`).

### Exemplo de loop decremental

```javascript
const lista = [1, 2, 3, 4, 5];
 
for (let i = lista.length - 1; i >= 0; i--) {
    console.log(lista[i]);
}
```

### `for` com múltiplas variáveis

```javascript
const lista = [1, 2, 3, 4, 5];
 
for (let i = 0, j = 0; i < lista.length; i++, j++) {
    console.log(lista[i] + j); 
}
```

Para mais detalhes sobre o `for`: [documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for).

---

## `for...of`

O `for...of` foi adicionado na versão ES6 do JavaScript e é um tipo de laço diferente do `for` tradicional:

```javascript
const lista = [1, 2, 3, 4, 5];
let soma = 0;
 
for (let elemento of lista) {
    soma += elemento;
}
 
console.log(soma); // 15
```

### Diferenças entre `for` e `for...of`

- O `for` oferece mais controle sobre o laço.
- O `for...of` é mais legível e sempre percorre os elementos sequencialmente.
- O `for...of` funciona com qualquer iterável, além de arrays.

---

## `forEach()`

Diferente dos anteriores, o `forEach()` é um **método de array** e usa uma **função callback** para iterar os elementos:

```javascript
const lista = [1, 2, 3, 4, 5];
let soma = 0;
 
lista.forEach(numero => soma += numero);
console.log(soma); // 15
```

### Estrutura do `forEach()`

- Recebe uma **função callback** como parâmetro.
- Executa essa função para **cada elemento do array**.
- **Não retorna um valor**, apenas executa o código dentro da função.
- Não pode ser interrompido com `break` como em `for` e `for...of`.

#### Outra forma de escrever o `forEach()`:

```javascript
lista.forEach(numero => {
    soma += numero;
});
```

Ou usando `function`:

```javascript
lista.forEach(function (numero) {
    soma += numero;
});
```

> 🔹 O `forEach()` **não funciona com outros iteráveis, apenas arrays**.

---

## Qual loop usar?

| Loop       | Quando usar |
|------------|------------|
| `forEach()` | Para iterar arrays de forma mais simples e legível. Ideal quando combinado com métodos como `map()` e `filter()`. |
| `for...of` | Quando precisamos iterar **qualquer iterável**, como conjuntos (`Set`) e mapas (`Map`). Também útil para loops assíncronos. |
| `for` | Quando precisamos de controle mais refinado sobre o laço (condição inicial, incremento, condição de parada). |

Em termos de **performance**, `for` e `forEach()` não possuem diferenças significativas para a maioria dos casos.

Para mais informações: [documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).
