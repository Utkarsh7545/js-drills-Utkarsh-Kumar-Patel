// Q1 Find all users who are interested in playing video games.

const getAllUsers = (data) => {
    const arr = [];
    for(let user in data){
        if((data[user].interests) && data[user].interests[0].includes("Playing Video Games")){
            arr.push(user);
        }
    }
    return arr;
}

export { getAllUsers };

