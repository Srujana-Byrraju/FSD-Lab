// OrderLogic.ts

import { DELIVERY_CHARGE, GST_RATE } from "./week4-1Constants.js";
import { Customer } from "./week4-1Customer.js";

export class Order {

    constructor(
        public customer: Customer,
        private foodPrice: number,
        public orderId: number
    ) {}

    public calculateBill(): number {
        const gst = this.foodPrice * GST_RATE;
        return this.foodPrice + gst + DELIVERY_CHARGE;
    }

    public printBill(): void {
        console.log("------ Food Order ------");
        console.log(`Customer: ${this.customer.customerName}`);
        console.log(`Age: ${this.customer.age}`);
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Final Bill: ₹${this.calculateBill()}`);
        console.log("------------------------");
    }
}
