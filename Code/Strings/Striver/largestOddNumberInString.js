

var largestOddNumber = function(num) {
    let start=0;
    let end=num.length-1;
    let result="";

    while(end>=0){
        while(end>=start && parseInt(num[end])%2!==0){
            end--;
        }
        while(start<=end && num[start]==="0"){
            start++;
        }
        if(start===end && parseInt(num[end])!==0) return num[start];
        result=num.substring(start,end+1);
        return result;
    }


};
conosle.log(largestOddNumber('1'));