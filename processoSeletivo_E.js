let frase = "Processo Seletivo: Teste de Programação";

let letraInvestigada = "o";

let totalEclipseInTheHeart = [...frase].filter(letra => letra === letraInvestigada).length;

console.log(`A letra investigada foi encontrada ${totalEclipseInTheHeart} vezes`);