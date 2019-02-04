# Object

## Tasks

### is_object

Write a JavaScript function to check whether an `input` is an object or not.

### Create object car

Write an object that represents a car with three properties: `brand`, `model`, `color`. Add a method that shows the following message: 'My black Sean León is great!' (Hint: use `this`)

Use literal notation, and object constructor notation.

### The blockchain

From Wikipedia: a blockchain is a growing list of records, called blocks, which are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a merkle tree root hash).

That cryptographic hash of the previous block validates the entire chain and ensures that if any value on any block changes, all the subsequent blocks must change their hash in order to keep the chain valid.

* Create the block object function constructor with the following attributes: 
    * number: length of the chain where this block is located
    * timestamp: timestamp of the block creation
    * prevHash: hash of the previous block
    * data: any info

* Create the chain object function constructor with the following attributes and methods
    * blocks: array with the blocks added to the chain
    * addBlock: creates a new block and adds it to the chain
    * isValidChain: checks if every hash refference of each block is correct

HINT: hashfunction: 
```js
var hash = function(s) {
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
};
```

HINT2: init chain

function Chain(){
    blocks: [{
        number: 0,
        timestamp: new Date(),
        prevHash: ''
        data:''
    }],
    addBlock: function(data){
        //Obtiene el último bloque de la cadena

        //Obtiene el número del último bloque y suma 1

        //Calcular el timestamp

        //Calcular el hash del bloque actual:
        // llamar a hash(s) siendo s un string resultado de
        // concatenar los valores de number, timestamp, prevHash y data del
        // último bloque
    },
    isValidChain: function(){
        //Recorre la cadena y verifica que cada hash es válido
    }
}

