export function isPositive(n: number){
    return  n >= 0
}
try {
    Promise.reject(new Error('Super'))
} catch (error){
    if(error instanceof Error){
        console.log(error.message)
    }
}

function sayHello(){
    console.log('Hi')
}
// ts: function sayHello(): void
function sum(a: number, b: number) {
    return a + b;
}
// ts: function sum(a: number, b: number): number

// function sum2(a: number, b: number): number {
//     return a + b.toString();
//     }
// ts error: Type 'string' is not assignable to type 'number'

// function noop(): void
function noop() {
    return;
    }
// function noop(): void
function noop2() {
}

type NewType = number & string; // never

function fail(msg: string): never {
    throw new Error(msg);
}
function fn(x: string | number) {
    if (typeof x === "string") {
    // do something
    } else if (typeof x === "number") {
    // do something else
    } else {
    x; // has type 'never'!
    }
}
// Destructuring parameter
function createStudent(id: number, name: string, age: number) {
console.log(id, name, age)
}
createStudent(1, 'Bob', 18);
// Cách 1
function createStudent2(student: { id: number, name: string, age: number})
{
const { id, name, age } = student;
console.log(id, name, age)
}
createStudent2({
id: 1,
name: 'Bob',
age: 18,
});
// Cách 2
function createStudent3({ id, name, age }: { id: number, name: string, age:
    number}) {
    console.log(id, name, age)
}
createStudent3({
id: 1,
name: 'Bob',
age: 18,
});
// Cách 3
interface Student {
    id: number;
    name: string;
    age: number;
}
function createStudent4({ id, name, age }: Student) {
    console.log(id, name, age)
}
createStudent4({
    id: 1,
    name: 'Bob',
    age: 18,
} as Student);
