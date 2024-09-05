//  1  Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

const getEmails = (data) => {
    if(!data || !Array.isArray(data) || data.length === 0){
        return "Invalid Data.";
    }
    else{
        const allEmails = [];
        for(let i=0; i<data.length; i++){
            if(data[0].email){
                allEmails[i] = data[i].email;   //  allEmails[i].push(data[i].email);
            }
            else{
                return "Email not found.";
            }
        }
        return allEmails;
    }
}


//  2  Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

const getHobbies = (data, ag) => {
    
    if(!data || !Array.isArray(data) || data.length === 0 || typeof ag !== 'number'){
        return "Invalid Data.";
    }
    else{
        for (let i = 0; i < data.length; i++) {
            if(data[i].age === ag){
                console.log(`Hobbies: ${data[i].hobbies}`);
            }
        }
    }
}


//   3  Create a function that extracts and displays the names of individuals who are students (isStudent: true) and live in Australia.

const getNames = (data) => {
    if(!data || !Array.isArray(data) || data.length === 0){
        return "Invalid Data.";
    }
    else{
        for(let i=0; i<data.length; i++){
            if((data[i].isStudent) && data[i].country === "Australia"){
                console.log(`Names: ${data[i].name}`);
            }
        }
    }
}


//   4  Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

const getName_City = (data) => {
    if(!data || !Array.isArray(data) || data.length === 0){
        return "Invalid Data.";
    }
    else{
        console.log(`Name: ${data[3].name}, City: ${data[3].city}`);
    }
}


//   5  Implement a loop to access and print the ages of all individuals in the dataset.

const getAges = (data) => {
    if(!data || !Array.isArray(data) || data.length === 0){
        return "Invalid Data.";
    }
    else{
        for(let i=0; i<data.length; i++){
            console.log(`Ages: ${data[i].age}`);
        }
    }
}


//   6  Create a function to retrieve and display the first hobby of each individual in the dataset.

const getFirstHobby = (data) => {
    if(!data || !Array.isArray(data) || data.length === 0){
        return "Invalid Data.";
    }
    else{
        for (let i = 0; i < data.length; i++) {
            console.log(`First Hobby: ${data[i].hobbies[0]}`);
        }
    }  
}


//   7  Write a function that accesses and prints the names and email addresses of individuals aged 25.

const getNames_Emails = (data) => {
    if(!data || !Array.isArray(data) || data.length === 0){
        return "Invalid Data.";
    }
    else{
        for (let i = 0; i < data.length; i++) {
            if(data[i].age === 25){
                console.log(`Name: ${data[i].name}, Email: ${data[i].email}`);
            }
        }
    }
}


//   8  Implement a loop to access and log the city and country of each individual in the dataset.

const getCity_Country = (data) => {
    if(!data || !Array.isArray(data) || data.length === 0){
        return "Invalid Data.";
    }
    else{
        for (let i = 0; i < data.length; i++) {
            console.log(`City: ${data[i].city}, Country: ${data[i].country}`);
        }
    }
}


export {getEmails, getHobbies, getNames, getName_City, getAges, getFirstHobby, getNames_Emails, getCity_Country };


