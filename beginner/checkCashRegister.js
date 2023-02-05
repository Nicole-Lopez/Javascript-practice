// info https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

function checkCashRegister(price, cash, cid) {
	const UNIT_AMOUNT = {
		"PENNY": .01,
		"NICKEL": .05,
		"DIME": .1,
		"QUARTER": .25,
		"ONE": 1,
		"FIVE": 5,
		"TEN": 10,
		"TWENTY": 20,
		"ONE HUNDRED": 100
	}

	let totalCid = 0;
	for (let element of cid) {
		totalCid += element[1];
	}
	totalCid = totalCid.toFixed(2);
	

	let changeToGive = cash - price;

	let change = [];
	if (changeToGive > totalCid) {
		return { status: "INSUFFICIENT_FUNDS", change: change };
	
	} else if (changeToGive.toFixed(2) === totalCid) {
		return { status: "CLOSED", change: cid };
	
	} else {
		cid = cid.reverse();

		for (let elem of cid) {
			let temp = [elem[0], 0];
			while (changeToGive >= UNIT_AMOUNT[elem[0]] && elem[1] > 0) {
				temp[1] += UNIT_AMOUNT[elem[0]];
				elem[1] -= UNIT_AMOUNT[elem[0]];
				changeToGive -= UNIT_AMOUNT[elem[0]];
				changeToGive = changeToGive.toFixed(2);
			}
			if (temp[1] > 0) change.push(temp);
		}

		if (changeToGive > 0) {
			return { status: "INSUFFICIENT_FUNDS", change: [] };
		} else {
			return { status: "OPEN", change: change};
		}
	}
}



let cid = [
	["PENNY", 1.01], 
	["NICKEL", 2.05], 
	["DIME", 3.1], 
	["QUARTER", 4.25], 
	["ONE", 90], 
	["FIVE", 55], 
	["TEN", 20], 
	["TWENTY", 60], 
	["ONE HUNDRED", 100]
]

console.log(checkCashRegister(19.5, 20, cid))
// {status: "OPEN", change: [["QUARTER", 0.5]]}.
