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

const leNarr = {
    id: 1,
    name: 'Le Narr',
    age: 18,
    gender: 'gay'
}
// OLD WAY
const ids = leNarr.id
const names = leNarr.name
// NEW WAY
const {id, name} = leNarr

// OLD WAY
const id2 = leNarr.id
const restOld = {
    name: leNarr.name,
    age: leNarr.age,
    gender: leNarr.gender
}
// NEW WAY WITH REST OPERATOR
const {...rest} = leNarr

// clone object with spread operator
const bob1 = {
    id: 1,
    name: 'Bob 1',
    age: 18,
    gender: 'male'
}
const bob2 = {
    ...bob1,
    name: 'Bob 2'
}
bob1 === bob2 // false

const fullName = 'EzFrontecd'
const wordList = fullName.split(' ')
// OLD WAY
const firstName = wordList[0]
const lastName = wordList[1]
// NEW WAY
// const [firstName. lastName] = wordList

// Clone array of objects
interface Student{
    id: number,
    name: string,
    age: number,
    gender: string
}
const studentList: Student[] = [
    {id: 1, name: 'Alice', age: 21, gender: 'female'},
    {id: 2, name: 'Patchouli', age: 22, gender: 'female'}
]
const newList = [...studentList]
newList[0].name ='Alice Shanghai'
console.log(studentList[0].name) // Alice Shanghai