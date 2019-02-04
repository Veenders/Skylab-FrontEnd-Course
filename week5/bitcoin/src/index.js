import './css/styles.scss';
var chain;

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
    this.drawBlock = function(){
        var date = new Date();
        date.setTime(this.timestamp);
        var htmlstring = '<div class="block" id="block'+this.number+'"><h4>Block id: '+this.number+'</h4>';
        htmlstring += '<p>Created at: '+date.toGMTString()+'</p>';
        htmlstring += '<p>Previous Hash: '+this.prevHash+'</p>';
        htmlstring += '<p><strong>Data:</strong><br />'+this.data+'</p></div>';
        return htmlstring;
    }
}

function blankBlock(){
    this.getNumber=function(){
        return this.number;
    }
    this.getStringHash=function(){
        return this.number+this.timestamp+this.prevHash+this.data;
    }
    this.getHash=function(){
        return this.prevHash;
    }
    this.drawBlock = function(){
        var date = new Date();
        date.setTime(this.timestamp);
        var htmlstring = '<div class="block" id="block'+this.number+'"><h4>Block id: '+this.number+'</h4>';
        htmlstring += '<p>Created at: '+date.toGMTString()+'</p>';
        htmlstring += '<p>Previous Hash: '+this.prevHash+'</p>';
        htmlstring += '<p><strong>Data:</strong><br />'+this.data+'</p></div>';
        return htmlstring;
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
    this.storageChain = function(){
        localStorage.setItem('chain',JSON.stringify(this.blocks));
    }
}

function corruptChain(){
    var corrupt = Math.floor(Math.random()*chain.blocks.length);
    corrupt===0?corrupt++:corrupt;
    chain.blocks[corrupt].prevHash=0;
    chain.storageChain();

}

function addBlock(){
    chain.addBlocks($('#blockValue').val());
    chain.storageChain();
    $('.coin').append(chain.blocks[chain.blocks.length-1].drawBlock());
}

function newChain(){
    chain = new Chain();
    chain.storageChain();
    $('.coin').html("");
    chain.blocks.forEach(function(block){
        $('.coin').append(block.drawBlock());
    })
}

function checkChain(){
    $('.coin').prepend(chain.isValidChain());
}

function hideModal(){
    $('#modal').hide();
    $('#modalBackground').hide();
    $('#addBlock').unbind('submit');
    $('#cancel').unbind('click');
}

function showModal(){
    $('#modal').show().css('display','flex');
    $('#modalBackground').show().css('display','flex');
    $('#addBlock').bind('submit',function(e){
        e.preventDefault();
        addBlock();
        hideModal();
    })
    $('#cancel').click(function(e){
        e.preventDefault();
        hideModal();
    })
}

function initBlockChain(){
    chain = new Chain();
    var basicblock = new blankBlock();
    if(localStorage.getItem('chain')!=null){
        chain.blocks = JSON.parse(localStorage.getItem('chain'))
    }
    chain.blocks.forEach(function(block){
        $.extend(block,basicblock);
        console.log(block);
        $('.coin').append(block.drawBlock());
    })
    $('#newChain').click(function(e){
        e.preventDefault();
        newChain();
    })
    $('#addBlockBtn').click(function(e){
        e.preventDefault();
        showModal();
    })
    $('#checkChain').click(function(e){
        e.preventDefault();
        checkChain();
    })
    $('#corruptChain').click(function(e){
        e.preventDefault();
        corruptChain();
    })
    JSON.stringify(chain.blocks)!==localStorage.getItem('chain')?chain.storageChain():"";
}

initBlockChain();