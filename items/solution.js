import { items, each, map, reduce, find, filter, nestedArray, flatten } from "./items.js";

// 1:

each(items, (element, index) => {
    console.log(`${index} : ${element * 2}`);
});

// 2:

map(items, (element, index) => {
    console.log(`${index} : ${element * 10}`);
});

// 3:

console.log(reduce(items, (acc, element) => {
    return acc *= element;
}, 1));

