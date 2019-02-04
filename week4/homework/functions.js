function stringCalculator(string){
    var numbers = string.split(",");
    var result = 0;
    numbers.forEach(function(num){
        result += parseInt(num);
    })
    return result;
}
console.log(stringCalculator("1,2,3,4"));

function isPalindrome(string){
    var array = string.replace(/\s/g,"").toLowerCase().split("");
    var arrayrev = array.map(function(e){
        return e;
    });
    arrayrev.reverse()
    for (var i= 0; i<array.length;i++){
        if(array[i]!=arrayrev[i]){
            return false
        }
    }
    return true;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("nurses run"));
console.log(isPalindrome("Carles"));

function Matrix(num){
    var matrix=[]
    for(var i = 0; i<num; i++){
        var row = []
        for(var j=0;j<num; j++){
            var element = i===j?1:0;
            row.push(element);
        }
        matrix.push(row);
    }
    return matrix;
}
console.log(Matrix(5));
console.log(Matrix(3));
console.log(Matrix(25));

function perfectNumbers(num){
    var divisors=[];
    for(var i=num; i>0;i--){
        if(num%i===0){
            divisors.push(i);
        }
    }
    var sum = 0;
    sum = divisors.reduce(function(total,el){
        return total+=el;
    },sum)
    return sum/2===num;
}
console.log(perfectNumbers(6));
console.log(perfectNumbers(28));
console.log(perfectNumbers(8));

function Coinify(num,coins){
    var i=0;
    var finished = true;
    var coin = []
    while(finished){
        if(num-coins[i]>=0){
            coin.push(coins[i]);
            num = num-coins[i];
        }else{
            i++;
        }
        finished = i===coins.length || num ===0 ? false:true;
    }
    return coin;
}
console.log(Coinify(46, [25, 10, 5, 2, 1]));
console.log(Coinify(69, [25, 10, 5, 2, 1]));

function bubbleSort(array){
    var length = array.length;
    for (var i = 0; i < length; i++) { 
        for (var j = 0; j < (length - i - 1); j++) { 
            if(array[j] < array[j+1]) {
                var tmp = array[j];  
                array[j] = array[j+1];
                array[j+1] = tmp;
            }
        }        
    }
    return array;
}
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

function bubble_Sort(a)
{
    var swapp;
    var n = a.length-1;
    var x = a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}

console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

function functionName(){
    var name = functionName.name;
    return name;
}
console.log(functionName());