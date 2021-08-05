var distancia;
distancia =parseInt(prompt("distancia:"));
if (distancia >0 && distancia <=1000){
    document.write ("distancia a pie");
}else if(distancia >1000 && distancia <=10000){
    document.write("distancia en bici");
}else if(distancia >10000 && distancia <=30000){
    document.write ("distancia en colectivo");
}else 
if(distancia >30000 && distancia <=100000){
document.write ("distancia en auto");
}
else if (distancia >100000){
    document.write("distancia en avion");
}






