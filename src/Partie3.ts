import {Order} from "./Partie1"
// CLASS
// 13
export class OrderManager{
    private orders:Order[] = []

    add(orders:Order):void{
        this.orders.push(orders)
    }

    findById(id: number): Order| undefined {
        return this.orders.find((orders) => orders.id === id)
    }
   
}

// orders cannot be accessed outside the class because,
// its visibility is privte meaning that,
// it allows access to the class member from within the class