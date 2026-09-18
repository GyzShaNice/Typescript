// INTERFACES
// 7
interface User extends Identifiable{
    name:string,
    email:string,
    phone:number
}
const person:User={name:"jiz",email:"j@gmail.com",phone:333,id:1}
console.log(person)

// 8
export interface Address{
    street:string,
    city:string,
    country:string
}
const home:Address={street:"baf",city:"baf",country:"cam"}
console.log(home)


// 9
interface Beneficiary extends Identifiable{
    name:string,
    city:string,
    phone:number,
    address:Address
}
const belong:Beneficiary={name:"emma",city:"edea",phone:11,id:2,address:"we"}
console.log(belong)

// 10
interface Contactable{
    getContactLabel():string
}

// 11
// class BeneficiaryService implements Contactable{
//     getContactLabel():string{
//         console.log("getContactLabel");
//     }
// }

// 12
interface Identifiable{
    id:number
}
const find:Identifiable={id:1};
console.log(find);
