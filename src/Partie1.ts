import { OrderStatus } from "./Partie4"
// 1
export type User = {
    id:number,
    name:string,
    email:string,
    phone:number
}

// 2
export type Beneficiary ={
    id:number,
    name:string,
    phone:number
    city:string
}
// 3
type Money = {
    amount:number,
    currency:string
}
// 4
export type Order = {
    id:number,
    customerId:number,
    beneficiaryId:number,
    title:string,
    total:Money,
    status:OrderStatus
}


// 5
// function calculateTotal(prix:number[]):number{
//     return price()
// }


// 6
function formatUser(user:User):string{
    return `${user.name},${user.email}`
}