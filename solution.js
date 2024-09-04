import {arrayOfObjects} from './persons.js';

//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

const getEmails = () => {
    const allEmails = [];
    for(let i=0; i<arrayOfObjects.length; i++){
        allEmails[i] = arrayOfObjects[i].email;   //  allEmails[i].push(arrayOfObjects[i].email);
    }
    return allEmails;
}



