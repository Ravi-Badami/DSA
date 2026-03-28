const arr=[2,2,1,1,9];

const map=new Map();

for(let num of arr){
    map.set(num,(map.get(num)||0)+1);
}
for(let[num,count] of map){
    if(count===1){
        console.log(num);
        break;
    }
}
