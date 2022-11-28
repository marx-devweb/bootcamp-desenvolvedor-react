//TIPOS E VALORES EM JAVASCRIPT

//OBJETO
var aluno1 = {
    matricula: 1986101149,
    nome: 'Marx dos Santos',
    curso: 'Bootcamp Desenvolvedor React',
    ativo: true
}

//Podemos adicionar mais campos ao nosso objeto executando a linha de comando abaixo
aluno1.dataNAscimento = '26/07/1997';

//Tambem podemos excluirum campo do nosso obejto executando a linha de comando abaixo
delete aluno1.curso

console.log(aluno1);