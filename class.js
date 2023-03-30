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

    showit: function() {
        this.getCookies(); 
        let hoursArray = document.querySelector('.Seattle-output')
         for(let i = 0; i < this.hoursOfOperation.length; i++) { 
         let variable = document.createElement('li');
         variable.innerHTML = `${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`           
         hoursArray.append(variable);
              }
          }
        
     }
seattle.showit();




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
    showit: function() {
        this.getCookies(); 
       let hoursArray = document.querySelector('.Tokyo-output')
        for(let i = 0; i < this.hoursOfOperation.length; i++) { 
        let variable = document.createElement('li');
        variable.innerHTML = `${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`;
       hoursArray.append(variable);
        }
    }
    
}
tokyo.showit();




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
    showit: function() {
            this.getCookies(); 
           let hoursArray = document.querySelector('.Dubai-output')
            for(let i = 0; i < this.hoursOfOperation.length; i++) { 
            let variable = document.createElement('li');
            variable.innerHTML = `${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`;
           hoursArray.append(variable);
            }
        }
        
    }
 dubai.showit();




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
    showit: function() {
        this.getCookies(); 
       let hoursArray = document.querySelector('.Paris-output')
        for(let i = 0; i < this.hoursOfOperation.length; i++) { 
        let variable = document.createElement('li');
        variable.innerHTML = `${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`;
       hoursArray.append(variable);
        }
    }
    
}
paris.showit();





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
    showit: function() {
        this.getCookies(); 
       let hoursArray = document.querySelector('.Lima-output')
        for(let i = 0; i < this.hoursOfOperation.length; i++) { 
        let variable = document.createElement('li');
        variable.innerHTML = `${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]} cookies`;
       hoursArray.append(variable);
        }
    }
    
}
lima.showit();