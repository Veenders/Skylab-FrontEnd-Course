function Person(firstName,lastName,age,gender,interests){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender==="m"|gender==="male"|gender==="masculine"?"m":"f";
    this.interests = interests!=undefined?interests:[];
    this.greeting = function(){
        return "Hi! I'm "+this.firstName;
    }
    this.farewell = function(){
        return this.firstName+" has left the building. Bye for now!";
    }
    this.bio = function(){
        message = this.firstName+" "+this.lastName+" is "+this.age+" years old ";
        message += this.gender==="m"?"He":"She";
        switch(this.interests.length){
            case 0:
                message += " don't say interests";
                break;
            case 1:
                message += " likes "+this.interests[0];
                break;
            default:
                var last = this.interests.pop();
                message += " likes "+this.interests.join(", ")+" and "+last;
                this.interests.push(last);
        }
        return message;
    }
}

function Student(firstName,lastName,age,gender,interests){
    Person.call(this,firstName,lastName,age,gender,interests);
    this.greeting = function(){
        return "Yo! I'm "+this.firstName;
    }
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

function Teacher(firstName,lastName,age,gender, subject, interests){
    Person.call(this,firstName,lastName,age,gender,interests);
    this.subject = subject;
    this.greeting = function(){
        var message = "Hello. My name is ";
        message += this.gender==="m"?"Mr. ":"Mrs. ";
        message += this.lastName+" and I teach "+this.subject;
        return message;
    }
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

var persona = new Person("Pepe","Perez",20,"male",["play football"]);
console.log("Persona")
console.log(persona.greeting());
console.log(persona.bio())


var Estudiante = new Student("Carles","Vila",40,"male",["developing tools","si-fi"]);
console.log("Estudiante")
console.log(Estudiante.greeting());
console.log(Estudiante.bio())

var Teacher = new Teacher("Juliana","Smith",40,"female","English Literature");
console.log("Teacher")
console.log(Teacher.greeting());
console.log(Teacher.bio())