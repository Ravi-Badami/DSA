const word = 'ravikumaraaar';

function mostFrequent(word) {
  const map = new Map();
  for (let i = 0; i < word.length; i++) {
    if (map.has(word[i])) {
      map.set(word[i], map.get(word[i]) + 1);
    } else {
      map.set(word[i], 1);
    }
  }

  let maxFre=0;
 let maxCh='';
 for(const [key,value] of map){
 if(value>maxFre){
 maxFre=value;
 maxCh=key;
  }


  }
  console.log(maxFre,maxCh)

}

mostFrequent(word);
