/*Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

// Data 1
const markMass = 78;
const markHeight = 1.69;

const johnMass = 95;
const johnHeight = 1.88;

const markBMI = markMass / markHeight ** 2;
// const markBMI = markMass / (markHeight * markHeight);
console.log(markBMI);

const johnBMI = johnMass / johnHeight ** 2;
// const johnBMI = johnMass / (johnHeight * johnHeight);
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI); //true

// Data 2
const newMarkMass = 95;
const newMarkHeight = 1.88;

const newJohnMass = 85;
const newJohnHeight = 1.76;

const newMarkBMI = newMarkMass / newMarkHeight ** 2;
console.log(newMarkBMI);

const newJohnBMI = newJohnMass / newJohnHeight ** 2;
console.log(newJohnBMI);

const newMarkHigherBMI = newMarkBMI > newJohnBMI;
console.log(newMarkHigherBMI); //false

// Passed challenge
/*const massMark = 78;
const heightMark = 1.69;

const massJohn = 95;
const heightJohn = 1.88;

const BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark);

const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
*/
