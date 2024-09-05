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


//    Create a function that extracts and displays the names of individuals who are students (isStudent: true) and live in Australia.

const getNames = (arrayOfObjects) => {
    for(let i=0; i<arrayOfObjects.length; i++){
        if((arrayOfObjects[i].isStudent) && arrayOfObjects[i].country === "Australia"){
            console.log(arrayOfObjects[i].name);
        }
    }
}


//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

const getName_City = (arrayOfObjects) => {
    console.log(arrayOfObjects[3].name + " " + arrayOfObjects[3].city);
}


export {getEmails, getHobbies,getNames, getName_City };









