const double = (a) => a *2;
console.log(double(2));
const calcul=(prix,taux)=>prix*taux;
const calcul2=(prix)=>{
    if(prix>100) 
        return 0.1*prix
    else
        return 0.05*prix;
}
const calcul3=(prix)=>prix>100 ? 0.1*prix : 0.05*prix;
console.log(calcul3(100,0.2));
console.log(calcul3(100));
console.log(calcul3(100));

const fruitsRouge=['fraise','cerise','pomme'];
for(let fruit of fruitsRouge){
    console.log(`la${fruit} c'estbon !`);
}
fruitsRouge.forEach((fruit)=>
    console.log(`la ${fruit} c'est bon !`));
const nombres=[1,2,3,4,5];
let Double=nombres.map(n=>n*2);
console.log(Double);
//POUR SE DEPLACER DANS LE TABLEAU CD DANS TERMINAL
let d2=nombres.forEach(n=>console.log(n*2));
let paire=nombres.filter(n=>n%2==0);
console.log(paire);
//destrustring objet spred
