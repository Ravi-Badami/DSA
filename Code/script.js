// Dynamically load the largestElement.js file
let script = document.createElement('script');
// script.src = './Arrays/largestElement.js';
// script.src = './Arrays/twoSum/bruteForce.js';
//script.src = './Arrays/twoSum/twoPhaseHashTable.js';
script.src = './Arrays/twoSum/onePhaseHashTable.js';
document.head.appendChild(script);
