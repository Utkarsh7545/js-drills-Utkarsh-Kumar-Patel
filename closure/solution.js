 import { counterFactory, limitFunctionCallCount, cacheFunction } from "./closure.js";


console.log(counterFactory().increment());
console.log(counterFactory().decrement());



