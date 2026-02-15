const arr = [2, 7, 11, 15];
const target = 9;

const map=new Map();

for(let i=0;i<arr.length;i++){
const compliment=target-arr[i];
if(map.has(compliment)  ){
console.log(i,map.get(compliment));

break;
}
map.set(arr[i],i);

}