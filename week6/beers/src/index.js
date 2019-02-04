import './css/styles.scss';
var page = 1;
var per_page = 12;
var maxresult = 234;
var wide_results = 5;
var search_option = "beer_name";
var isSearch = false;
var initialURL = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${per_page}`;
var basicUrl = initialURL

function PaginationButtons(maxpag,wide,isSearch){
    $('.directnav #previous #next').unbind('click');
    var pages = `<li id="previous" class="page-item ${page===1?"disabled":""}" id="first">
        <a class="page-link" href="#!" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
        </a>
    </li>`
    if(!isSearch){
        if(page>wide){
            pages += `<li class="page-item">
                <a class="page-link directnav" href="#!" data-value="${page-wide-1}">...<span class="sr-only">(current)</span></a>
            </li>`
        }
        for(var i= page<=wide?i=1:page>=maxpag-wide?maxpag-wide*2:page-wide;(page<wide&&i<=wide*2&&i<=maxpag)||(page>wide&&(i<=maxpag&&i<=page+wide));i++){
            pages += `<li class="page-item ${page===i?"active":""}">
                <a class="page-link directnav" href="#!" data-value="${i}">${i} <span class="sr-only">(current)</span></a>
            </li>`
        }
        if(page<maxpag-wide){
            pages += `<li class="page-item">
                <a class="page-link directnav" href="#!" data-value="${page+wide+1}">...<span class="sr-only">(current)</span></a>
            </li>`
        }
    }
    pages+=`<li id="next" class="page-item ${page===maxpag?"disabled":""}">
        <a class="page-link" href="#!" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
        </a>
    </li>`
    $('.pagination').html(pages);
    $('.directnav').click(function(e){
        e.preventDefault()
        directNavigation($(this).data('value'));
    })
    $('#previous').not('.disabled').click(function(e){
        e.preventDefault()
        directNavigation(page-1);
    })
    $('#next').not('.disabled').click(function(e){
        e.preventDefault()
        directNavigation(page+1);
    })
}

function directNavigation(pagenumber){
    page=pagenumber;
    basicUrl = basicUrl.replace(/\?page=[0-9]*/,'?page='+pagenumber);
    getBeers();
}

function birraIngredients(ingredients){
    var message = "";
    for(var ingredient in ingredients){
        message += `<span class="text-success text-capitalize">${ingredient}:</span><br />`
        if(Array.isArray(ingredients[ingredient])){
            ingredients[ingredient].forEach(function(el){
                message+= `${el.name}<br />`;
            })
        } else {
            message += `${ingredients[ingredient]}<br />`
        }
    }
    return message;
}

function birraMethod(methods){
    var message = "";
    for(var method in methods){
        message += `<span class="text-success text-capitalize">${method}:</span><br />`
        if(method==='fermentation'){
            message += `Temperature: ${methods[method].temp.value} ${methods[method].temp.unit}`
        } else if(method==='mash_temp'){
            methods[method].forEach(function(el){
                for(var prop in el){
                    if(prop==="temp"){
                        message += `Temperature: ${el[prop].value} ${el[prop].unit} `
                    }else{
                        message+= `${prop}: ${el[prop]}`;
                    }
                } 
            })  
        }else{
            message += methods[method]!==null?`${methods[method]}<br />`:"Unknown";
        }
        message +='<br />'
    }
    return message;
}

function birraCard(birra){
    return `<div class="beer col-12 col-md-4 col-xl-3">
                <div class="image-card">    
                    <img src="${birra.image_url}" />
                </div>
                <div class="card-body">
                    <div class="beer-title card-title"><button class="text-dark" data-toggle="modal" data-target="#birra${birra.id}"><h3>${birra.name} <span class="birra-avg">${birra.abv}</h3></button></span></div>
                    <div class="beer-desc card-text">${birra.description}</div>
                </div>
            </div>`
}

function birraModal(birra){
    var del=true;
    if(localStorage.getItem("birras")!==null){
        var favorite = JSON.parse(localStorage.getItem("birras"));
        del = favorite.indexOf(birra.id) === -1
    }
    return `<div class="modal fade" id="birra${birra.id}" tabindex="-1" role="dialog" aria-labelledby="birra${birra.id}Label" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" id="birra${birra.id}Label">${birra.name}<span class="birra-avg">${birra.abv}</h3>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="image-card">    
                                <img src="${birra.image_url}" />
                            </div>
                            <div>
                                <h5>${birra.tagline}</h5>
                                <p><span class="text-info">Attenuation Level:<br /> </span>${birra.attenuation_level}</p>
                                <p><span class="text-info">Boil Volume:<br /> </span>${birra.boil_volume.value} ${birra.boil_volume.unit}</p>
                                <p><span class="text-info">Brewers Tips:<br /> </span>${birra.brewers_tips}</p>
                                <p><span class="text-info">Contributed By:<br /> </span>${birra.contributed_by}</p>
                                <p><span class="text-info">First Brewed:<br /> </span>${birra.first_brewed}</p>
                                <p><span class="text-info">Food Pairing:<br /> </span>${birra.food_pairing.join("<br />")}</p>
                                <p><span class="text-info">Ingredients:<br /> </span>${birraIngredients(birra.ingredients)}</p>
                                <p><span class="text-info">Method:<br /> </span>${birraMethod(birra.method)}</p>
                            </div>
                            <div><span class="text-info">Description:</span><br /> ${birra.description}</div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-${del?"primary":"danger"} favorite" data-value="${birra.id}">${del?'Add to Favorites':'Remove from Favorites'}</button>
                        </div>
                    </div>
                </div>
            </div>`
}

function getBeers(){
    PaginationButtons(Math.ceil(maxresult/per_page), wide_results, isSearch)
    $('#result').html('<p>Loading</p>');
    fetch(basicUrl)
        .then(recibeLasBirras)
        .then(muestraLasBirras)
}

function recibeLasBirras(cajadeBeers){
    return cajadeBeers.json();
}



function muestraLasBirras(beers){
    $('.favorite').unbind('click');
    $('#result').empty();
    if(beers.length>0){
        beers.forEach(birra => {
            $('#result').append(birraCard(birra));
            $('#modal').append(birraModal(birra));
        })
        $('.favorite').click(function(e){
            e.preventDefault();
            addToFavorite($(this).data('value'));
        })
    }else{
        $('#result').html('<h3>Sorry, We can\'t find any Beer with this parameters</h3>');
        $('.pagination').empty();
    }
}

function getMyBeers(){
    var favorites = JSON.parse(localStorage.getItem("birras"))
    if(favorites!==null){
        basicUrl = `https://api.punkapi.com/v2/beers?ids=${favorites.join('|')}`
        isSearch = true;
        getBeers()
        basicUrl = initialURL;
        isSearch = false;
    }else{
        $('#result').html('<h3>Sorry, you don\'t have any Favorite Beer selected in this computer</h3>')
        $('.pagination').empty();
    }
    
}

function addToFavorite(id){
    var favorites = localStorage.getItem("birras")!==null? JSON.parse(localStorage.getItem("birras")):[];
    var element = favorites.indexOf(id);
    if(element===-1){
        favorites.push(id);
    } else {
        favorites.splice(favorites.indexOf(id),1);
    }
    localStorage.setItem("birras",JSON.stringify(favorites));
    $('#birra'+id).modal('hide')
    getMyBeers();
}

function searchFunction(word){
    if(word!==""){
        if(search_option==="brewed_after" || search_option==="brewed_before"){
            var date = new Date(word);
            basicUrl = initialURL+"&"+search_option+"="+date.getMonth()+"-"+date.getFullYear();
        }else{
            var wordstr = word.replace(/\s/g,"_");
            basicUrl = initialURL+"&"+search_option+"="+wordstr;
            isSearch = true;
        }
        
    }else{
        isSearch = false;
        basicUrl = initialURL  
    }
    getBeers();
}

function numberResults(number){
    per_page = number;
    basicUrl = basicUrl.replace(/per_page=[0-9]*/,'per_page='+number);
    $('#dropdownMenu1').html(number);
    getBeers();
}

function StartApp(){
    $('.perpage').click(function(e){
        e.preventDefault();
        numberResults($(this).data('value'))
    })
    $('.searchoption').click(function(e){
        e.preventDefault();
        search_option = $(this).data('value')
        $('#dropDownSearch').html($(this).html());
        $('#searchinput').val("");
        if(search_option==="brewed_after" || search_option==="brewed_before"){
            $('#searchinput').attr('type','date');
        }else{
            $('#searchinput').attr('type','text');
        }
    })
    $('#searchform').bind('submit',function(e){
        e.preventDefault();
        searchFunction($('#searchinput').val());
    })
    $('.navbar-brand').click(function(e){
        searchFunction("");
    })
    $('#favorites').click(function(e){
        e.preventDefault();
        getMyBeers();
    })
    getBeers();
}
StartApp()