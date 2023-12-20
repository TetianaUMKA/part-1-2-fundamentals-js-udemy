// const bills = [125, 555, 44];

// const tips = [];

// function calcTip(bill) {
//   bill >= 50 && bill <= 300
//     ? tips.push((bill * 15) / 100)
//     : tips.push((bill * 20) / 100);
// }

// calcTip(bills[0]);
// calcTip(bills[1]);
// calcTip(bills[2]);

// console.log(tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(totals);

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(totals);
