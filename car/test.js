import { inventory } from "./cars.js";
import { carInfo, lastCarInfo, carModels } from "./solution.js";

const func1 = ( ) => {
    console.log(carInfo(inventory));
    console.log(carInfo([]));
    console.log(carInfo("heyy"));
    console.log(carInfo(24.35));
}

const func2 = () => {
    console.log(lastCarInfo(inventory));
    console.log(lastCarInfo({}));
    console.log(lastCarInfo(951357));
    console.log(lastCarInfo("inventory"));
}

const func3 = () => {
    console.log(carModels(inventory));
    console.log(carModels("model"));
    console.log(carModels({model: "Town car"}));
    console.log(carModels([]));
}



func1();
func2();
func3();