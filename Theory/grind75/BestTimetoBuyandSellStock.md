````markdown
# Best Time to Buy and Sell Stock

Source: LeetCode  
Difficulty: Easy  
Topic: Arrays, Greedy

---

## Problem

You are given an array `prices` where `prices[i]` is the price of a stock on day `i`.

Choose one day to buy and a different day in the future to sell.

Return the **maximum profit**.  
If no profit is possible, return `0`.

Example:

prices = [7,1,5,3,6,4]

Output: 5

Explanation:
Buy at 1 and sell at 6.

---

## My Initial Thought (Wrong Approach)

I tried to:

1. Find the **minimum price in the array**
2. Then find the **maximum price after it**
3. Return `max - min`

Problem:

This fails when the **best sell happens before the global minimum**.

Example:

prices = [2,4,1]

Correct answer = 2  
Buy at 2, sell at 4.

But my approach finds min = 1 and returns 0.

---

## Key Insight

Instead of finding the **global minimum first**, we should:

Scan the array once and keep track of:

- the **lowest price seen so far**
- the **maximum profit so far**

For each price:

profit = currentPrice - minPriceSoFar

Update the max profit if this profit is larger.

---

## Pattern

Running Minimum + Greedy

Whenever a problem says:

choose i < j to maximize something

Think:

track the **best value seen so far**.

---

## Algorithm

1. Set `minPrice = prices[0]`
2. Set `maxProfit = 0`
3. Loop through the array
4. Update `minPrice`
5. Calculate profit
6. Update `maxProfit`

---

## Code

```javascript
function maxProfit(prices){

let minPrice = prices[0];
let maxProfit = 0;

for(let i = 1; i < prices.length; i++){

    if(prices[i] < minPrice){
        minPrice = prices[i];
    }

    let profit = prices[i] - minPrice;

    if(profit > maxProfit){
        maxProfit = profit;
    }

}

return maxProfit;
}
````

---

## Complexity

Time Complexity: O(n)

Space Complexity: O(1)

---

## Mental Model

At every day ask:

"If I sell today, what is the profit if I bought at the lowest price before?"

---

## Takeaway
Do not search for global min and max.

Instead:

scan once and maintain the **best value so far**.

```
