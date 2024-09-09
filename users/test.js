import { users } from './users.js';
import { checkInterest, checkNationality, checkQualification, checkDesignation } from './solution.js';

const func1 = () => {
    console.log(checkInterest(users));
    console.log(checkInterest([]));
    console.log(checkInterest({}));
    console.log(checkInterest("users"));
}

const func2 = () => {
    console.log(checkNationality(users));
    console.log(checkNationality(24));
    console.log(checkNationality('24'));
    console.log(checkNationality({}));
}

const func3 = () => {
    console.log(checkQualification(users));
    console.log(checkQualification({}));
    console.log(checkQualification("hello"));
    console.log(checkQualification(23456));
}

const func4 = () => {
    console.log(checkDesignation(users));
    console.log(checkDesignation([]));
    console.log(checkDesignation(26.24));
    console.log(checkDesignation({}));
}

func1();
func2();
func3();
func4();
