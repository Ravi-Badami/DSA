var lengthOfLastWord = function(s) {
    let arr=s.trim().split(/\s+/);
    let count= arr[arr.length-1].length;
    return count;
};