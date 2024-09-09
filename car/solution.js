// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log.

const carInfo = (data) => {
    for (let i = 0; i < data.length; i++) {
        if(data[i].id === 33){
            console.log(`Car 33 is a ${data[i].car_make} ${data[i].car_model} ${data[i].car_year}`);
        }
    }
}


export { carInfo };