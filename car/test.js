import { inventory } from "./cars.js";
import { carInfo } from "./solution.js";

const func1 = ( ) => {
    console.log(carInfo(inventory));
    console.log(carInfo([]));
    console.log(carInfo("heyy"));
    console.log(carInfo(24.35));
}

func1();