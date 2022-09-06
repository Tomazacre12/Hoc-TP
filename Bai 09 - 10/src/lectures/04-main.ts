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
// check if falsy
const student = ''
if (!student){}
// check if truthy
if (student){}
// check length
if (student.length){} //BAD
if (student.length > 0){} //GOOD

const name = 'EzFrontend'
console.log(!name) // false
console.log(!!name) // true

const name2 = ''
console.log(!name2) // true
console.log(!!name2) // false
