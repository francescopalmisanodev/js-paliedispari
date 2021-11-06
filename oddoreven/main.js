let scelta,num,nrand;

do{   
    scelta=prompt("scegli pari o dispari:");
    scelta=scelta.toLowerCase();
}while(!(scelta==="pari"||scelta==="dispari"))
do{   
    num=parseInt(prompt("inserisci un numero da 1 a 5:"));
}while(isNaN(num) || !(num>=0 && num<=5))

nrand=rnd(5);
nrand+=num;
check(nrand);

function rnd(n){
    return(Math.floor(Math.random()*n)+1);
}
function check(n){
    if(n%2===0 && scelta==="pari" || !(n%2===0) && scelta==="dispari"){
        console.log("hai vinto");
    }else {
        console.log("hai perso");
    }
}