import { User,Beneficiary} from "./Partie1"

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

}

//29
function getContact(value:User|Beneficiary):string{

}

// 30