// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log.

const carInfo = (data) => {
    if(!data || !Array.isArray(data) || data.length === 0){
        return "Invalid Data";
    }
    else{
        for (let i = 0; i < data.length; i++) {
            if(data[i].id && data[i].id === 33){
                return `Car 33 is a ${data[i].car_make} ${data[i].car_model} ${data[i].car_year}`;
            }
        }
    }
}


// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console.

const lastCarInfo = (data) => {
    if(!data || !Array.isArray(data) || data.length === 0){
        return "Invalid Data";
    }
    else{
        return `Last car is a ${data[data.length-1].car_make} ${data[data.length-1].car_model}`;
    }
}


// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

const carModels = (data) => {
    if(!data || !Array.isArray(data) || data.length === 0){
        return "Invalid Data";
    }
    else{
        let arr = [];
        for(let i=0; i<data.length; i++){
            arr.push(data[i].car_model);
        }
        return arr.sort();
    }
}


// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

const carYears = (data) => {
    if(!data || !Array.isArray(data) || data.length === 0){
        return "Invalid Data";
    }
    else{
        let arr = [];
        for(let i=0; i<data.length; i++){
            arr.push(data[i].car_year);
        }
        return arr;
    }
}


// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

const olderCars = (data) => {
    if(!data || !Array.isArray(data) || data.length === 0){
        return "Invalid Data";
    }
    else{
        let arr = [];
        for(let i=0; i<data.length; i++){
            if(data[i].car_year < 2000){
                arr.push(data[i].car_year);
            }
        }
        console.log("Array Length- " + arr.length);
        return arr;
    }
}

export { carInfo, lastCarInfo, carModels, carYears, olderCars };