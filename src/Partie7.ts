import {User,Order} from "./Partie1"
import {OrderStatus} from "./Partie4"

// 38
export type UpdateUser = Partial<User>
const update: UpdateUser = {name:"glory"}
console.log(update)

// 39
export type PublicUser = Omit<User,'email'>
const UserEmail:PublicUser = {id:1,name:"glo",phone:678817889}
// const UserEmail:PublicUser = {id:1,name:"glo",phone:678817889,email:"glo@gmail"}
console.log(UserEmail)


// 40
export type UserPreview = Pick<User,"id"|"name">
const Prevs:UserPreview = {id:3,name:"so"}
console.log(Prevs)

// 41
export type ReadonlyUser = Readonly<User>
const readOnly:ReadonlyUser = {id:1,name:"glo",phone:678817889,email:"glo@gmail"}
console.log(readOnly)

// 42
export type CreateOrder = Omit<Order,'id'>
// const order:CreateOrder={id:2,customerId:4,beneficiaryId:4,title:"foodOrder"}
// console.log(order)

// 43
export type UpdateOrder = Partial<CreateOrder>

// 44
export type OrderStatus = "pending"|"in_progress"|"completed"|"cancelled";
interface String{
    description:string
}
const StatusLabel:Record<OrderStatus,String> = {
    pending:{description:"waiting stage"},
    in_progress:{description:"doing stage"},
    completed:{description:"done stage"},
    cancelled:{description:"refused stage"}
}
console.log(StatusLabel)



// 45
function getUser():User{
    return {id:1,name:"glory",phone:678817889,email:"glory@gmail"}
}