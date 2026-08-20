// Week 1 - Experiment 2
// Special Types: any, unknown, void

let data: any = "Full Stack";
console.log("Any Type:", data);

data = 2026;
console.log("Updated Any Type:", data);

let value: unknown = "Srujana";

if (typeof value === "string") {
    console.log("Unknown Type:", value.toUpperCase());
}

function showMessage(message: string): void {
    console.log("Message:", message);
}

showMessage("Welcome to TypeScript");
