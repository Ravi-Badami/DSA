//more Questions
//Here are some edge-case style test questions in the same format:
//
//let arr=[1,3,5,7]
//const target = 0
//
//let arr=[1,3,5,7]
//const target = 8
//
//let arr=[1,3,5,7]
//const target = 5
//
//let arr=[1,2,4,7]
//const target = 3
//
//let arr=[1,2,4,7]
//const target = 6
//
//let arr=[1,2,4,7]
//const target = 7
//
//let arr=[1,2,4,7]
//const target = 8
//
//let arr=[2,4,6,8,10]
//const target = 1
//
//let arr=[2,4,6,8,10]
//const target = 11
//
//let arr=[2,4,6,8,10]
//const target = 6
//
//let arr=[1,4,6,9,12]
//const target = 5
//
//let arr=[1,4,6,9,12]
//const target = 9
//
//let arr=[1,4,6,9,12]
//const target = 13
//
//let arr=[]
//const target = 5





let arr=[1,2,4,7]
const target = 6
function solution(arr,target){
    let start=0;
    let end=arr.length-1;
    while(start<=end){
        let mid=Math.floor((start+end)/2);
        if(arr[mid]===target){
            return mid;
        }
        if(arr[mid]<target){
            start=mid+1;
        }
        if(arr[mid]>target){
            end=mid-1;
        }

    }
    return start;

}
console.log(solution(arr,target))

