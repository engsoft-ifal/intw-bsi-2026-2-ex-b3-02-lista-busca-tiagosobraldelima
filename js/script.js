// Dados prontos — não precisa mudar.
const cursos = [
  { nome: "HTML", area: "Estrutura" },
  { nome: "CSS", area: "Estilo" },
  { nome: "JavaScript", area: "Comportamento" },
];

const lista = document.querySelector("#lista");
const busca = document.querySelector("#busca");

// TODO 1: escreva a função render(filtro) que preenche a #lista com um <li>
//         para cada curso cujo NOME contenha o filtro (use filter + map).
//         Se nenhum curso passar, mostre um <li> com "Nada encontrado".
//
// TODO 2: chame render() ao carregar a página e a cada evento "input" na busca.

// escreva seu código aqui

function render(filtro = "") {
  const textoDigitado = filtro.toLowerCase();

  // Filtra os cursos verificando se o nome contém o que foi digitado
  const cursosFiltrados = cursos.filter(function (curso) {
    const nomeDoCurso = curso.nome.toLowerCase();
    return nomeDoCurso.includes(textoDigitado);
  });

  // Nenhum curso corresponder à busca? É exibida a mensagem padrão
  if (cursosFiltrados.length === 0) {
    lista.innerHTML = "<li>Nada encontrado</li>";
  } else {
    // Transforma cada curso encontrado em um item <li>
    const itens = cursosFiltrados.map(function (curso) {
      return `<li>${curso.nome}</li>`;
    });

    // Junta tudo em um único texto e coloca dentro da #lista
    lista.innerHTML = itens.join("");
  }
}

// Atualiza a lista toda vez que o usuário digita na busca
busca.addEventListener("input", function () {
  render(busca.value);
});

// Exibe todos os cursos assim que a página carrega
render();