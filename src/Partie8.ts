// MAPPED TYPES
// 46
interface User {
    name: string;
    age: number;
    email: string
}
type Optional<T> = {
    [key in keyof T]?: T[key];
};

const partial: Optional<User> = {
    name: "John"
};
console.log(partial);


// 47
type ReadonlyCustom<T> = {
    readonly [key in keyof T]: T[key];
};
const readOnlyUser: ReadonlyCustom<User> = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
}
// try{
//     readOnlyUser.name = "glo";
//     console.log("modified name")
// }catch(error){
//     console.log("error cannot modify")
// }
console.log(readOnlyUser)
// it's a readonly types, so it can't be modified


// 48
type FieldErrors<T> = {
    [key in keyof T]:string|undefined
};

const field:FieldErrors<User>={
    name:"emma",
    age:undefined,
    email:undefined
}
console.log(field)

// 49
type FieldStatus<T> = {
    [key in keyof T]:"value"|"invalid"
}
const status:FieldStatus<User>={
    name:"value",
    age:"invalid",
    email:"value"
}
console.log(status)

// 50
interface FormUser{
    name:string,
    age:number,
    email:string
}
const userForm:FieldStatus<FormUser>={
    name:"value",
    age:"invalid",
    email:"value"
}

const userFormulaire:FieldErrors<FormUser>={
    name:undefined,
    age:undefined,
    email:"valid email"
}
console.log(userForm)
console.log(userFormulaire)

// 51
type Nullable<T> = {
    [key in keyof T]:T[key]|null
}
const empty:Nullable<User>={
    name:null,
    age:null,
    email:null
}
console.log(empty)
