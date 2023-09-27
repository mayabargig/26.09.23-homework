// ---1---

class Person {
    constructor(firstName, lastName, birthDate, profileImage){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = new Date(birthDate);
        this.profileImage = profileImage;
    }

    get fullName (){
        return `${this.firstName} ${this.lastName}`;
    }
    
    get age (){
        const currentDate = new Date();
        const birthDate = this.birthDate;
        const age = currentDate.getFullYear() - birthDate.getFullYear();
        return age;
    }

    get canClub (){
        if(age >= 18){
            return true
        } else{
            return false
        }
    }

     render(){
        return `<div>
        <img style="width:200px" src="${this.profileImage}"/>
    </div>`
    }

    printToScreen (){
        return `<div>
            <h1> ${this.fullName} </h1>
            <p> ${this.birthDate} </p>
            <img style="width:200px" src="${this.profileImage}"/>
        </div>`
    }
}

const person1 = new Person(`maya`, `bargig`,`1999-12-14`, `https://www.kipa.co.il/userFiles/735-415/296656_dfef19aed705096e33eccb50ccf53d07.jpg.webp`);
const fullName = person1.fullName;
const age = person1.age;
const canClub = person1.canClub;

console.log(fullName);
console.log(age);
console.log(canClub);
const renderedHtml = person1.render();
document.body.innerHTML += renderedHtml;

const newArrayPerson = [
    new Person(`maya`, `bargig`,`1999-12-14`, `https://www.kipa.co.il/userFiles/735-415/296656_dfef19aed705096e33eccb50ccf53d07.jpg.webp`),
    new Person(`mor`, `bargig`,`1997-11-23`, `https://www.credit1.co.il/wp-content/uploads/2016/10/%D7%96%D7%99%D7%A0%D7%95%D7%A7-%D7%9C%D7%A2%D7%A1%D7%A7%D7%99%D7%9D-570x300.jpg`),
    new Person(`miryam`, `bargig`,`1967-12-10`, `https://www.kipa.co.il/userFiles/735-415/296656_dfef19aed705096e33eccb50ccf53d07.jpg.webp`),
    new Person(`bar`, `bargig`,`1996-05-04`, `https://www.credit1.co.il/wp-content/uploads/2016/10/%D7%96%D7%99%D7%A0%D7%95%D7%A7-%D7%9C%D7%A2%D7%A1%D7%A7%D7%99%D7%9D-570x300.jpg`),
    new Person(`roni`, `bargig`,`1998-11-07`, `https://www.kipa.co.il/userFiles/735-415/296656_dfef19aed705096e33eccb50ccf53d07.jpg.webp`),
    new Person(`meni`, `bargig`,`1999-12-14`, `https://www.credit1.co.il/wp-content/uploads/2016/10/%D7%96%D7%99%D7%A0%D7%95%D7%A7-%D7%9C%D7%A2%D7%A1%D7%A7%D7%99%D7%9D-570x300.jpg`),
]

// for (const person of newArrayPerson) {
//     const personHtml = person.printToScreen();
//     document.body.innerHTML += personHtml;
// }

// ---2---
class Car {
    constructor(model, year, brand, price, maximumSpeed){
        this.model = model;
        this.year = year;
        this.brand = brand;
        this.price = price;
        this.maximumSpeed = maximumSpeed;
        this._currentSpeed = 0;
    }

    accelerate() {
        if (this._currentSpeed + 20 <= this._maximumSpeed) {
            this._currentSpeed += 20;
        } else {
            console.log(`Can't exceed maximum speed of ${this._maximumSpeed} mph.`);
        }
    } 

    stop() {
        this._currentSpeed = 0;
    }

    get model() {
        return this._model;
    }
    
    set model(newModel) {
        this._model = newModel;
    }

    get year() {
        return this._year;
    }

    set year(newYear) {
        this._year = newYear;
    }

    get brand() {
        return this._brand;
    }

    set brand(newBrand) {
        this._brand = newBrand;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    get maximumSpeed() {
        return this._maximumSpeed;
    }

    set maximumSpeed(newMaximumSpeed) {
        this._maximumSpeed = newMaximumSpeed;
    }

    get currentSpeed() {
        return this._currentSpeed;
    }

    render () {
        container.innerHTML = `
        <h2>${this._brand} ${this._model}</h2>
        <p>Year: ${this._year}</p>
        <p>Price: $${this._price}</p>
        <p>Maximum Speed: ${this._maximumSpeed} mph</p>
        <p>Current Speed: ${this._currentSpeed} mph</p>
    `;
    }
}

// car.accelerate = 20;
const myCar = new Car("Sedan", 2023, "Toyota", 25000, 120);

myCar.accelerate(); 
myCar.render();

myCar.stop(); 
myCar.render();

const newArrayCars = [
    new Car("Sedan", 2023, "Toyota", 25000, 120),
    new Car("fabia", 2020, "skoda", 25000, 200)
]

const maxCars = 5;
function handleFormSubmit(event) {
    event.preventDefault();

    const modelF = document.getElementById("model").value;
    const yearF = parseInt(document.getElementById("year").value);
    const brandF = document.getElementById("brand").value;
    const priceF = parseInt(document.getElementById("price").value);
    const maximumSpeedF = parseInt(document.getElementById("maximumSpeed").value);

    if(newArrayCars.length < maxCars){
        carSubmit.disabled = false;
        newCar = new Car (modelF, yearF, brandF, priceF, maximumSpeedF);
        newArrayCars.push(newCar);
        console.log(newArrayCars);
        displayCars()
    } else {
      carSubmit.disabled = true;
    }
}

carForm.addEventListener("submit", handleFormSubmit);

function displayCars() {
    carContainer.innerHTML = ""; 

    newArrayCars.forEach((car, index) => {

        carContainer.innerHTML += `<div>
            <h3>Car ${index + 1}</h3>
            <p>Model: ${car.model}</p>
            <p>Year: ${car.year}</p>
            <p>Brand: ${car.brand}</p>
            <p>Price: $${car.price}</p>
            <p>Maximum Speed: ${car.maximumSpeed} mph</p>
            </div>`;
    });
}

// ---3---
const arrayNumbers = [80, 85, 100, 90]

class Student extends Person{
    constructor(firstName, lastName, birthDate, profileImage, currentCourse, grades){
        super(firstName, lastName, birthDate, profileImage);
        this.currentCourse = currentCourse;
        this.grades = grades;
    }

    average (){
        if(this.grades.length === 0){
            return 0;
        }

        let sum = 0;
        for (const grade of this.grades){
            sum += grade;
        }

        const averge = sum / this.grades.length;
        return averge;
    }
}

const newStudent = new Student(`maya`, `bargig`, `1999-12-14`, `image.jpd`, `fullstack`, arrayNumbers)
console.log(newStudent.grades);
console.log(newStudent.average());

const studentsArray = [`maya`, `noa`, `omer`, `matan`, `hila`];

class Teacher extends Person{
    constructor(firstName, lastName, birthDate, profileImage, students){
        super(firstName, lastName, birthDate, profileImage);
        this.students = students;
    }
}

const newTeacher = new Teacher(`maya`, `bargig`, `1999-12-14`, `image.jpd`, studentsArray);
console.log(newTeacher);