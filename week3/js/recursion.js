function removeRepeatChars(string,result={}){
    var el=string.substring(0,1);
    result[el]=el;
    if(string.length>1){
        return removeRepeatChars(string.substring(1),result);
    } else {
        return Object.keys(result).join();
    }    
}
console.log(removeRepeatChars('aabcbcb'));

function reverseString(string){
    letter = string.substr(-1);
    return string.length === 1 ? letter : letter + reverseString(string.substring(0,string.length-1));

}
console.log(reverseString("Hola que tal"));
