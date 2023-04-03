'use strict'
function getRandom(max, min) { 
    return Math.ceil(Math.random() * (max - min) + min);


}

/*const seattle = {
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
lima.showit();*/

let hoursOfOperation = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

function cookieStandLocation(min, max, avg, location) {
    let stand = {};
    stand.min = min;
    stand.max = max;
    stand.avg = avg;
    stand.location = location;
    stand.cookiesPerHour = [];
    stand.getCustomers = function() {
     return getRandom(this.max, this.min);
    }
    let sum = 0;
 
    stand.getCookies = function getCookies() {
         for(let i = 0; i < this.hoursOfOperation.length; i++) {
          this.cookiesPerHour.push(Math.ceil(this.avg * this.getCustomers()));
         }
         return this.cookiesPerHour;
     }
 
     stand.render = function() {
        let cookiesTable = document.querySelector('.CookieData');
        let hoursTable = document.querySelectorAll('.Hoursofopp');
        let locationTable = document.createElement('tr');
        let locationData = document.createElement('td');
        let sumData = document.createElement('td');
        locationData.innerHTML += this.Location
        locationTable.append(locationData);
        stand.totalNumber = function() {
            
            
            for(let i=0; i < this.cookiesPerHour.length; i++) {
                sum += this.cookiesPerHour[i];
            }
            return sum;
        }
        sumData.innerHTML += this.totalNumber()
        for (let i = 0; i< hoursOpen.length; i++) {
            let tableData = document.createElement('td')
            tableData.innerHTML += this.cookiesPerHour[i]
            cookiesTable.append(tableData);
            locationTable.append(tableData);0
          }  
          locationTable.append(sumData);
        cookiesTable.append(locationTable);
        
        }
        return stand;
    }
 
    let seattle = new cookieStandLocation(23,65,6.3,'Seattle')      
    seattle.getCookies();
    seattle.customersPerHour();
    seattle.render();
    
    let tokyo = new cookieStandLocation(3,24,1.2,'Tokyo')
    tokyo.getCookies();
    tokyo.customersPerHour();
    tokyo.render();
    
    let dubai = new cookieStandLocation(11,38,3.7,'Dubai')
    dubai.getCookies();
    dubai.customersPerHour();
    dubai.render();
    
    let paris = new cookieStandLocation(20,38,2.3,'Paris')
    paris.getCookies();
    paris.customersPerHour();
    paris.render();
    
    let lima = new cookieStandLocation(2,16,4.2,'Lima')
    lima.getCookies();
    lima.customersPerHour();
    lima.render();