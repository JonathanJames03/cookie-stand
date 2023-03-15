'use strict'
function getRandom(max, min) { 
    return Math.ceil(Math.random() * (max - min) + min);


}

const seattle = {
    min: 23,
    max: 65,
    avg: 6.3,
    location: 'Seattle',
    hourOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm",],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this,this.hourOfOperation.length; i++){
            console.log('seattle avg cookies/sale', this,avg);
            console.log('seattle avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
}
let hoursDemo = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let cookieDemo = [152,265,202,353,227,221,202,378,171,309,215,189,189,385];
let hoursArray = document.querySelector('.output')
for(let i = 0; i < hoursDemo.length; i++) {
    let variable = document.createElement("li");
    variable.innerHTML = `${hoursDemo[i]}: ${cookieDemo[i]} cookies`;
    hoursArray.append(variable);
}




const tokyo = {
    min: 3,
    max: 24,
    avg: 1.2,
    location: 'Tokyo',
    hourOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm",],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this,this.hourOfOperation.length; i++){
            console.log('tokyo avg cookies/sale', this,avg);
            console.log('tokyo avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
}
let hoursDemo2 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let cookieDemo2 = [152,265,202,353,227,221,202,378,171,309,215,189,189,385];
let hoursArray2 = document.querySelector('.output')
for(let i = 0; i < hoursDemo.length; i++) {
    let variable = document.createElement("li");
    variable.innerHTML = `${hoursDemo[i]}: ${cookieDemo[i]} cookies`;
    hoursArray.append(variable);
}




const dubai = {
    min: 11,
    max: 38,
    avg: 3.7,
    location: 'Dubai',
    hourOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm",],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this,this.hourOfOperation.length; i++){
            console.log('dubai avg cookies/sale', this,avg);
            console.log('dubai avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
}
let hoursDemo3 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let cookieDemo3 = [152,265,202,353,227,221,202,378,171,309,215,189,189,385];
let hoursArray3 = document.querySelector('.output')
for(let i = 0; i < hoursDemo.length; i++) {
    let variable = document.createElement("li");
    variable.innerHTML = `${hoursDemo[i]}: ${cookieDemo[i]} cookies`;
    hoursArray.append(variable);
}





const paris = {
    min: 20,
    max: 38,
    avg: 2.3,
    location: 'Paris',
    hourOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm",],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this,this.hourOfOperation.length; i++){
            console.log('paris avg cookies/sale', this,avg);
            console.log('paris avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
}
let hoursDemo4 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let cookieDemo4 = [152,265,202,353,227,221,202,378,171,309,215,189,189,385];
let hoursArray4 = document.querySelector('.output')
for(let i = 0; i < hoursDemo.length; i++) {
    let variable = document.createElement("li");
    variable.innerHTML = `${hoursDemo[i]}: ${cookieDemo[i]} cookies`;
    hoursArray.append(variable);
}





const lima = {
    min: 2,
    max: 16,
    avg: 4.6,
    location: 'Lima',
    hourOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm",],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this,this.hourOfOperation.length; i++){
            console.log('lima avg cookies/sale', this,avg);
            console.log('lima avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
}

let hoursDemo5 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let cookieDemo5 = [152,265,202,353,227,221,202,378,171,309,215,189,189,385];
let hoursArray5 = document.querySelector('.output')
for(let i = 0; i < hoursDemo.length; i++) {
    let variable = document.createElement("li");
    variable.innerHTML = `${hoursDemo[i]}: ${cookieDemo[i]} cookies`;
    hoursArray.append(variable);
}