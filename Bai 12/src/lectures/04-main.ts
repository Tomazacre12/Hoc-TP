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

// let count = 5;
// count = 'five';
// type error: Type 'string' is not assignable to type 'number'

// adding any, solved 
let count: any = 5;
count = 'five'; // no error now 

// Chỉ định một giá trị cụ thể làm kiểu dữ liệu.
let count1: 1;
let channelName: 'easy';
let isActive: false;
let student: null;

// let count1: 1 = 2: error Type '2' is not assignable to type '1'

// Với const, khi omit type annotation, literal type sẽ được sử dụng. Vì const chỉ nhận được 1 giá trị, không thể thay đổi được.
const count3 = 1; // const count: 1
const channelName3 = 'Easy Frontend'; // const channelName: 'Easy Frontend'
const isActive3 = false; // const   

const student2 = {
    id: 1,
    name: 'Easy Frontend',
    }
    // this is how ts understand:
    // const student: {
    // id: number;
    // name: string;
    // }
    // because the props of an object can be updated
    student2.name = 'Typescript is easy!'; // works

const student3 = {
    id: 1,
    name: 'Easy Frontend',
    } as const
    // this is how ts understand:
    // const student: {
    // readonly id: 1;
    // readonly name: "Easy Frontend";
    // }
    // you now can't update props of this object

    // student3.name = 'Typescript is easy, really?!';
    // error: Cannot assign to 'name' because it is a read-only property.

// Tương tự như object, array cũng có behavior tương tự.
const numberList = [1, 2, 3];
// ts understand: const numberList: number[]
const numberListAsConst = [1, 2, 3] as const
// ts understand: const numberListAsConst: readonly [1, 2, 3]