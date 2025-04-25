function maximumProfit(prices) {
    // your code here
    let minPrice = Number.MAX_VALUE;
    let maxProfit = 0;

    for (let price of prices) {
        // update minimum price so far
        if (price < minPrice) {
            minPrice = price;
        }
        // calculate profit if selling today
        else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }

    return maxProfit;
}


let prices = [7, 10, 1, 3, 6, 9, 2];

console.log(maximumProfit(prices));
