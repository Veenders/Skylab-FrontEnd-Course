function capitalCase(array){
    return array.map(function(el){
        return el[0].toUpperCase()+el.substr(1);
    })
}
console.log(capitalCase(['january','february','march','april','may','june','july','august', 'september','october','november','december']))

function someMonths(array){
    return array.filter(function(el){
        return el[0]==="j";
    })
}
console.log(someMonths(['january','february','march','april','may','june','july','august', 'september','october','november','december']))

var loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
function countVowels(string){
    array=string.split('');
    var regExp=/(a|e|i|o|u)/
    return array.reduce(function(vowelsnum,letter){
        return letter.match(regExp)===null?vowelsnum:vowelsnum+1;
        switch(letter){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                return vowelsnum+1;
            default:
                return vowelsnum;
        }
    },0)
}
console.log(countVowels(loremIpsum))

function allGreatThanFiveLetters(array){
    return array.every(function(el){
        return el.length>5;
    })
}

function someGreatThanFiveLetters(array){
    return array.some(function(el){
        return el.length>5;
    })
}
console.log(allGreatThanFiveLetters(['january','february','march','april','may','june','july','august', 'september','october','november','december']))
console.log(someGreatThanFiveLetters(['january','february','march','april','may','june','july','august', 'september','october','november','december']))

function callback(age, fnallowed){

    return age>=18? fnallowed():"You are not allowed";

    
}

console.log(callback(18, function(){return "You are allowed to entry to the Bar"}))
console.log(callback(23, function(){return "You are allowed to entry to the Bar"}))
console.log(callback(15, function(){return "You are allowed to entry to the Bar"}))