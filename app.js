//Object Literals, Pseudo Classes and methods
//1.
const person1 = {
    name : 'Jenna',
    sayHello : function(){
        console.log(`Hello! My name is ${this.name}`)
    }
}
const person2 = {
    name : 'Lannie',
    sayHello : function(){
        console.log(`Hello! My name is ${this.name}`)
    }
}
const person3 = {
    name : 'Jim',
    sayHello : function(){
        console.log(`Hello! My name is ${this.name}`)
    }
}

const person4 = {
    name : 'May',
    sayHello : function(){
        console.log(`Hello! My name is ${this.name}`)
    }
}

const person5 = {
    name : 'Winnie',
    sayHello : function(){
        console.log(`Hello! My name is ${this.name}`)
    }
}

//2.
person1.sayHello()
person2.sayHello()
person3.sayHello()
person4.sayHello()
person5.sayHello()

//3

function Person (name, age , city){
    this.name = name;
    this.age = age;
    this.city =  city;
    
    }

Person.prototype.greeting = function (){
    console.log(`"Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}"`)
}
//4
const p1 = new Person( 'Jenna','10', 'Seoul');
const p2 = new Person ('Lannie', '8', 'Auburn');
const p3 = new Person ( 'JIm','44','Dadeville');
const p4 = new Person ('May','38','Alexander City');
const p5 = new Person ( 'Winnie','5','Orange Beach');

p1.greeting();
p2.greeting();
p3.greeting();
p4.greeting();
p5.greeting();

//5.

class Friend {
    constructor(name, age, city){
        this.name = name;
        this.age = age;
        this.city =  city; 

    }
    greeting(){
        console.log(`"Hey! yo! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}"`) 
    }
}

const friend1 = new Friend ('Alice','14', 'Kansas City');
const friend2 = new Friend ('Jennifer', '5', 'Fresno');
const frined3 = new Friend ('Kyle','77','Houston');
const frined4 = new Friend ('Sam','56','Columbus');
const friend5 = new Friend ('Kim','33','Prattville');

console.log(friend1);
console.log(friend2);
// console.log(friend3);
// console.log(friend4);
console.log(friend5);


friend1.greeting();
friend2.greeting();
// friend3.greeting();
// friend4.greeting();
friend5.greeting();

// Inheritance

//1.
class Vehicle{
    constructor(manufacturer, numOfWheels){
        this.manufacturer = manufacturer;
        this.numOfWheels =  numOfWheels;

    }
    aboutVehicle(){
        console.log(`This vehicle is manufacture by ${this.manufacturer} and has ${this.numOfWheels} wheels.`)
    }
}

// 3.

class Truck extends Vehicle{
    constructor(manufacturer, numOfWheels ,  numOfDoors, truckBed){
        super(manufacturer,numOfWheels);
        this.numOfDoors = numOfDoors;
        this.truckBed = truckBed;

    }
    aboutVehicle(){
        if(this.truckBed == true){
            console.log(`This truck is manufacture by ${this.manufacturer} and has ${this.numOfWheels} wheels. It has ${this.numOfDoors} doors. It has  a truck bed`)
        }else {
            console.log(`This truck is manufacture by ${this.manufacturer} and has ${this.numOfWheels} wheels. It has ${this.numOfDoors} doors. It has doesn't have a truck bed`)
       
        }
    }
   
}
//4.
class Sedan extends Vehicle{
    constructor(manufacturer, numOfWheels ,  numOfDoors, size, mpg){
        super(manufacturer,numOfWheels);
        this.numOfDoors = numOfDoors;
        this.size = size;
        this.mpg = mpg;

    }
    aboutVehicle(){
        console.log(`This vehicle is a ${this.size}-sized sedan manufacture by ${this.manufacturer}. It has ${this.numOfWheels} wheels and ${this.numOfDoors} doors. It is estimated to deliver ${this.mpg}MPG in the city. `)
    }
}
//5.
class Motocycle extends Vehicle{
    constructor(manufacturer, numOfWheels, handlebars, doors ){
        super(manufacturer,numOfWheels)
        this.handlebars = handlebars;
        this.doors = doors
        ;
    }

        aboutVehicle(){
            if( this.handlebars == true && this.doors == false)
            console.log(`This motocycle is manufacture by ${this.manufacturer}. It has ${this.numOfWheels} wheels and customized handlebars. However, it doesn't have doors. `)
    }
}

//6.
const t1 = new Truck('Ford','4', '2' , false)
const s1 =  new Sedan('Hyundai','4','4' , 'medium','30')
const m1 =  new Motocycle('Harley Davidson', 2, true , false )


console.log(t1);
console.log(s1);
console.log(m1);

t1.aboutVehicle();
s1.aboutVehicle();
m1.aboutVehicle();











