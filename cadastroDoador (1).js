// Um array para armazenar os doadores
const doadores = [];

// Função para cadastrar um doador
function cadastrarDoador() {
  const nome = prompt("Nome: ");
  const idade = (prompt("Idade: "));
  const peso = (prompt("Peso (em kg): "));
  const tipoSanguineo = prompt("Tipo Sanguíneo: ");
  const ultimaDoacao = prompt("Data da última doação (dd/mm/aaaa): ");

  const doador = {
    nome,
    idade,
    peso,
    tipoSanguineo,
    ultimaDoacao,
  };

  doadores.push(doador);
  console.log(doadores)
  alert("Doador cadastrado com sucesso!");
}

// Função para listar os doadores
function listarDoadores() {
  let resultado = "<h2>LISTAGEM DE DOADORES</h2>";
  resultado += "<table>";
  resultado += "<tr><th>NOME</th><th>IDADE</th><th>PESO</th><th>TIPO SANGUÍNEO</th><th>ÚLTIMA DOAÇÃO</th></tr>";
if (doadores.length !== 0){
  for (const doador of doadores) {
    resultado += `<tr><td>${doador.nome}</td><td>${doador.idade}</td><td>${doador.peso}</td><td>${doador.tipoSanguineo}</td><td>${doador.ultimaDoacao}</td></tr>`;
  }
} else {
  resultado += "Não há nenhum doador"
}
  resultado += "</table>";
  document.getElementById("resultado").innerHTML = resultado;
  //console.log(resultado);
}

// Função para buscar doadores por tipo sanguíneo
function buscarPorTipoSanguineo() {
  const tipoSanguineo = prompt("Digite o tipo sanguíneo desejado: ");
  //let resultado = `Digite o tipo sanguíneo desejado: ${tipoSanguineo}\n`;
  let resultado = "<h2>RESULTADO DA BUSCA</h2>"
  //resultado += "========================\n";
  //resultado += "RESULTADO DA BUSCA:\n";
  //resultado += "========================\n";
  resultado += "<table>";
  resultado += "<tr><th>NOME</th><th>IDADE</th><th>PESO</th><th>TIPO SANGUÍNEO</th><th>ÚLTIMA DOAÇÃO</th></tr>";

  for (const doador of doadores) {
    if (doador.tipoSanguineo === tipoSanguineo) {
      resultado += `<tr><td>${doador.nome}</td><td>${doador.idade}</td><td>${doador.peso}</td><td>${doador.tipoSanguineo}</td><td>${doador.ultimaDoacao}</td></tr>`
      //resultado += `Nome: ${doador.nome}\nIdade: ${doador.idade}\nPeso: ${doador.peso} kg\nTipo Sanguíneo: ${doador.tipoSanguineo}\nÚltima Doação: ${doador.ultimaDoacao}\n\n`;
    }
  }
  resultado += "</table>";
  document.getElementById("resultado").innerHTML = resultado;
  //console.log(resultado);
}

// Função para buscar doadores por data da última doação
function buscarPorDataUltimaDoacao() {
  const dataDesejada = prompt("Digite a data desejada (dd/mm/aaaa): ");
  let resultado = "<h2>RESULTADO DA BUSCA:</h2>";
  //let resultado = `Digite a data desejada: ${dataDesejada}\n`;
  resultado += "<table>";
  resultado += "<tr><th>NOME</th><th>IDADE</th><th>PESO</th><th>TIPO SANGUÍNEO</th><th>ÚLTIMA DOAÇÃO</th></tr>";

  //resultado += "========================\n";
  //resultado += "RESULTADO DA BUSCA:\n";
  //resultado += "========================\n";

  for (const doador of doadores) {
    if (doador.ultimaDoacao === dataDesejada) {
      resultado += `<tr><td>${doador.nome}</td><td>${doador.idade}</td><td>${doador.peso}</td><td>${doador.tipoSanguineo}</td><td>${doador.ultimaDoacao}</td></tr>`;
      //resultado += `Nome: ${doador.nome}\nIdade: ${doador.idade}\nPeso: ${doador.peso} kg\nTipo Sanguíneo: ${doador.tipoSanguineo}\nÚltima Doação: ${doador.ultimaDoacao}\n\n`;
    }
  }
  resultado += "</table>";
  document.getElementById("resultado").innerHTML = resultado;
  //console.log(resultado);
}

// Função para executar a ação com base na opção selecionada no menu suspenso
function executarAcao() {
  const opcoes = document.getElementById("opcoes");
  const opcaoSelecionada = opcoes.value;

  switch (opcaoSelecionada) {
    case "cadastrar":
      cadastrarDoador();
      break;
    case "listar":
      listarDoadores();
      break;
    case "buscarTipo":
      buscarPorTipoSanguineo();
      break;
    case "buscarData":
      buscarPorDataUltimaDoacao();
      break;
    case "sair":
      console.log("Encerrando o programa.");
      break;
    default:
      console.log("Opção inválida. Tente novamente.");
  }
}


