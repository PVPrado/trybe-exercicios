const geraEmail = (nomeCompleto) => {
    return `${nomeCompleto.toLowerCase().replace(' ', '_')}@trybe.com`;
  };

  const idPessoaContratada = (callback) => {
    const pessoas = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva'),
    }
    return pessoas
  }

console.log(idPessoaContratada(geraEmail))