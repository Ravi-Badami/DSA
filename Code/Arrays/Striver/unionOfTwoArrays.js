let arr1 = [1,2,3,4,5];
let arr2 = [2,3,4,4,5];
let n=5;
let m=5;
function union(arr1,arr2,n,m){
let i=0,j=0;
let result=[];

while(i<n && j<m){
if(arr1[i]<arr2[j]){
if(result.length===0 || result[result.length-1]!==arr1[i]){
result.push(arr1[i]);
}
i++;

}else if(arr1[i]>arr2[j]){
if(result.length===0 || result[result.length-1]!==arr2[j]){
result.push(arr2[j]);
}
j++;

}
else{
if(result.length===0 || result[result.length-1]!==arr1[i]){
result.push(arr1[i]);
}
i++;
j++;
}
}

while(i<n){
if(result[result.length-1]!==arr1[i]){
result.push(arr1[i]);
}
i++;

}

while(j<m){
if(result[result.length-1]!==arr2[j]){
result.push(arr2[j]);

}
j++;
}

console.log(result);

}
union(arr1,arr2,n,m);