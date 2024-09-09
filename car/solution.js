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



export { carInfo };