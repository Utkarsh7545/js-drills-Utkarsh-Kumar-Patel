import { arrayOfObjects } from "./persons.js";
import { getEmails, getHobbies, getNames, getAges, getCity_Country, getFirstHobby, getName_City, getNames_Emails } from "./solution.js";


const func1 = () => {
    console.log(getEmails(arrayOfObjects));
    console.log(getEmails([]));
    console.log(getEmails(26));
    console.log(getEmails("utkarsh"));
}


const func2 = () => {
    getHobbies(arrayOfObjects, 30);
    getHobbies(arrayOfObjects, 10);   
    getHobbies([], 45);        
    getHobbies('c', 10);
}


const func3 = () => {
    getNames(arrayOfObjects);
    getNames("&$_");
    getNames(54.12);
    getNames({});
}


const func4 = () => {
    getName_City(arrayOfObjects);
    getName_City([]);
    getName_City(0);
    getName_City("amit");
}


const func5 = () => {
    getAges(arrayOfObjects);
    getAges("011562");
    getAges(101);
    getAges([]);
}


const func6 = () => {
    getFirstHobby(arrayOfObjects);
    getFirstHobby("hello");
    getFirstHobby(2679.12);
    getFirstHobby([]);
}


const func7 = () => {
    getNames_Emails(arrayOfObjects);
    getNames_Emails(0.2456);
    getNames_Emails([]);
    getNames_Emails("thank you");
}


const func8 = () => {
    getCity_Country(arrayOfObjects);
    getCity_Country('hii');
    getCity_Country(24.236);
    getCity_Country([]);
}


func1();
func2();
func3();
func4();
func5();
func6();
func7();
func8();

