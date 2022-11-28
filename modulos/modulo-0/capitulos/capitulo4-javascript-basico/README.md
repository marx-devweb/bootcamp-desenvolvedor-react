# JavaScript básico

###  Introdução a JavaScript

JavaScript é uma linguagem dinâmica e interpretada, que pode ser executada no navegador. Essa linguagem surgiu com o antigo navegador Netscape, com o intuito de permitir interações simples. Porém, JavaScript passou por um processo de padronização e evolução e hoje é amplamente utilizada para desenvolvimento de aplicações, tanto no front-end, quanto no back-end, em plataformas como o Node.js.

#### [Adicionando scripts na página](https://www.w3schools.com/js/js_whereto.asp)

Para incluir JavaScript em um documento HTML, utilizamos o elemento script, que pode ser usado de duas formas: 

- script externo, cujo caminho é especificado por meio da propriedade src;
- script inline, cujo código é incluído diretamente como conteúdo do elemento script, conforme exemplo abaixo.

```javascript
<script src="./js/meu-script-externo.js"></script> //script externo

<script> //script inline
    console.log('Este é um script inline'); 
</script>
```

---

### [Sintaxe básica](https://www.w3schools.com/js/js_syntax.asp) 

Abaixo temos um primeiro exemplo de código JavaScript, que demonstra algumas características básicas da sintaxe.

```javascript
var mensagem = 'Olá'; 
mensagem = 'Olá Mundo'; 

console.log(mensagem); // comentário 
// comentário de uma linha 

/* 
comentário de várias linhas
console.log(mensagem);
*/
```

No exemplo acima, a primeira linha declara uma variável e a inicializa, enquanto na segunda linha atribuímos um novo valor à variável mensagem. Em seguida, imprimimos o valor da variável no console, chamando a função `console.log`. 

---

### Tipos e valores em JavaScript

#### Tipos Primitivos

JavaScript possui os tipos primitivos:

- [`number`](https://www.w3schools.com/js/js_numbers.asp) (número inteiro ou fracionário);
- [`string`](https://www.w3schools.com/js/js_strings.asp) (sequência de caracteres); e 
- [`boolean`](https://www.w3schools.com/js/js_booleans.asp) (verdadeiro ou falso). 

Valores primitivos são declarados como no código a seguir.

```javascript
var vNumber = 5.78;
var vString = 'abacaxi';
var vBoolean = true;
```

#### [Objetos](https://www.w3schools.com/js/js_objects.asp)

Podemos definir objetos contendo as propriedades que desejarmos, sejam elas primitivas ou não. Note que valores do tipo objeto são definidos entre chaves, conforme exemplo abaixo. Propriedades também podem ser adicionadas ou removidas de um objeto a qualquer momento.

```javascript
var aluno1 = {
    matricula: 1986101149,
    nome: 'Marx dos Santos',
    curso: 'Bootcamp Desenvolvedor React',
    ativo: true
}
```

#### [Arrays](https://www.w3schools.com/js/js_arrays.asp)

`Arrays` armazenam uma lista de valores, primitivos ou não. Valores do tipo `array` são definidos usando colchetes. Podemos adicionar elementos em um `array` existente com a função `push`, e também obter seu tamanho com a propriedade `length`.

```javascript
var frutas = ['Banana', 'Laranja', 'Maçã'];
frutas.push('Melancia');
```

#### Undefined e null

Variáveis não inicializadas possuem o valor especial `undefined`. Vale ressaltar que JavaScript também possui o valor `null`, que representa uma referência para nenhum objeto, comum em outras linguagens de programação. No entanto `null` e `undefined`, embora sejam conceitualmente semelhantes, não são exatamente o mesmo valor.

---

### [Operadores e expressões](https://www.w3schools.com/js/js_operators.asp)

JavaScript fornece um conjunto de operadores, que podem ser utilizados para montar expressões lógicas, aritméticas, entre outras. Nesta seção veremos alguns dos operadores mais comuns.

**Operadores lógicos**

| Operador | Descrição      |
| -------- | -------------- |
| x `&&` y | Lógico E       |
| x `||` y | Lógico OU      |
| x `!`    | Lógico Negação |

**Operadores aritméticos**

| Operador | Descrição                                     |
| -------- | --------------------------------------------- |
| x `+` y  | Adição, ou concatenação, no caso de `strings` |
| x `-` y  | Subtração                                     |
| `+`x     | Converte para número (se já não for)          |
| `-`x     | Inversão de sinal                             |
| x `/` y  | Divisão                                       |
| x `*` y  | Multiplicação                                 |
| x `%` y  | Resto da divisão de x por y                   |
| x `**` y | Exponenciação                                 |

**Operadores aritméticos com atribuição**

| Operador  | Descrição                                   |
| --------- | ------------------------------------------- |
| x `+=` y  | Adição, ou concatenação, no caso de strings |
| x `-=` y  | Subtração                                   |
| x `*=` y  | Multiplicação                               |
| x `/=` y  | Divisão                                     |
| x `%=` y  | Resto da divisão de x por y                 |
| x `**=` y | Exponenciação                               |
| x`++`     | Retorna x e depois incrementa               |
| x`--`     | Retorna x e depois decrementa               |
| `++`x     | Incrementa e depois retorna x               |
| `--`x     | Decrementa e depois retorna x               |

**Operadores de comparação**

| Operador | Descrição      |
| -------- | -------------- |
| x `<` y  | Menor          |
| x `>` y  | Maior          |
| x `<=` y | Menor ou igual |
| x `>=` y | Maior ou igual |

**Operadores de igualdade**

| Operador  | Descrição                     |
| --------- | ----------------------------- |
| x `==` y  | Igual                         |
| x `!=` y  | Diferente                     |
| x `===` y | Exatamente igual (mesmo tipo) |
| x `!==` y | Não exatamente igual          |

**Precedência de operadores**

Ao avaliar expressões com vários operadores, serão avaliados primeiro aqueles com maior precedência, conforme tabela abaixo (da maior precedência para a menor). No entanto, podemos modificar a ordem de avaliação com o uso de parênteses.

| Operador                              | Associatividade |
| ------------------------------------- | --------------- |
| f`(`x`)` x`.`y x`[`y`]`               | ➡️               |
| `!`x `+`x `–`x                        | ⬅️               |
| x`**`y                                | ⬅️               |
| x `*` y x `/` y x `%` y               | ➡️               |
| x `+` y x `–` y                       | ➡️               |
| x `<` y x `<=` y x `>` y x `>=` y     | ➡️               |
| x `==` y x `!=` y x `===` y x `!==` y | ➡️               |
| x `&&` y                              | ➡️               |
| x `||` y                              | ➡️               |

---

### [Funções e escopo](https://www.w3schools.com/js/js_functions.asp)

Podemos definir funções com a palavra-chave `function`, conforme exemplo a seguir. Variáveis definidas dentro da função possuem escopo local (apenas na função), enquanto variáveis declaradas fora da função possuem escopo global, podendo ser acessadas inclusive em outros scripts.

```javascript
var m = 'Olá ';
function imprimeOla() {
    var nome = 'Danilo'; // variável local
    console.log(m); // pode ler variável global
    console.log(nome);
}
```

Vale ressaltar que funções podem receber parâmetros e retornar valores, como a função `soma` definida a seguir.

```javascript
function soma(a, b) {
    return a + b;
}
```

---

### Comandos de decisão

#### [if/else](https://www.w3schools.com/js/js_if_else.asp)

Executa um bloco de código condicionalmente, baseado em uma expressão de decisão. Opcionalmente pode ter a cláusula `else`.

```javascript
function maior(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
```

#### Operador ternário

Avalia uma expressão condicionalmente, baseado em uma expressão de decisão. Tem o mesmo comportamento do comando `if`/`else`, mas trata-se de uma expressão, não um comando. 

```javascript
function maior(a, b) {
    return (a > b) ? a : b;
}
```

#### [switch/case](https://www.w3schools.com/js/js_switch.asp)

Executa código condicionalmente, baseado na comparação de uma expressão de controle com um conjunto de valores possíveis. Pode ter uma cláusula default para capturar outros casos não tratados.

```javascript
function formataUnidade(un) {
    switch (un) {
        case "s":
            return "segundo";
        case "m":
            return "metro";
        default:
            console.log("Não implementei ainda");
    }
}
```

---

### Comandos de repetição

####  [while](https://www.w3schools.com/js/js_loop_while.asp) 

Verifica uma condição de controle e executa o bloco de código enquanto ela for verdadeira

```javascript
var contador1 = 1;
while (contador1 <= 5) {
    console.log(contador1); // imprime de 1 a 5
    contador1++;
}
```

#### [do while](https://www.w3schools.com/js/js_loop_while.asp)

Executa o bloco de código e verifica uma condição de controle. Se for verdadeira, repete.

```javascript
var contador2 = 1;
do {
    console.log(contador2); // imprime de 1 a 5
    contador2++;
} while (contador2 <= 5);
```

#### [for](https://www.w3schools.com/js/js_loop_for.asp)

Executa comandos de inicialização e em seguida verifica uma condição de controle e executa o bloco de código enquanto ela for verdadeira. Ao final de cada repetição, executa um comando fornecido (por exemplo, incrementar um contador).

```javascript
for (var contador3 = 1; contador3 <= 5; contador3++) {
    console.log(contador3); // imprime de 1 a 5
}
```
