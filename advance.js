// console.log("welcome to advance js");

// // let Arry=["ali","23","IT","140"];
// // let name=Array[0];
// // let age=Array[1];
// // let dept=Array[2]
// // let roll=Array[3];
// // console.log(name,age,dept,roll);
// // its difficult to store value of array in varibale to solve this difficultites we have 
// // destracturing method
// // destracturing of Array
// // let Arry=["ali","23","IT","140"];
// // let [name,age ,dept,rollno]=Arry;
// // console.log(`my name is ${name} i am student of bs ${dept} and my age is ${age}`);
// // 🔹 Task 1: Basic Destructuring
// // Given:
// const fruits = ["apple", "banana", "cherry"];
// const[apple,banana,cherry]=fruits
// console.log(apple);
// console.log(banana);
// console.log(cherry);
// // // 🔹 Task 2: Skipping Elements
// const numbers = [10, 20, 30, 40];
// // const[x,,,y]=numbers;
// // console.log(x,y);
// // 🔹 Task 3: Default Values

// const names = ["Ali"];
// const [name="khan"]=names
// console.log(name);
// // 🔹 Task 4: Swapping Variables
// // Given:
// let x = 5;
// let y = 10;
// console.log(x,y);

// // before swapping
// let temp=x;
// x=y;
// y=temp

// console.log(x,y);
// // 🔹 Task 5: Nested Array Destructuring
// const data = [1, [2, 3], 4];
// const[a,[b,c],d]=data;
// console.log(a,b,c,d);
// // 🔹 Task 6: Destructuring in Loop
// const students = [
//   ["Ahmed", 90],
//   ["Zara", 85],
//   ["Usman", 78]
// ];
//  for (const [name,score] of students) {
// console.log(name,score);


// }
// // self task
// function user([name,age,dept]){
//     console.log(name);
//     console.log(age);
//     console.log(dept);

// }
// user(["shahbaz","23","IT"])
// function checkuser(){
//     return ["shahbaz","IT","140","c"]
// }
// let [name1,dept,roll,section]=checkuser();
// console.log(`my name is ${name1} i am here student of bs${dept} in section ${section} 
//     having roll no is ${roll}`);
//     // destracturing of Object
let obj = { name: "shahbaz", dept: "IT", rollno: 140 }
console.log(obj);
let { name, dept, rollno } = obj;
console.log(name);
console.log(dept);
console.log(rollno);
// ✅ Task 1: Basic Destructuring

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};
const { brand, model, year } = car;
console.log(`the brand of car is ${brand} and model is ${model} year is ${year}`);
// ✅ Task 2: Renaming with Destructuring
const user = {
    username: "shahbaz123",
    email: "shahbaz@example.com"
};
const { username = "qalander", email } = user;
console.log(username, email);
// ✅ Task 3: Default Values
const book = {
    title: "JavaScript Guide"
};
const { title, auther = "shahbaz" } = book;
console.log(`the book title is ${title} and its auther is ${auther}`);
// ✅ Task 4: Nested Object Destructuring

const student = {
    id: 10,
    personal: {
        name11: "Ali",
        age: 18
    },
    academic: {
        grade: "A",
        subjects: ["Math", "Science"]
    }
};
const { id, personal: { name11, age }, academic: { grade, subjects } } = student;
console.log(`the student name is ${name11} and its id number ${id} his age is ${age}
    he interested in these coureses ${subjects}`);
// ✅ Task 5: Function Parameter Destructuring
function displayEmployee(employee) {
    console.log(name22, salary);

}

const emp = {
    name22: "Areeba",
    salary: 50000
};

const { name22, salary } = emp;
displayEmployee(emp)























