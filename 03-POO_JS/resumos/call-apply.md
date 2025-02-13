# 📌 Manipulação de `this` em JavaScript

Em JavaScript, podemos manipular o contexto de `this` utilizando os métodos `bind()`, `call()` e `apply()`. Esses métodos permitem alterar o valor de `this`, tornando o código mais flexível e reutilizável.

---

## 🔹 `bind()`
O método `bind()` cria uma nova função que, quando chamada, tem seu `this` vinculado a um determinado contexto.

### Exemplo:
```javascript
const user = {
  nome: 'Mariana',
  email: 'm@m.com',
  exibeInfos: function() {
    console.log(this.nome, this.email);
  }
};

const exibe = user.exibeInfos.bind(user);
exibe(); // Mariana m@m.com
```

---

## 🔹 `call()`
O método `call()` executa a função imediatamente, passando um contexto específico para `this` e argumentos adicionais.

### Exemplo:
```javascript
function exibeInfos() {
  console.log(this.nome, this.email);
}

const user = {
  nome: 'Mariana',
  email: 'm@m.com'
};

exibeInfos.call(user); // Mariana m@m.com
```

Também é possível passar parâmetros adicionais:

```javascript
function exibeMensagem(nome, email) {
  console.log(`Usuário: ${nome}, Email: ${email}`);
}

const user = {
  nome: 'Mariana',
  email: 'm@m.com',
  executaFuncao: function(fn) {
    fn.call(this, this.nome, this.email);
  }
};

user.executaFuncao(exibeMensagem); // Usuário: Mariana, Email: m@m.com
```

---

## 🔹 `apply()`
O método `apply()` funciona de forma semelhante ao `call()`, porém os argumentos são passados em um array.

### Exemplo:
```javascript
function exibeMensagem(nome, email) {
  console.log(`Usuário: ${nome}, Email: ${email}`);
}

const user = {
  nome: 'Mariana',
  email: 'm@m.com',
  executaFuncao: function(fn) {
    fn.apply(this, [this.nome, this.email]);
  }
};

user.executaFuncao(exibeMensagem); // Usuário: Mariana, Email: m@m.com
```

Usando arrays, podemos passar os argumentos dinamicamente, aproveitando a flexibilidade da função `apply()`.

---

📌 **Resumo:**
- `bind()`: Cria uma nova função com um `this` fixo.
- `call()`: Chama a função imediatamente, passando `this` e argumentos separadamente.
- `apply()`: Chama a função imediatamente, passando `this` e argumentos em um array.

Compreender esses métodos é essencial para manipular corretamente o contexto de `this` em diferentes situações do JavaScript! 🚀
