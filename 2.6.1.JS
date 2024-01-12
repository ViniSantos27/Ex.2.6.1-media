const alunos = [
    {
      nome: 'vinicius',
      notas: [
        { cadeira: 'DW2', nota: 3 },
        { cadeira: 'BD2', nota: 7 },
      ],
    },
    {
      nome: 'douglas',
      notas: [
        { cadeira: 'DW2', nota: 7 },
        { cadeira: 'BD2', nota: 8 },
      ],
    },
    {
      nome: 'lucas',
      notas: [
        { cadeira: 'DW2', nota: 10 },
        { cadeira: 'BD2', nota: 6 },
      ],
    }
  ]

  const mediaGeral = alunos.map((aluno) => {
    const notas = aluno.notas.map((nota) => nota.nota);
    let somaNotas = 0;
    
    for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
    }
    
    const mediaGeral = somaNotas / notas.length;
    return { ...aluno, mediaGeral };
    });
    
    mediaGeral.map((aluno) => {
    console.log(------------------);
    console.log(`${aluno.nome} `);
    console.log(Media geral = ${aluno.mediaGeral});
    });