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


export { checkInterest, checkNationality};

