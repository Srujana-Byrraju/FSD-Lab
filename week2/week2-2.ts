// 1. Traditional Function
function calculateDiscount(price: number, discount: number): number {
    return price - (price * discount);
}

// 2. Arrow Function
const calculateDiscountArrow = (price: number, discount: number): number => {
    return price - (price * discount);
};

// 3. Shorthand Arrow Function
const greetCustomer = (name: string): string =>
    `Welcome, ${name}! Enjoy Shopping.`;

// Testing
const itemPrice: number = 2000;
const discountRate: number = 0.10; // 10%

console.log(greetCustomer("Srujana"));

const finalPrice1 = calculateDiscount(itemPrice, discountRate);
console.log(`Final Price (Traditional): ₹${finalPrice1}`);

const finalPrice2 = calculateDiscountArrow(itemPrice, discountRate);
console.log(`Final Price (Arrow): ₹${finalPrice2}`);

