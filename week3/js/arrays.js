function isArray(array){
    return Array.isArray(array);
}
console.log(isArray('Skylab'));
console.log(isArray([3,5]));

function joinElements(array,symbol){
    symbol = symbol == undefined ? ',':symbol;
    return array.join(symbol);
}
console.log(joinElements(['John','George','Ringo','Paul']));
console.log(joinElements(['John','George','Ringo','Paul'],' '));

function array_Clone(array){
    var newarray = array.map(function(value){return value});
    return newarray;
}
array=[1, 2, 4, 0]
newarray = array_Clone(array);
console.log(array); 
console.log(newarray);
newarray[0]=5;
console.log(array)
console.log(newarray);

function flatArray(array){
    var result=[];
    for(var i=0;i<array.length;i++){
        if(Array.isArray(array[i])){
            result = result.concat(flatArray(array[i]));
        }else{
            result.push(array[i]);
        }
    }
    return result;
}

function findDifferences(array1, array2){
    result = [];
    newarray1 = flatArray(array1);
    newarray2 = flatArray(array2);
    for(var i=0;i<newarray1.length;i++){
        if(!newarray2.includes(newarray1[i])){
            result.push(newarray1[i]);
        }
    }
    for(var i=0;i<newarray2.length;i++){
        if(!newarray1.includes(newarray2[i])){
            result.push(newarray2[i]);
        }
    }
    return result;
}
console.log(findDifferences([1, 2, 3], [100, 2, 1, 10]));
console.log(findDifferences([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
console.log(findDifferences([1, 2, 3], [100, 2, 1, 10]));


function sumAndProduct(array){
    var resultsum=0;
    var resultproduct=1;
    for(var i=0;i<array.length;i++){
        resultsum += array[i];
        resultproduct *= array[i];
    }
    return [resultsum, resultproduct]
}
console.log(sumAndProduct([1, 2, 3, 4, 5]));

function addItems(){
    var result=[];
    for(var i=0;i<arguments.length;i++){
        Array.isArray(arguments[i])?result=result.concat(flatArray(arguments[i])):result.push(arguments[i]);
    }
    return result;
}
console.log(addItems([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]))

function generateArrayLength(number,length){
    var result = [];
    for (var i=0; i<length;i++){
        result.push(number+i);
    }
    return result;
}
console.log(generateArrayLength(1, 4)); 
console.log(generateArrayLength(-6, 4));

function last(array,position){
    position==undefined && (position=1);
    return array.slice(position*-1);
}
console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6));

function sortItems(array){
     return array.sort(function(a,b){return a-b});
}
console.log(sortItems([ 3, 8, 7, 6, 5, -4, -3, 2, 1 ]));

function getRandom(array){
    return array[parseInt(Math.random()*array.length)];
}

console.log(getRandom([ 3, 8, 7, 6, 5, -4, -3, 2, 1 ]));
console.log(getRandom([ 3, 8, 7, 6, 5, -4, -3, 2, 1 ]));
console.log(getRandom([ 3, 8, 7, 6, 5, -4, -3, 2, 1 ]));

function findDuplicates(array){
    var object={};
    var result=[];
    for(var i=0;i<array.length-1;i++){
        array.includes(array[i],i+1)?object[array[i].toString()]=true:"";
    }
    for(prop in object){
        result.push(prop)
    }
    return result;
}
console.log(findDuplicates([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));

function findDuplicates2(array){
    var result=[]
    for(var i=0;i<array.length-1;i++){
        if(array.includes(array[i],i+1)){
            var removeElement = array[i];
            removeElement!==undefined?result.push(removeElement):"";
            while (array.indexOf(removeElement) !== -1) {
                delete array[array.indexOf(removeElement)];
              }
        }
    }
    return result;
}
console.log(findDuplicates2([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));

function mergeArrays(array1,array2){
    var object={};
    var result=array1.concat(array2);
    for(var i=0; i<result.length;i++){
        object[result[i]]=true;
    }
    result=[]
    for(prop in object){
        result.push(prop);
    }
    return result;
}
console.log(mergeArrays([1, 2, 3],[2, 30, 1]));

function separateEven(number){
    var initialString = number.toString();
    var result=initialString[0];
    for(var i=1; i<initialString.length;i++){
        if(initialString[i]%2==0 && initialString[i-1]%2 ==0){
            result += "-"+initialString[i];
        }else{
            result += initialString[i];
        }
    }
    return result;
}
console.log(separateEven("02546888"));

function mostFequentItem(array){
    var counter={}
    var result={element:0,number:0}
    for(var i=0; i<array.length;i++){
        counter[array[i]]== undefined? counter[array[i]]=1: counter[array[i]]+=1;
    }
    for(props in counter){
        if(result.number<counter[props]){
            result.element=props;
            result.number=counter[props];
        }
    }
    return "The element "+result.element+" is "+result.number+" times in the array";
}
console.log(mostFequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3,3,3]))

function moveElement(array,position,move){
    var element=array.splice(position,1);
    array.splice(move,0,element[0]);
    return array;
}
console.log(moveElement([10, 20, 30, 40, 50],0,2))
console.log(moveElement([10, 20, 30, 40, 50], -1, -2));

function swapCase(string){
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
console.log(swapCase('AaBbCc'));

function printArray(array){
    var result=""
    for(var i=0;i<array.length;i++){
        result+="row "+i+"\n";
        for(var j=0;j<array[i].length;j++){
            result+=" "+array[i][j]+"\n";
        }
    }
    return result;
}
console.log(printArray([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]));

function array_filled(number,string){
    var result=[]
    for(var i=0;i<number;i++){
        result.push(string);
    }
    return result;
}
console.log(array_filled(3,'default value'));
console.log(array_filled(4,'password'));

function sumOfSquares(array){
    var result=0;
    for(var i=0;i<array.length;i++){
        result+=array[i]*array[i];
    }
    return result;

}
console.log(sumOfSquares([8, 11, 9, 4]))

function removeDuplicate(array){
    var object={};
    var result=[];
    for(var i=0;i<array.length;i++){
        var element = typeof array[i]==="string"?array[i].toLowerCase():array[i];
        object[element]=true;
    }
    for(prop in object){
        result.push(prop);
    }
    return Array.from(result);
}
console.log(removeDuplicate([5,4,34,5,4,65,5,6,7,8,"Hola","hola"]))

function showChoices(color){
    var o = ["th","st","nd","rd"]
    var message=""
    for(var i=0;i<color.length;i++){
        var position = i+1;
        message += position+o[position<4?position:0]+" choice is "+color[i]+"\n";
    }
    return message;
}
console.log(showChoices(["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]));

function showLeapYears(startyear,finishyear){
    year = startyear;
    LeapYears=[]
    while(year!=finishyear){
        if(year%4===0){
            LeapYears.push(year)
        }
        year++;
    }
    return LeapYears;
}
console.log(showLeapYears(1970,2018));

function shuffleArray(array){
    var result = []
    if(array.length==1){
        return array;
    }
    result.push(array.splice(Math.floor(Math.random()*array.length),1));
    return result.concat(shuffleArray(array)).join().split(",");

}
console.log(shuffleArray(["Blue ", "Green", "Red"]))
console.log(shuffleArray(["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]))

function binarySearch(items,element){
    var index = Math.floor(items.length/2);
    var startSearch = 0;
    var finishSearch = items.length;
    while(items[index]!=element&&finishSearch-startSearch>1){
        element<=index?finishSearch=index:startSearch=index;
        index=Math.floor((startSearch+finishSearch)/2)
    }
    if(items[index]==element){
        return index;
    }else{
        return -1;
    }
    
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9],1))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9],5))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9],9))
for (var i=1;i<11;i++){
    console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9],i))
}

function sumPositions(array1,array2){
    var result=[];
    var length = array1.length>array2.length?array1.length:array2.length;
    for(var i=0;i<length;i++){
        var num1 = array1[i]!=undefined?array1[i]:0;
        var num2 = array2[i]!=undefined?array2[i]:0;
        result[i]=num1+num2;
    }
    return result;
}
console.log(sumPositions([1,0,2,3,4],[3,5,6,7,8,13]))

function rangeBetween(start,end){
    var result = [];
    for(i=start;i<=end;i++){
        result.push(i);
    }
    return result;
}
console.log(rangeBetween(4,7));
console.log(rangeBetween(-4,7));

