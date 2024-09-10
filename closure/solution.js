import { counterFactory, limitFunctionCallCount, cacheFunction } from "./closure.js";

// 1:

console.log(counterFactory().increment());
console.log(counterFactory().decrement());

// 2:

const x = limitFunctionCallCount((data) => data * data, 6);

for(let i=0; i<9; i++){
    console.log(x(10));
}

// 3:



