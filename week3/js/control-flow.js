//Tasks

//Larger Integer
function largerInteger(numA, numB){
    return numA == numB ? "Son iguales" : numA>numB ? numA+" es mayor que "+numB : numB+" es mayor que "+numA
}
console.log("Function Larger Integer: "+largerInteger(5,5));
console.log("Function Larger Integer: "+largerInteger(5,7));
console.log("Function Larger Integer: "+largerInteger(5,3));

//sign product
function sign_product(numA, numB, numC){
    result = numA*numB*numC;
    return result>=0? "The sign is +" : "The sign is -";
}
console.log("Function sing Product: "+sign_product(3,-7,2));
console.log("Function sing Product: "+sign_product(3,7,2));
console.log("Function sing Product: "+sign_product(-3,-7,2));

//sort number
function sort_number(numA, numB, numC){
    var result;
    if(numA>numB){
        if(numA>numC){
            result = numB>numC?[numA,numB,numC]:[numA,numC,numB];
        } else{
            result = [numC,numA,numB];
        }
    }else{
        if(numB>numC){
            result = numA>numC?[numB,numA,numC]:[numB,numC,numA];
        } else{
            result = [numC,numB,numB];
        }
    }
    return result;
}
console.log("Function sort_number(0,-1,4): "+sort_number(0,-1,4))
console.log("Function sort_number(-1,4,0): "+sort_number(-1,4,0))
console.log("Function sort_number(4,0,-1): "+sort_number(4,0,-1))

function largest_number(){
    var result;
    for(var i=1;i<arguments.length;i++){
        if(i==0){
            result = arguments[i]>arguments[i-1]?arguments[i]:arguments[i-1];
        }else{
            result = result>arguments[i]?result:arguments[i];
        }
    }
    return result;
}
console.log("Function largest_number(-5,-2,-6,0,-1): "+largest_number(-5,-2,-6,0,-1));
console.log("Function largest_number(-5,2,-6,0,-1): "+largest_number(-5,2,-6,0,-1));
console.log("Function largest_number(-5,2,6,0,1): "+largest_number(-5,2,6,0,1));

function odd_or_even(){
    for(var i=0;i<=15;i++){
        if(i%2==0){
            console.log(i+" is even");
        }else{
            console.log(i+" is odd");
        }
    }
}
odd_or_even();

function FizzBuzz(){
    for(var i=0;i<=100;i++){
        if(i%3==0){
            i%5==0?console.log(i+" is FizzBuzz"):console.log(i+" is Fizz")
        }else{
            i%5==0?console.log(i+" is Buzz"):console.log(i);
        }
    }
}
FizzBuzz();

function construct_pattern(){
    var asterisc="";
    for(var i=0;i<5;i++){
        for(var j=0;j<=i;j++){
            asterisc+="* ";
        }
        asterisc+="\n";
    }
    console.log(asterisc);
}
construct_pattern();

function under_1000(){
    var result=0;
    for(var i=0;i<=1000000000;i++){
        result= (i%3==0 || i%5==0)? result+=i : result;
    }
    return result;
}
console.log("The under_1000 result is: "+under_1000());