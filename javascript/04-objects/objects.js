// Create a student object with name, course, and grade.
// Access name using dot notation and course using bracket notation.
// Add the approved property with the value true and change the grade.
// Display the entire object using console.log.

const student = {
    name: "Renan",
    course: "Information Systems",
    grade: 90
};

student.grade = 98;
student.approved = true;

console.log(student.name);
console.log(student["course"]);
console.log(student);