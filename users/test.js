import { users } from './users.js';
import { checkInterest, checkNationality } from './solution.js';

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

func1();
func2();
