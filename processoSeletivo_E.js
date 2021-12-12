let frase = "Processo Seletivo: Teste de Programação";

let letraInvestigada = "o";

let totalEclipseInTheHeart = [...frase].filter(letra => letra === letraInvestigada).length;

console.log(`String: Processo Seletivo - Teste de Programação  
Element: "o" 
Result: ${totalEclipseInTheHeart} vezes`);