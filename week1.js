"use strict";
// Week 1 - Experiment 1
// Simple Types: number, string, boolean
let studentName = "Srujana";
let studentAge = 19;
let isPresent = true;
console.log("Student Name Data Type: " + typeof studentName);
console.log("Student Age Data Type: " + typeof studentAge);
console.log("Attendance Data Type: " + typeof isPresent);
function displayStudent(name, age, present) {
    console.log("\nStudent Details");
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Present: " + (present ? "Yes" : "No"));
}
displayStudent(studentName, studentAge, isPresent);
