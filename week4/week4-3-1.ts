class Locker<T> {
    private contents: T;

    constructor(initialItem: T) {
        this.contents = initialItem;
    }

    public getItem(): T {
        console.log("Accessing locker...");
        return this.contents;
    }

    public depositItem(newItem: T): void {
        this.contents = newItem;
        console.log("Locker updated successfully.");
    }
}

// 1. Using it for Cash (Number)
const cashLocker = new Locker<number>(5000);
let cash = cashLocker.getItem();
console.log(`Current Balance: ₹${cash}`);

// 2. Using it for Documents (String)
const documentLocker = new Locker<string>("Property Papers - Mumbai Flat");
console.log(`Stored Document: ${documentLocker.getItem()}`);

// 3. Using it for a Custom Object (Jewellery)
interface Gold {
    weightGrams: number;
    purity: string;
}

const goldLocker = new Locker<Gold>({
    weightGrams: 50,
    purity: "24K"
});

const myGold = goldLocker.getItem();
console.log(`Gold Weight: ${myGold.weightGrams}g`);

