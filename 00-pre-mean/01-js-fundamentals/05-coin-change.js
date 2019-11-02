function coinChange(amt) {
    var coins = {
        "dollars": 100,
        "quarters": 50,
        "dimes": 10,
        "nickels": 5,
        "pennys": 1
    } 
    
    var result = {};
    for(var type in coins) {
        var value = coins[type];
        var coin = Math.floor(amt/value);
        amt -= coin*value;
        result[type] = coin;
        console.log(type, value, coin, result, amt)
    }
    return result;
}

console.log(coinChange(312));