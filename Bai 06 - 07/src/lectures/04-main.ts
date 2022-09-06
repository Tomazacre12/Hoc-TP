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
let str 
if (Math.random() > 0.5){
    str = ''
}
// str.toString(): "strictNullChecks": true