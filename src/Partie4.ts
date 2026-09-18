// UNIONS
// 20
type City = "Bafoussam"|"Douala"|"Yaounde"

// 21
export type OrderStatus = "pending"|"in_progress"|"completed"|"cancelled";

// 23
function getCityMessage(city:City):string{
    switch (city) {
        case 'Bafoussam':
            return "Bafoussam labelle"

        case 'Douala':
            return "Paris in miniature"
            
        case 'Yaounde':
            return "If Yaounde is ok, Cameroon is ok"

        // case 'Bamenda':
        //     return "Bamenda for life"    
    // typescript says, Bamenda is not comparable to type city
        default:
            return "get a city"
    }
}

// 24
function isFinalStatus(status:OrderStatus):boolean{
    if (status === "completed") {
        return true
        
    }else{
        return false
    }
}




