// console.log("hello welcome");
// let name ="shahbaz";
// let dept="IT";
// let rollno=140;
// let obj={ name:name,
//     dept:dept,
//     rollno:rollno
// }
// console.log(obj.name);
// enhanced object literal
//  let name ="shahbaz";
// let dept="IT";
// let rollno=140;
// let obj={
//     name,
//     dept,
//     rollno,
//    my(){
//     console.log(`my name is ${name} now i am student of bs ${this.dept} ,my roll is ${this.rollno}`); 

//     }
// }
// obj.my()
// 🔸 Task 1: Property Shorthand
let product = "Laptop";
let price = 70000;

// 🔧 Task:
// Ek object banao jiska naam ho `item`
// Use **property shorthand** ka use karke `product` aur `price` ko object mein daalo.
// Fir object ko console.log karo

// ✅ Expected Output:
// { product: "Laptop", price: 70000 }
let obj={
    product,
    price
}
console.log(obj);
// 🔸 Task 2: Method Shorthand
// 🔧 Task:
// Ek object banao jiska naam ho `student`
// Property: name = "Hira"
// Method: sayHello()
// ➤ Output: Hello, I am Hira

// Use **method shorthand syntax**
// Use `this.name` inside method
let obj2={
    name:"Hira",
    say(){
        console.log(`hello i am ${this.name}`);
        
    }
}
obj2.say();
// 🔸 Task 3: Computed Property Name

// 🔧 Task:
// Ek object banao jisme key ho dynamic (from variable `key`) aur value ho "JavaScript"
// Use **[key]: value** syntax
// Fir object ko print karo

// ✅ Expected Output:
// { language: "JavaScript" }

// let key = "language";
// let value = "JavaScript";
// let obj1={
//     [key]:value
// }
// console.log(obj1);
// let key = "language";

// let objj = {
//   [key]: "JavaScript"
// };
// console.log(objj);
// let property = prompt("Enter key name:");
// let value = prompt("Enter value:");

// let objj = {
//   [property]: value
// };

// console.log(objj);











