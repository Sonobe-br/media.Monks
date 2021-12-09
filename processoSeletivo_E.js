const greet = new Date();
const newHours = greet.getHours();
document.write(greet);

if (greet >= 0 && greet.getHours() < 5){
    document.write(" Volte pra cama! Ainda é madrugada!");
    const calendario = document.querySelector(".style-js");
    calendario.style.background = "#7fff00"; //green 
}else if(greet >= 5 && greet.getHours() < 12){
    document.write(" Já amanheceu! Bom dia com muita alegria!");
    const calendario = document.querySelector(".style-js");
    calendario.style.background = "#0000ff"; //blue
    calendario.style.color = "#ffffff";
}else if(greet >= 12 && greet.getHours() < 18){
    document.write(" Boa tarde! Você já almoçou?");
    const calendario = document.querySelector(".style-js");
    calendario.style.background =  "#ff4500"; //orangered
}else{
    document.write(" Boa noite! É hora de estudar 🎧 ");
    const calendario = document.querySelector(".style-js");
    calendario.style.background = "#800080"; //purple
    calendario.style.color = "#ffffff"; //white 
} 