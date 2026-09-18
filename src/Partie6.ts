import { Address } from "./Partie2"
// 31
interface GroceryOrder{
    type:'grocery'
    items:string[],
    deliveryAddress:Address
}

// 32
interface PharmacyOrder{
    type:'pharmacy'
    prescriptionREquired:boolean,
    medicamentName:string
}

// 33
interface GiftOrder{
    type:'gift'
    recipientName:string,
    message:string
}

// 34
type OrderDetails = GroceryOrder|PharmacyOrder|GiftOrder|CakeOrder

// 35
function describeOrder(order:OrderDetails):string{
    switch (order.type) {
        case 'grocery':
            return `the grocery store is found at ${order.deliveryAddress}`
            break;

        case 'pharmacy':
            return `the pharmacy is having medicines as ${order.medicamentName}`
            break;  
            
        case 'gift':
            return `the gift will be delivered to ${order.recipientName}`
            break;
            
        case 'cake':
            return `the best is the one with ${order.flavor}`
            break;    
    
        default:
            return 
    }
}

// 37
interface CakeOrder{
    type:'cake',
    flavor:string,
    size:number
}