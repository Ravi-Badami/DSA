let arr=[1 ,2 ,3 ,4, 5]  ,num = 3;

function linearSearch(arr,num){
for(let i=0;i<arr.length;i++){
if(arr[i]===num){
return i;
}
}

}
console.log(linearSearch(arr,num));