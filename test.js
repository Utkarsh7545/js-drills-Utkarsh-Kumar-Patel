import { arrayOfObjects } from "./persons.js";
import { getEmails, getHobbies, getNames, getAges, getCity_Country, getFirstHobby, getName_City, getNames_Emails } from "./solution.js";

console.log("1:");

const func1 = () => {
    console.log(getEmails(arrayOfObjects));
    console.log(getEmails([]));
    console.log(getEmails(26));
    console.log(getEmails("utkarsh"));
}

console.log("2:");

const func2 = () => {
    console.log(getHobbies(arrayOfObjects, 30));
    console.log(getHobbies(arrayOfObjects, 0));   
    console.log(getHobbies([], 45));        
    console.log(getHobbies('c', 10));
}

console.log("3:");

const func3 = () => {
    console.log(getNames(arrayOfObjects));
    console.log(getNames("&$_"));
    console.log(getNames(54.12));
    console.log(getNames({}));
}

console.log("4:");

const func4 = () => {
    console.log(getName_City(arrayOfObjects));
    console.log(getName_City([]));
    console.log(getName_City(0));
    console.log(getName_City("amit"));
}

console.log("5:");

const func5 = () => {
    console.log(getAges(arrayOfObjects));
    console.log(getAges("011562"));
    console.log(getAges(101));
    console.log(getAges([]));
}

console.log("6:");

const func6 = () => {
    console.log(getFirstHobby(arrayOfObjects));
    console.log(getFirstHobby("hello"));
    console.log(getFirstHobby(2679.12));
    console.log(getFirstHobby([]));
}

console.log("7:");

const func7 = () => {
    console.log(getNames_Emails(arrayOfObjects));
    console.log(getNames_Emails(0.2456));
    console.log(getNames_Emails([]));
    console.log(getNames_Emails("thank you"));
}

console.log("8:");

const func8 = () => {
    console.log(getCity_Country(arrayOfObjects));
    console.log(getCity_Country('hii'));
    console.log(getCity_Country(24.236));
    console.log(getCity_Country([]));
}


func1();
func2();
func3();
func4();
func5();
func6();
func7();
func8();

