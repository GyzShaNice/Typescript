import { User,Beneficiary} from "./Partie2"

// NARROWING
// 26
function printValue(value:string|number):void{
    if(typeof value === "string"){
        console.log(value.length)
    }else{
        console.log(value *2)
    }
}

// 27
function formatId(id:string|number):string{
    if(typeof id === "string"){
        return "trial" + id.length
    }else{
        return id.toString()
    }
}

// 28
function printBeneficiary(value:User|Beneficiary):void{
    if ("email" in value) {
        console.log(`for user:${value.email}`)
    }else{
        console.log(`for beneficiary:${value.phone}`)

    }
}

//29
function getContact(value:User|Beneficiary):string{
    if("email"in value){
        return `user's email is ${value.email}`
    }else{
        return `beneficiary phone is ${value.phone}`

    }
}

// 30
// --- Tests ---
// console.log("--- printValue ---")
// printValue("hello")   // affiche 5 (longueur de "hello")
// printValue(10)         // affiche 20 (10 * 2)

// console.log("--- formatId ---")
// console.log(formatId("abc"))  // affiche "trial3"
// console.log(formatId(42))     // affiche "42"

// console.log("--- printBeneficiary ---")
// printBeneficiary({ id: 1, name: "Guy", email: "guy@test.com", phone: 699000000 })
// printBeneficiary({ id: 2, name: "Awa", city: "Bafoussam", phone: 677000000, address: { street: "Rue X", city: "Bafoussam", country: "Cameroun" } })

// console.log("--- getContact ---")
// console.log(getContact({ id: 1, name: "Guy", email: "guy@test.com", phone: 699000000 }))
// console.log(getContact({ id: 2, name: "Awa", city: "Bafoussam", phone: 677000000, address: { street: "Rue X", city: "Bafoussam", country: "Cameroun" } }))