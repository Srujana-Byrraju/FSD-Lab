// main.ts
import { Order } from "./week4-1OrderLogic.js";
const customer = {
    customerName: "Srujana",
    age: 19,
    address: "Bhimavaram"
};
const order = new Order(customer, 500, 101);
order.printBill();
