// 1. Function with Parameter & Return Type
function welcome(student: string): string {
    return `Welcome, ${student}!`;
}

// 2. Default Parameter
function getCollege(college: string = "SVECW"): string {
    return `College: ${college}`;
}

// 3. Optional Parameter
function sendEmail(email: string, subject?: string): void {
    console.log(`Sending email to ${email}`);
    if (subject) {
        console.log(`Subject: ${subject}`);
    }
}

// 4. Rest Parameter
function totalMarks(...marks: number[]): number {
    return marks.reduce((sum, mark) => sum + mark, 0);
}

// Testing
console.log(welcome("Srujana"));

console.log(getCollege());
console.log(getCollege("IIT Hyderabad"));

sendEmail("student@gmail.com");
sendEmail("student@gmail.com", "Lab Submission");

const total = totalMarks(85, 90, 88, 95);
console.log(`Total Marks: ${total}`);

