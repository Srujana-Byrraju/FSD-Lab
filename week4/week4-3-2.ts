// Generic Identity Function
function identity<T>(value: T): T {
    return value;
}

console.log(identity<number>(10));
console.log(identity<string>("Hello"));

// Returns the first item in an array
function getFirstPackage<T>(items: T[]): T {
    return items[0];
}

// Wraps an item in a box with timestamp
function wrapInBox<T>(item: T): { parcel: T; timestamp: Date } {
    return {
        parcel: item,
        timestamp: new Date()
    };
}

// 1. Working with City Names (Strings)
const cities = ["Mumbai", "Delhi", "Bangalore"];
const firstCity = getFirstPackage<string>(cities);
console.log(`Sending first parcel to: ${firstCity.toUpperCase()}`);

// 2. Working with Pincodes (Numbers)
const pincodes = [400001, 110001, 560001];
const firstPin = getFirstPackage<number>(pincodes);
console.log(`Starting delivery at Pincode: ${firstPin}`);

// 3. Working with Custom Objects (Electronics)
interface Electronic {
    brand: string;
    model: string;
}

const phone: Electronic = {
    brand: "Samsung",
    model: "S24"
};

const packedPhone = wrapInBox<Electronic>(phone);

console.log(
    `Packed item: ${packedPhone.parcel.brand} at ${packedPhone.timestamp}`
);

// Type inference
const autoCity = getFirstPackage(cities);
console.log(autoCity);
