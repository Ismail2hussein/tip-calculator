// Good Luck! You got this 💪🏾
// Write your code here.
let bill = 275
let tip

if (bill >= 50 && bill <= 300) {
		tip = bill * 0.15
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
} else if (bill > 300) {
    tip = bill * 0.2
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip} `);
}