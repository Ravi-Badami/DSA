let arr1 = [1,2,3,4,5];
let arr2 = [2,3,4,4,5];
let n=5;
let m=5;
function union(arr1,arr2,n,m){
let i=0,j=0;
let result=[];


 // Iterate while both pointers are within array bounds
while(i<n && j<m){
    // If element in arr1 is smaller
    if(arr1[i]<arr2[j]){
        // Add if empty or not duplicate
        if(result.length===0 || result[result.length-1]!==arr1[i]){
        result.push(arr1[i]);

    }
        i++;
    }
    // If element in arr2 is smaller
    else if(arr1[i]>arr2[j]){
        // Add if empty or not duplicate
        if(result.length===0 || result[result.length-1]!==arr2[j]){
            result.push(arr2[j]);
        }
        j++;
    }
    else{
        // Elements are equal, add once if not duplicate
        if(result.length===0 || result[result.length-1]!==arr1[i]){
            result.push(arr1[i]);
        }
        i++;
        j++;
    }
}
// Append remaining elements from arr1
while(i<n){
    if(result[result.length-1]!==arr1[i]){
        result.push(arr1[i]);
    }
    i++;

}
// Append remaining elements from arr2
while(j<m){
    if(result[result.length-1]!==arr2[j]){
      result.push(arr2[j]);
    }
    j++;
}

console.log(result);

}
union(arr1,arr2,n,m);