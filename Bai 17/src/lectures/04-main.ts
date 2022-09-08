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


// Readonly<Type>
interface Todo {
    title: string
}  
    const todo: Readonly<Todo> = {
    title: "Delete inactive users"
}
//  todo.title = "Hello" (Cannot assign to 'title' because it is a read-only property)
todo


// Pick<Type, Keys>
interface Todo2 {
    title: string
    description: string
    completed: boolean
}
type TodoPreview = Pick<Todo2, "title" | "completed">
const todo2: TodoPreview = {
    title: "Clean room",
    completed: false
}
todo2

// Omit<Type, Keys>
interface Todo3 {
    title: string
    description: string
    completed: boolean
    createdAt: number
}
type TodoPreview2 = Omit<Todo3, "description">
const todo3: TodoPreview2 = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770
}
todo3
  
type TodoInfo = Omit<Todo3, "completed" | "createdAt">
const todoInfo: TodoInfo = {
    title: "Pick up kids",
    description: "Kindergarten closes at 5pm"
}
todoInfo

// Required<Type>
interface Props {
    a?: number
    b?: string
}
const obj: Props = { a: 5 }
//const obj2: Required<Props> = { a: 5 } (Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>')

