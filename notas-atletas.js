let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];

for (let atleta = 0; atleta < atletas.length; atleta++) {
  console.log(`Atleta: ${atletas[atleta].nome}`);
  console.log(`Notas Obtidas: ${atletas[atleta].notas}`);

  atletas[atleta].notas = atletas[atleta].notas.sort((a, b) => a - b);
  let notasValidas = atletas[atleta].notas.slice(1, 4);
  let notasSomadas = notasValidas.reduce((total, atual) => total + atual);
  let mediaValida = notasSomadas / notasValidas.length;
  
  console.log(`Média válida: ${mediaValida}`);
  console.log(" ");
}