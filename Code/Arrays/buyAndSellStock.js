//prices = [7, 1, 5, 3, 6, 4];
//prices = [7,6,4,3,1]
//prices = [3,8,2,5,1,7]
prices = [2,4,1]


function solution2(prices){

let minVal=prices[0];
let minValIndex=0;
let maxVal=0;
let maxValIndex=0;

for(let i=1;i<prices.length;i++){
if(prices[i]<minVal){
minVal=prices[i];
minValIndex=i;
}
}
for(let i=1;i<prices.length;i++){
if(prices[i]>maxVal && i>minValIndex){
maxVal=prices[i];
maxValIndex=i;
}

}
if((maxVal-minVal)<0){
return 0}
else{
return maxVal-minVal;
}
};





function solution1(prices) {
  let lowPrice = prices[0];
  let highPrice = prices[0];
  let lowPriceIndex = 0;
  let highPriceIndex = 0;
  //let isGreaterIndex=false;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > highPrice) {
      if (lowPriceIndex < highPriceIndex) {
        highPrice = prices[i];
        highPriceIndex = i;
      } else {
        highPriceIndex = 0;
      }
    } else if (prices[i] < lowPrice) {
      if (lowPriceIndex < highPriceIndex) {
        lowPrice = prices[i];
        lowPriceIndex = i;
      } else {
        lowPriceIndex = 0;
      }
    }
  }
  if (lowPriceIndex === 0 && highPriceIndex === 0) {
    return 0;
  } else {
    return highPrice - lowPrice;
  }
}

console.log(solution2(prices));
