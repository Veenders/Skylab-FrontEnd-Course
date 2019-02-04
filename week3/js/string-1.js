function isString(string){
    return typeof string === "string";
}
console.log(isString('w3resource'));
console.log(isString([1,2,4,0]));

function isBlank(string){
    return string==='';
}
console.log(isBlank(''));
console.log(isBlank('abc'));

function stringToArray(string){
    return string.split(' ');
}
console.log(stringToArray("Robin Singh"));

function truncate(string,number){
    return string.slice(0,number);
}
console.log(truncate("Robin Singh",4));

function abbrev_name(string){
    return string.slice(0,string.indexOf(' ')+2)+".";
}
console.log(abbrev_name("Robin Singh"));

function protect(email){
    var arroba = email.indexOf("@");
    var protected = email.slice(0,arroba-6)+'...';
    protected+=email.slice(arroba);
    return protected;
}
console.log(protect("robin_singh@example.com"));

function parameterize(string){
    var result = string.replace(/ /g,"-");
    return result.replace(/\./g,'').toLowerCase();
}
console.log(parameterize("Robin Singh from USA."));

function capitalize_first(string){
    return string[0].toUpperCase() + string.substring(1);
}
console.log(capitalize_first('js string exercises'));

function capitalize_Words(string){
    position=0;
    string=string[0].toUpperCase() + string.substr(1);
    while(position!=-1){
        position = string.indexOf(" ",position+1);
        if(position!=-1){
            string = string.substr(0,position+1)+string[position+1].toUpperCase()+string.substr(position+2);
        }
        console.log(position);
    }
    return string;
}
console.log(capitalize_Words('js string exercises'));

function swapcase(string){
    result = "";
    for(var i=0; i<string.length; i++){
        if(string.charCodeAt(i)>91){
            result+=string[i].toUpperCase();
        }else{
            result+=string[i].toLowerCase();
        }
    }
    return result;
}
console.log(swapcase('AaBbCc'));

function camelize(string){
    position=0;
    while(position!=-1){
        position = string.indexOf(" ",position+1);
        if(position!=-1){
            string = string.substr(0,position)+string[position+1].toUpperCase()+string.substr(position+2);
        }
        console.log(position);
    }
    return string;
}
console.log(camelize('js string exercises'));

function uncamelize(string){
    result = "";
    for(var i=0; i<string.length; i++){
        if(string.charCodeAt(i)<91){
            result+=" "+string[i].toLowerCase();
        }else{
            result+=string[i];
        }
    }
    return result;
}
console.log(uncamelize(camelize('js string exercises')));

function repeat(string,number){
    var result = '';
    for(var i=0;i<number;i++){
        result += string;
    }
    return result
}
console.log(repeat('Ha!',3));

function insert(string,word,number=0){
    return string.slice(0,number)+word+" "+string.slice(number);
}
console.log(insert('We are doing some exercises.','Javascript'));
console.log(insert('We are doing some exercises.','Javascript',18));


