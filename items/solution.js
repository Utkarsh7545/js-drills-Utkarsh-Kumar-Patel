import { items, each, map, reduce, find, filter, nestedArray, flatten } from "./items.js";

// 1:

each(items, (element, index) => {
    console.log(`${index} : ${element * 2}`);
});

// 2:

map(items, (element, index) => {
    console.log(`${index} : ${element * 10}`);
});

