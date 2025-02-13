# 📌 Getters e Setters em JavaScript

Os **getters** retornam valores e os **setters** definem valores. Mas será que estes métodos são sempre necessários em todas as classes?

Assim como a função `constructor()`, os assessores devem ser utilizados somente quando suas funcionalidades são realmente necessárias. Por exemplo:
- Um **getter** pode ser útil para retornar um dado da classe de uma forma específica (como concatenar nome e sobrenome, por exemplo).
- Um **setter** pode ser usado quando queremos executar alguma lógica sempre que uma propriedade for alterada (como validações de entrada).
- Os assessores ajudam na segurança da classe, encapsulando dados conforme necessário.

---

## 🔹 Criando Getters e Setters com Funções

Podemos usar funções para atuar como getters e setters:

```javascript
class User {
  _nome = '';

  setNome(nome) {
    this._nome = nome;
  }

  getNome() {
    return this._nome;
  }
}
```

Neste caso, os métodos `setNome()` e `getNome()` atuam como setters e getters, respectivamente. Porém, o acesso a eles exige o uso de parênteses:

```javascript
const novoUser = new User();
novoUser.setNome('Pedro'); // Setter
console.log(novoUser.getNome()); // Getter
```

---

## 🔹 Utilizando `get` e `set`

O JavaScript permite definir getters e setters diretamente:

```javascript
class User {
  constructor(nome) {
    this._nome = nome;
  }

  get nome() {
    return this._nome;
  }

  set nome(novoNome) {
    this._nome = novoNome;
  }
}
```

Agora, podemos acessar e modificar a propriedade como se fosse um atributo comum:

```javascript
const novoUser = new User('Ana');
console.log(novoUser.nome); // Getter -> 'Ana'
novoUser.nome = 'Pedro'; // Setter
console.log(novoUser.nome); // 'Pedro'
```

Com `get` e `set`, melhoramos a legibilidade do código e tornamos a interação com os objetos mais intuitiva.

---

## 🔹 Vantagens do Uso de Getters e Setters

- **Encapsulamento**: Permite controlar o acesso aos atributos da classe.
- **Validação**: Podemos validar dados antes de atribuí-los.
- **Legibilidade**: O código fica mais natural e fácil de entender.
- **Proteção**: Evita acesso direto a propriedades internas.

Além disso, os assessores possuem limitações embutidas:
- **Getters** não aceitam parâmetros.
- **Setters** aceitam apenas um único parâmetro (o valor a ser definido).

Embora alguns desenvolvedores prefiram métodos convencionais (`getNome()` e `setNome()`), os assessores tornam o código mais limpo e alinhado com boas práticas de programação orientada a objetos.

---

📌 **Conclusão**
Os getters e setters são ferramentas poderosas no JavaScript, proporcionando um código mais seguro, organizado e legível. Seu uso depende do contexto, mas compreender sua importância pode ajudar a melhorar a estrutura dos seus projetos! 🚀
