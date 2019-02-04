import './css/styles.scss';
require.context("./img/", true, /\.(png|svg|jpg|gif)$/);

let users = [];
let timer;

class User {
    constructor(result){
        var user = result.results[0]
        for(var prop in user){
            this[prop] = user[prop];
        }
    }
    drawUser(){
        return `
            <div id="${this.id.name}${this.id.value}" class="userdiv">
            <section class="userheader">
                <img class="profileimg" src="${this.picture.large}" alt="">
                <div class="personaldata">
                    <img class="country" src="/${this.nat.toLowerCase()}.svg" alt="">
                    <div class="personalinformation">
                        <h1>${this.name.title}. ${this.name.first} ${this.name.last}</h1>
                        <p>
                            <span class="element">birthday: </span>${new Date(this.dob.date).toLocaleDateString()}<br />
                            <span class="element">age: </span>${this.dob.age} years<br />
                        </p>
                    </div>
                </div>
            </section>
            <section class="userlocation">
                <h3>Location</h3>
                <p>
                    <span class="element">street: </span>${this.location.street}<br />
                    <span class="element">city: </span>${this.location.city}<br />
                    <span class="element">ctate: </span>${this.location.state}<br />
                    <span class="element">post code: </span>${this.location.postcode}<br />
                </p>
            </section>
            <section class="usercontact">
                <h3>Contact</h3>
                <p>
                    <span class="element">e-mail: </span>${this.email}<br />
                    <span class="element">phone: </span>${this.phone}<br />
                    <span class="element">cell: </span>${this.cell}<br />
                </p>
            </section>
            <section class="userdata">
                <h3>Site Data</h3>
                <p>
                    <span class="element">username: </span>${this.login.username}<br />
                    <span class="element">password: </span>${this.login.password}<br />
                    <span class="element">uuid: </span>${this.login.uuid}<br />
                    <span class="element">Registration: </span>${new Date(this.registered.date).toLocaleDateString()}<br />
                    <span class="element">antiquity: </span>${this.registered.age} years<br />
                </p>
            </section>
            </div>
        `;
    }
}

class App{
    constructor(){ 
        this.seconds = 10;
        this.automatic = false;
        this.fetchDades();

        this.getRandomUser = this.getRandomUser.bind(this);
        // this.getAutomaticUser = this.getAutomaticUser.bind(this);
        this.stopAutomaticUser = this.stopAutomaticUser.bind(this);
        this.changeSeconds = this.changeSeconds.bind(this);
        var self = this;
        
        $("#newUser").click(this.getRandomUser);
        $("#automaticUser").click(function(e){ self.getAutomaticUser.call(self, e) });
        $("#stopAutomatic").click(this.stopAutomaticUser);
        $("#seconds").change(this.changeSeconds);
    }
    fetchDades(){
        fetch('https://randomuser.me/api/')
            .then(this.processJson)
            .then(this.processUser)
    }
    
    processJson(dades){
        console.log("recibiendo datos");
        return dades.json();
    }

    processUser(dades){
        let user = new User(dades);
        $('main').append(user.drawUser());
        console.log(user);
        users.push(user) 
    }

    getRandomUser(e){
        e.preventDefault();
        this.fetchDades();
    }

    getAutomaticUser(e){
        e.preventDefault();
        console.log(this);
        this.stopAutomaticUser(e);
        this.automatic = true;
        timer = setInterval(function(){
            this.fetchDades();
        }, this.seconds*1000);
    }

    stopAutomaticUser(e){
        e.preventDefault();
        this.automatic = false;
        clearInterval(timer);
    }

    changeSeconds(e){
        this.seconds = $('#seconds').val();
        if(this.automatic){
            this.getAutomaticUser(e);
        }
    }
}

const app = new App();
