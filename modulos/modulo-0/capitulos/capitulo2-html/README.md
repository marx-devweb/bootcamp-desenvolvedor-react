# HTML

Hypertext Markup Language, ou HTML, é a linguagem para definição do conteúdo de uma página web. Um dos conceitos básicos que o HTML possibilita é o hipertexto, ou seja, texto não linear, com diversos conteúdos interconectados via links

###  Estrutura básica e sintaxe

Um documento HTML possui a seguinte estrutura básica:

```html
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <title>Meu documento</title>
    </head>
    <body>
        <p>Este é um documento HTML.</p>
    </body>
</html>
```

Conforme exemplo acima, o documento deve iniciar com a marcação `<!DOCTYPE html>`, para que seja interpretado corretamente pelo navegador como HTML 5. Abaixo, normalmente temos o elemento `html`, que engloba todo o documento, bem como os elementos `head` e `body`. Enquanto o `head` contém metadados da página, `body` contém o conteúdo em si.

Elementos em HTML são declarados por tags de abertura `<html>` e de fechamento `</html>`, que englobam outros elementos ou texto. Alguns elementos não podem ter um conteúdo, portanto, não possuem tag de fechamento (por exemplo a tag `<img>`. Além disso, elementos podem ter atributos e seus respectivos valores, por exemplo `lang="pt-BR"`. Nomes de elementos e de atributos não são sensíveis a caixa, mas valores de atributos são.

Dois dos atributos mais comuns, que podem ser usados qualquer elemento HTML, são `id` e `class`. O tributo `id` permite atribuir um identificador a um elemento, facilitando que ele seja referenciado em JavaScript ou outros elementos. Já o atributo `class` permite estilizar um elemento mais facilmente, conforme veremos no capítulo seguinte.

### Texto, imagens e links

Os seguintes elementos podem ser usados para definir conteúdo textual básico em um documento.

| Tag            | Descrição                                                    |
| -------------- | ------------------------------------------------------------ |
| `<h>` - `<h6>` | Indicam até 6 níveis de títulos na página. Ou seja, h1 é um Título principal (nível 1). |
| `<p>`          | Parágrafo.                                                   |
| `<em>`         | Enfatiza uma palavra ou trecho do texto (normalmente exibido em itálico). |
| `<strong>`     | Enfatiza fortemente uma palavra ou trecho do texto (normalmente exibido em negrito). |
| `<code>`       | Demarca código fonte.                                        |
| `<kbd>`        | Demarca entrada de teclado.                                  |
| `<br>`         | Introduz uma quebra de linha. Note que em HTML quebras de linha no código fonte não se refletem em quebras de linha no texto exibido. |
| `<sub>`        | Subscrito, como em H<sub>2</sub>O                            |
| `<sup>`        | Sobrescrito, como em x<sup>2</sup>.                          |
| `<img>`        | Uma imagem. O arquivo da imagem a ser exibida é especificada pelo atributo `src`, que pode ser um endereço absoluto ou relativo. |
| `<a>`          | Um link para outra página (ou arquivo). O endereço é especificado pelo atributo `href` |

### Listas e tabelas

Os seguintes elementos permitem a exibição de dados em listas.

| Tag    | Descrição                                                    |
| ------ | ------------------------------------------------------------ |
| `<ul>` | Define uma lista não ordenada (bullets).                     |
| `<ol>` | Define uma lista ordenada (com numeração).                   |
| `<li>` | Um item da lista. Deve estar dentro de `<ul>` ou `<ol>`.     |
| `<dl>` | Define uma lista de definições.                              |
| `<dt>` | Um termo da lista de definições. Deve estar dentro de `<dl>`. |
| `<dd>` | A descrição de um termo da lista de definições. Deve vir após um `<dt>`. |

Os seguintes elementos permitem a exibição de dados em tabelas.

| Tag       | Descrição                                                    |
| --------- | ------------------------------------------------------------ |
| `<table>` | Define uma tabela.                                           |
| `<thead>` | Demarca o cabeçalho da tabela.                               |
| `<tbody>` | Demarca o corpo da tabela.                                   |
| `<tr>`    | Define uma linha da tabela.                                  |
| `<td>`    | Define uma célula da tabela. Deve estar dentro de `<tr>`.    |
| `<th>`    | Define uma célula de cabeçalho da tabela. Deve estar dentro de `<tr>`. |

### Formulários

Os seguintes elementos são usados para construir formulários, que recebem entrada do usuário.

| Tag          | Descrição                                                    |
| ------------ | ------------------------------------------------------------ |
| `<form>`     | Engloba o formulário.                                        |
| `<input>`    | Um campo de entrada. O atributo `type` define o tipo de campo, que pode ser textual, numérico, de data, checkbox, radio, entre outros. |
| `<label>`    | Provê um rótulo para um campo.                               |
| `<select>`   | Define um campo de seleção de opções fechadas. Pode ser de seleção múltipla se existir o atributo multiple. |
| `<option>`   | Define uma opção. Deve estar dentro de `<select>`.           |
| `<textarea>` | Define uma área de texto, ou seja, um campo com várias linhas de texto. |

### Contêineres

Muitas vezes precisamos agrupar conteúdo relacionado em um documento para fins de estruturação ou estilização, ou mesmo demarcar uma região da página com alguma semântica específica **(um menu de navegação, o conteúdo principal, etc.)**. Para isso, temos dois agrupadores genéricos, `<span>` e `<div>`, bem como contêineres semânticos.

| Tag         | Descrição                                                    |
| ----------- | ------------------------------------------------------------ |
| `<span>`    | Agrupa um conjunto de elementos relacionados dentro de uma linha. |
| `<div>`     | Agrupa elementos relacionados como um bloco (força uma quebra de linha). |
| `<header>`  | Define uma região como cabeçalho da página.                  |
| `<footer>`  | Define uma região como rodapé da página.                     |
| `<nav>`     | Define um menu de navegação, contendo vários links.          |
| `<main>`    | Demarca o conteúdo principal da página.                      |
| `<aside>`   | Demarca um conteúdo separado do conteúdo principal.          |
| `<article>` | Demarca um artigo, ou seja, um conteúdo autocontido que possa ser lido fora do contexto da página. |
| `<section>` | Demarca uma seção.                                           |

Existem muitos outros elementos HTML. Neste capítulo apenas exemplificamos alguns dos mais comuns. Para uma lista completa consulte o artigo da MDN Web Docs:

- [https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element)

