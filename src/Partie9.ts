import { User, Beneficiary, Address } from "./Partie2";
import { City, OrderStatus } from "./Partie4"

// type commandes
interface GroceryOrder {
    id:number,
    status:OrderStatus,
    type: 'grocery'
    items: string[],
    deliveryAddress: Address
}


interface PharmacyOrder {
    id:number,
    status:OrderStatus,
    type: 'pharmacy'
    prescriptionRequired: boolean,
    medicationName: string
}


interface GiftOrder {
    id:number,
    status:OrderStatus,
    type: 'gift'
    recipientName: string,
    message: string
}

type OrderDetails = GroceryOrder | PharmacyOrder | GiftOrder
const grocery: GroceryOrder = {
    id: 1,
    status: "pending",
    type: "grocery",
    items: ["riz", "huile"],
    deliveryAddress: { street: "Rue A", city: "Bafoussam", country: "Cameroun" }
}
console.log(grocery);

const pharmacy: PharmacyOrder = {
    id: 2,
    status: "pending",
    type: "pharmacy",
    prescriptionRequired: true,
    medicationName: "Paracétamol"
}

const gift: GiftOrder = {
    id: 3,
    status: "completed",
    type: "gift",
    recipientName: "Awa",
    message: "Joyeux anniversaire !"
}

// une classe OrderManager
class OrderManager {
    private order: OrderDetails[] = []

    // ajouter une commande
    add(order: OrderDetails): void {
        this.order.push(order)
    }

    // recherche une commande par identifiant
    findById(id: number): OrderDetails | undefined {
        return this.order.find((order) => order.id === id)
    }

    getAll(): OrderDetails[] {
        return this.order
    }
}

// narrowing sur discriminant type
function describeOrder(order: OrderDetails): string {
    switch (order.type) {
        case "grocery":
            return `the grocery store is found at ${order.deliveryAddress}`
            break;

        case "pharmacy":
            return `the pharmacy is having medicines as ${order.medicationName}`
            break;

        case "gift":
            return `the gift will be delivered to ${order.recipientName}`
            break

    }
}
console.log(describeOrder(grocery));
console.log(describeOrder(pharmacy));
console.log(describeOrder(gift));

// type createorder derive d'un type existant avec un type utilitaire
type CreateOrder = Pick<PharmacyOrder,"prescriptionRequired"|"medicationName">
const testOrder: CreateOrder = {
    prescriptionRequired: false,
    medicationName: "paracetamol"
}
console.log(testOrder)

// type UpdateOrder base sur partial
type UpdateOrder = Partial<OrderDetails>
const testUpdate: UpdateOrder = {

}
console.log()

// PublicUser base sur Omit
type PublicUser = Omit<User, "email">
const Public: PublicUser = {
    id: 1, name: "glo", phone: 678817889
}
console.log(Public)

// orderPreview base sur Pick
type OrderPreview = Pick<GiftOrder,"message">
const Preview: OrderPreview = {
    message:"Happy Birthday"
}
console.log(Preview)

// type StatusLabels
type StatusLabels = Record<OrderStatus, string> 


const StatusLabel: StatusLabels= {
    pending: "waiting stage" ,
    in_progress:"doing stage",
    completed:"done stage" ,
    cancelled: "refused stage" 

}

console.log(StatusLabel)


// mapped type
