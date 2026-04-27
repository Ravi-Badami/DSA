/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let combination=s+s;
    let j=s.length-1;
    if(s.length!==goal.length) return false;
    for(let i=0;i<combination.length;i++){
        let word=combination.substring(i,j+1);
        if(word===goal){
            return true;
        }else{
            j++;
        }
    }
    return false;

};


