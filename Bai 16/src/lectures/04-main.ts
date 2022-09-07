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


interface List<T>{
    length: number
    [index: number]: T
}
const numberList: List<number> = [1, 2, 3]
const wordList: List<string> = ['ez', 'frontend']

interface Student {
    id: number
    name: string
}
const studentList: List<Student> = [{id:1, name:'a'}]

// typeof operator
console.log(typeof 'easy frontend'); // 'string'
console.log(typeof 123); // 'number'
console.log(typeof false); // 'boolean'
console.log(typeof {}); // 'object'
console.log(typeof []); // 'object'
console.log(typeof function() {}); // 'function'
console.log(typeof window !== 'undefined'); // true on client, false on server

// Mapped types
interface Student1{
    id: number 
    name: string
}
type MappedTypes = {
    [Key in keyof Student]: boolean
}