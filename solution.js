//  1  Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

const getEmails = (arrayOfObjects) => {
    const allEmails = [];
    for(let i=0; i<arrayOfObjects.length; i++){
        allEmails[i] = arrayOfObjects[i].email;   //  allEmails[i].push(arrayOfObjects[i].email);
    }
    return allEmails;
}


//  2  Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

const getHobbies = (arrayOfObjects) => {
    for(let i=0; i<arrayOfObjects.length; i++){
        if(30 === arrayOfObjects[i].age){
            console.log(`Hobbies: ${arrayOfObjects[i].hobbies}`);
        }
    }
}


//   3  Create a function that extracts and displays the names of individuals who are students (isStudent: true) and live in Australia.

const getNames = (arrayOfObjects) => {
    for(let i=0; i<arrayOfObjects.length; i++){
        if((arrayOfObjects[i].isStudent) && arrayOfObjects[i].country === "Australia"){
            console.log(`Names: ${arrayOfObjects[i].name}`);
        }
    }
}


//   4  Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

const getName_City = (arrayOfObjects) => {
    console.log(`Name: ${arrayOfObjects[3].name}, City: ${arrayOfObjects[3].city}`);
}


//   5  Implement a loop to access and print the ages of all individuals in the dataset.

const getAges = (arrayOfObjects) => {
    for(let i=0; i<arrayOfObjects.length; i++){
        console.log(`Ages: ${arrayOfObjects[i].age}`);
    }
}


//   6  Create a function to retrieve and display the first hobby of each individual in the dataset.

const getFirstHobby = (arrayOfObjects) => {
    for (let i = 0; i < arrayOfObjects.length; i++) {
        console.log(`First Hobby: ${arrayOfObjects[i].hobbies[0]}`);
    }
}


//   7  Write a function that accesses and prints the names and email addresses of individuals aged 25.

const getNames_Emails = (arrayOfObjects) => {
    for (let i = 0; i < arrayOfObjects.length; i++) {
        if(arrayOfObjects[i].age === 25){
            console.log(`Name: ${arrayOfObjects[i].name}, Email: ${arrayOfObjects[i].email}`);
        }
        
    }
}


//   8  Implement a loop to access and log the city and country of each individual in the dataset.

const getCity_Country = (arrayOfObjects) => {
    for (let i = 0; i < arrayOfObjects.length; i++) {
        console.log(`City: ${arrayOfObjects[i].city}, Country: ${arrayOfObjects[i].country}`);
    }
}


export {getEmails, getHobbies, getNames, getName_City, getAges, getFirstHobby, getNames_Emails, getCity_Country };


