const parola=prompt("inserisci la parola:");
let bool=check(parola)
if(bool){
    prompt("la parola è palindroma");
}else{
    prompt("la parola non è palindroma");
}
function check(word){
    let result = false;
    for (let i = 0; i < word.length; i++) {
        if (!(word[i]==word[word.length-i])){
            return result;
        }
    }
    result=true;
    return result;
}