function is_object(element){
    return typeof element ==="object";
}
console.log(is_object("string"));
console.log(is_object(5));
myObject={};
console.log(is_object(myObject));

function car(brand,model,color){
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.message = function(){
        return "My "+this.color+" "+this.brand+" "+this.model+" is great!";
    }
}
var Seat = new car("Seat","Leon","black");
console.log(Seat.message());

//Exercici BlockChain
function Block(number, hash, data){
    this.number=number;
    this.timestamp = +new Date();
    this.prevHash = hash;
    this.data = data;
    this.getNumber=function(){
        return this.number;
    }
    this.getStringHash=function(){
        return this.number+this.timestamp+this.prevHash+this.data;
    }
    this.getHash=function(){
        return this.prevHash;
    }
}

function Chain(){ 
    
    this.blocks= [new Block(0,'','')];
    this.hash = function(s) {
        var a = 1, c = 0, h, o;
        if (s) {
            a = 0;
            for (h = s.length - 1; h >= 0; h--) {
                o = s.charCodeAt(h);
                a = (a<<6&268435455) + o + (o<<14);
                c = a & 266338304;
                a = c!==0?a^c>>21:a;
            }
        }
        return String(a);
    }
    this.addBlocks = function(data){
        var blocks=this.blocks;
        var block = blocks[blocks.length-1];
        var newblock = new Block(block.getNumber()+1,this.hash(block.getStringHash()),data);
        blocks.push(newblock);
    }
    this.isValidChain = function(){
        var blocks=this.blocks;
        var result = true;
        var length = blocks.length-1;
        for(var i=length;i!=0;i--){
            result = blocks[i].getHash()===this.hash(blocks[i-1].getStringHash())?true:false;
            if(result==false){
                return "Block number "+[i-1]+" is corrupted. This isn't a Valid Chain";
            }
        }
        return "This chain is valid";
    }
}
var chain= new Chain();
for(var i=0;i<10;i++){
    chain.addBlocks("Transaction "+i+" of 10");
}
console.log(chain.isValidChain());
chain.blocks[5].prevHash=0;
console.log(chain.isValidChain());