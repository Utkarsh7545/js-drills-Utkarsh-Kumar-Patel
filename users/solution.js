// Q1 Find all users who are interested in playing video games.

const checkInterest = (data) => {
    const arr = [];
    if(!data || typeof data !== 'object' || Object.keys(data).length === 0){
        return "Invalid Data";
    }
    else{
        for(let user in data){
            if((data[user].interests) && data[user].interests[0].includes("Video Games")){
                arr.push(user);
            }
        }
        return arr;
    }
}


// Q2 Find all users staying in Germany.

const checkNationality = (data) => {
    if(!data || typeof data !== 'object' || Object.keys(data).length === 0){
        return "Invalid Data";
    }
    else{
        const arr = [];
        for(let user in data){
            if((data[user].nationality) && data[user].nationality.includes("Germany")){
                arr.push(user);
            }
        }
        return arr;
    }
}


// Q3 Find all users with masters Degree.

const checkQualification = (data) => {
    if(!data || typeof data !== 'object' || Object.keys(data).length === 0){
        return "Invalid Data";
    }
    else{
        const arr = [];
        for(let user in data){
            if((data[user].qualification) && data[user].qualification.includes("Masters")){
                arr.push(user);
            }
        }
        return arr;
    }
}


// Q4 Group users based on their Programming language mentioned in their designation.

const checkDesignation = (data) => {
    if(!data || typeof data !== 'object' || Object.keys(data).length === 0){
        return "Invalid Data";
    }
    else{
        const obj = {
            Java : [],
            Python : [],
            Golang : [],
            JavaScript : []
        };
        for (let user in data) {
            if((data[user].designation) && data[user].designation.includes("Golang")){
                obj.Golang.push(user);
            }
            else if((data[user].designation) && data[user].designation.includes("Javascript")){
                obj.JavaScript.push(user);
            }
            else if((data[user].designation) && data[user].designation.includes("Python")){
                obj.Python.push(user);
            }
            else{
                obj.Java.push(user);
            }
        }
        return obj;
    }
}


export { checkInterest, checkNationality, checkQualification, checkDesignation };

