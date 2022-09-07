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

interface Student {
    readonly id: number;
    name: string;
    age?: number; // optional
    }

const studentB: Student = {
    id: 1,
    name: 'Alice Margatroid',
    age: 18,
}

// Union type
let x: number | string = 1;
x = 'super'; // works
x = 123; // works
// x = false; // ts error: Type 'boolean' is not assignable to type 'string |number'

// Intersection type
interface BusinessPartner {
    name: string;
    credit: number;
}
interface Identity {
    id: number;
    name: string;
}
interface Contact {
    email: string;
    phone: string;
}
type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;
// interface way
// interface empLoyee extends Identity, Contact {}
// inerface Customer extends BusinessPartner, Contact {}

let c: Customer = {
name: 'ABC Inc.',
credit: 1000000,
email: 'sales@abcinc.com',
phone: '(408)-897-5735'
};
