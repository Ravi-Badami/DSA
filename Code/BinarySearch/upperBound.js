let arr=[1,2,2,3]
const x = 3
function solution(arr,x){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=x){
            return i;
        }
    }
    return arr.length;
}
console.log(solution(arr,x))