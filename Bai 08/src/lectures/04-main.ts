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
// 2 == '2'

const studentA = {id: 1, name: 'Hieu Vux'}
const studentB = studentA
studentB == studentA //true
studentA == {id: 1, name: 'Hieu Vux'} //false