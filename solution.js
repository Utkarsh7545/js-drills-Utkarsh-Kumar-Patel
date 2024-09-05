import { arrayOfObjects } from "./persons";


//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

const getEmails = (arrayOfObjects) => {
    const allEmails = [];
    for(let i=0; i<arrayOfObjects.length; i++){
        allEmails[i] = arrayOfObjects[i].email;   //  allEmails[i].push(arrayOfObjects[i].email);
    }
    return allEmails;
}


//  Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

const getHobbies = (arrayOfObjects, ag) => {
    for(let i=0; i<arrayOfObjects.length; i++){
        if(ag === arrayOfObjects[i].age){
            console.log(arrayOfObjects[i].hobbies);
        }
    }
}





export {getEmails, getHobbies };









