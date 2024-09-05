//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.


const getEmails = (arrayOfObjects) => {
    const allEmails = [];
    for(let i=0; i<arrayOfObjects.length; i++){
        allEmails[i] = arrayOfObjects[i].email;   //  allEmails[i].push(arrayOfObjects[i].email);
    }
    return allEmails;
}


//  Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

const getHobbies = (arrayOfObjects) => {
    for(let i=0; i<arrayOfObjects.length; i++){
        if(30 === arrayOfObjects[i].age){
            console.log(`Hobbies: ${arrayOfObjects[i].hobbies}`);
        }
    }
}


//    Create a function that extracts and displays the names of individuals who are students (isStudent: true) and live in Australia.

const getNames = (arrayOfObjects) => {
    for(let i=0; i<arrayOfObjects.length; i++){
        if((arrayOfObjects[i].isStudent) && arrayOfObjects[i].country === "Australia"){
            console.log(`Names: ${arrayOfObjects[i].name}`);
        }
    }
}


//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

const getName_City = (arrayOfObjects) => {
    console.log(`Name: ${arrayOfObjects[3].name}, City: ${arrayOfObjects[3].city}`);
}


//    Implement a loop to access and print the ages of all individuals in the dataset.

const getAges = (arrayOfObjects) => {
    for(let i=0; i<arrayOfObjects.length; i++){
        console.log(`Ages: ${arrayOfObjects[i].age}`);
    }
}


//    Create a function to retrieve and display the first hobby of each individual in the dataset.

const getFirstHobby = (arrayOfObjects) => {
    for (let i = 0; i < arrayOfObjects.length; i++) {
        console.log(`First Hobby: ${arrayOfObjects[i].hobbies[0]}`);
    }
}


//    Write a function that accesses and prints the names and email addresses of individuals aged 25.

const getNames_Emails = () => {

}

export {getEmails, getHobbies, getNames, getName_City, getAges, getFirstHobby };









