import React from 'react';
import './App.css';


let name: string;
name = "Lawrence";

let age: number;
let personName: unknown;
let printName: (Pname: string) => never; //void returns undefined, while never returns nothing
//Below is a union that allows a variable to be two types
//let age: number | string;
let isstudent: boolean;
let hobbies: string[];
let role:[number, string];
//Tuple
role = [5,"actor"]
//Add ? to make type object optional
type Person = {
  name:string;
  age?: number;
};
let person: Person = {
  name: "Lawrence",
  age:35,
}
//This is how you use type and add an array of Person
let lotsOfPeople:Person[];

let printName2: Function;
//-or-
let printName3: (name: string) => void
function printName4(name: string) {
  console.log(name)
}

interface NewPerson {
  name:string;
  age: number;
}

interface Guy extends Person {
  profession: string;
}

let g:Guy = {
  name: "Lawrence",
  age: 35,
  profession: "salesperson"

}
function App() {
  return (
    <div className="App">
      Hello world {person.name}! You say you are {person.age} years old.
    </div>
  );
}

export default App;
