let prices=[1,1,0,1,1,1];
let count=0;
let innerCount=0;

for(let i=0;i<prices.length;i++){
    if(prices[i]===0){
             innerCount=0;
     }else{
          innerCount++;
         }
    if(count<innerCount) count=innerCount;

}
console.log(count);
console.log(innerCount);


