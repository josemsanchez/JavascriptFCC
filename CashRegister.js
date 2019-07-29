var denominations = [
    {name: 'ONE HUNDRED',  value: 100.00},
    {name: 'TWENTY',       value: 20.00},
    {name: 'TEN',          value: 10.00},
    {name: 'FIVE',         value: 5.00},
    {name: 'ONE',          value: 1.00},
    {name: 'QUARTER',      value: 0.25},
    {name: 'DIME',         value: 0.10},
    {name: 'NICKEL',       value: 0.05},
    {name: 'PENNY',        value: 0.01}
];

function checkCashRegister(price, cash, cid) {

    var output = { status: null, change: [] };
    // calculate how much change we owe the customer
    var change = cash - price;

    // calcuate the total cash-in-drawer
    var totalCid = cid.reduce(function(acc, next) {
        return acc + next[1];
    }, 0.0);

    // return the appropriate string if needed
    if (totalCid < change) {
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
    }
    else if (totalCid === change) {
        output.status = 'CLOSED';
        output.change = cid;
        return output;  }

    /* We are about to traverse through the denominations array, which is in descending order.
     We want our cid, which is currently ascending, to match the order of the denominations array. Why?
    Think about how you would give change to a customer. You would start with the biggest bills,
    and then work your way down. If you owe a customer 15 dollars in change, it's standard protocol to give them a ten and a five instead of 3 fives (unless they requested it!). */
    cid = cid.reverse();

    var result = denominations.reduce(function(acc, next, index) {
        // if the change owed is greater than or equal to the value of current denomination
        if (change >= next.value) {
            var currentValue  = 0.0;
            // keep looping so long as we have enough of that current denomination in the cash drawer
            while (change >= next.value && cid[index][1] >= next.value) {
                currentValue += next.value;
                change -= next.value;
                // for decimal precision
                change = Math.round(change * 100) / 100;
                cid[index][1] -= next.value;
            }
            acc.push([next.name, currentValue]);
            return acc;
        } else {
            return acc;
        }
    }, []);

// If there are no elements in change_arr or we have leftover change, return
    // the string "Insufficient Funds"
    if (result.length < 1 || change > 0) {
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
    }

    // Here is your change, ma'am.
    output.status = 'OPEN';
    output.change = result;
    return output;

}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
