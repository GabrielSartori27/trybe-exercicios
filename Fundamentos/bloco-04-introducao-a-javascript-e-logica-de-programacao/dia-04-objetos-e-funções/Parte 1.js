let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
  console.log('Exercício 1')
  console.log('Bem vinda, ' + info.personagem);

  console.log('Exercício 2')
  console.log(info);

  console.log('Exercício 3')
  for(let key in info){
      console.log(key);
  }
  console.log('Exercício 4')
  for(let key in info){
      console.log(info[key])
  }
  console.log('Exercício 5')

  let info2 = {
      personagem: 'Tio Patinhas',
      origem: "'Christmas on Bear Mountain, Dell's Four Color Comics #178''",
      nota: 'O último MacPatinhas',
      recorrente: 'Sim',
  }
  for(let key in info){
      if(info[key] === 'Sim'){
        console.log('Ambos recorrentes')
      }else{
      console.log(info[key] + ' e ' + info2[key])
    }
  }
  console.log('Exercício 6e 7')
  
  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }
    ],
  };
  console.log('O livro favorito de ' + leitor.nome + ' se chama ' + '"' +leitor.livrosFavoritos[0].titulo + '"'+ '.');
  
  console.log('Exercício 8')
  console.log(leitor.nome + ' tem '+ leitor.livrosFavoritos.length +' livros favoritos.')