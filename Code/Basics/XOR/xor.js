//🟢 Easy Level (Foundations)
//These questions build core intuition about how the ^ operator works in JS.
//
//Q1. Basic XOR Evaluation
//What is the output of the following code? Explain why.
//
//
console.log(5 ^ 3);
//console.log(9 ^ 14);  // ?
//console.log(7 ^ 7);   // ?
//console.log(0 ^ 15);  // ?
//Q2. Swap Without Temp Variable
//Swap two variables a and b using only XOR — no third variable allowed.
//
//
//let a = 10, b = 25;
//// Your XOR swap here
//console.log(a, b); // Expected: 25 10
//Q3. Find the Lone Number
//Given an array where every element appears twice except one, find that one element using XOR.
//
//
//function findSingle(arr) { /* your code */ }
//console.log(findSingle([2, 3, 2, 4, 4])); // 3
//Q4. Check Equality Without ===
//Use XOR to check if two numbers are equal (result is 0 if equal).
//
//
//function areEqual(a, b) { /* return true/false using XOR */ }
//Q5. Toggle a Specific Bit
//Write a function to toggle the k-th bit (0-indexed) of a number n using XOR.
//
//js
//function toggleBit(n, k) { /* your code */ }
//console.log(toggleBit(10, 1)); // 8  (1010 → 1000)
//Q6. XOR Truth Table
//Fill in the output manually for all combinations:
//
//js
//console.log(0 ^ 0); // ?
//console.log(0 ^ 1); // ?
//console.log(1 ^ 0); // ?
//console.log(1 ^ 1); // ?
//Q7. XOR of 1 to N
//Compute XOR of all integers from 1 to n using the known pattern (no loop needed).
//
//js
//function xorUptoN(n) { /* your code */ }
//console.log(xorUptoN(6)); // 7
//Q8. Check if Bit is Set
//Return true if the k-th bit of n is 1, using XOR.
//
//js
//function isBitSet(n, k) { /* your code */ }
//console.log(isBitSet(5, 0)); // true (5 = 101)
//Q9. Flip All Bits (1s Complement)
//Use XOR with a bitmask to flip all 32 bits of a number.
//
//js
//function flipBits(n) { /* use n ^ 0xFFFFFFFF */ }
//Q10. XOR of Array Elements
//Find the XOR of all elements in an array.
//
//js
//function xorAll(arr) { /* your code */ }
//console.log(xorAll([1, 2, 3, 4])); // 4
//Q11. Even or Odd Using XOR
//Determine if a number is even or odd using ^. (Hint: XOR with 1)
//
//js
//function isOdd(n) { /* your code, no % or & */ }
//Q12. Missing Number (1 to N)
//Find the missing number in an array of integers [1..n] with one missing, using XOR.
//
//js
//function findMissing(arr, n) { /* your code */ }
//console.log(findMissing([1, 2, 4, 5], 5)); // 3
//🟡 Medium Level (Pattern Recognition)
//These require deeper understanding of XOR properties and array manipulation.
//
//Q1. Two Non-Duplicate Numbers
//An array has every element twice except two numbers. Find both using XOR.
//
//js
//function findTwoSingles(arr) { /* your code */ }
//console.log(findTwoSingles([2, 4, 7, 9, 2, 4])); // [7, 9]
//Q2. XOR in Range [L, R]
//Compute XOR of all integers from L to R efficiently (use xorUptoN).
//
//js
//function xorRange(L, R) { /* return xorUptoN(R) ^ xorUptoN(L-1) */ }
//console.log(xorRange(4, 8)); // ?
//Q3. Count Pairs with Odd XOR
//Given an array, count pairs (i, j) where arr[i] ^ arr[j] is odd.
//
//js
//function countOddXorPairs(arr) { /* your code */ }
//Q4. XOR Encryption
//Encrypt a string using a single-character XOR key, then decrypt it with the same key.
//
//js
//function xorEncrypt(str, key) { /* XOR each char code */ }
//function xorDecrypt(str, key) { /* same operation */ }
//Q5. Game of XOR (Subarray XOR)
//Compute the XOR of all subarray XORs of an array in O(n).
//
//js
//function gameOfXOR(arr) { /* your code */ }
//console.log(gameOfXOR([1, 2, 3])); // 2
//Q6. Find Duplicate and Missing Using XOR
//In an array of size n with values [1..n] where one number is duplicated and one is missing, find both.
//
//js
//function findDuplicateMissing(arr) { /* your code */ }
//Q7. Maximum XOR of Two Elements (Brute Force)
//Find the maximum XOR value possible from any two elements in the array.
//
//js
//function maxXorBrute(arr) { /* O(n²) solution */ }
//console.log(maxXorBrute([3, 10, 5, 25, 2, 8])); // 28
//Q8. XOR Linked List
//Implement an XOR doubly linked list node that stores prev XOR next instead of two pointers.
//
//js
//class XORNode { constructor(val) { this.val = val; this.npx = null; } }
//Q9. Single Number III (LeetCode style)
//Every element appears three times except one — find it using bit manipulation.
//
//js
//function singleNumber(arr) { /* use bit counting, not XOR alone */ }
//Q10. Count Nums Where Sum Equals XOR
//Count numbers x in [0..n] such that n + x === n ^ x.
//
//js
//function countEqualSumXOR(n) { /* your code */ }
//console.log(countEqualSumXOR(7)); // 8
//Q11. XOR Queries on Array
//Given a prefix XOR array and queries [L, R], answer each range XOR query in O(1).
//
//js
//function buildPrefix(arr) { /* your code */ }
//function query(prefix, L, R) { /* return prefix[R+1] ^ prefix[L] */ }
//🔴 Hard Level (Advanced Algorithms)
//These require combining XOR with data structures or mathematical reasoning.
//
//Q1. Maximum XOR Using Trie
//Solve the maximum XOR of two numbers in an array in O(n·32) using a binary Trie.
//
//js
//class TrieNode { constructor() { this.children = [null, null]; } }
//function maxXorTrie(arr) { /* insert all, then query each */ }
//Q2. Maximum XOR Subarray
//Find the subarray with the maximum XOR value using prefix XOR + Trie.
//
//js
//function maxXorSubarray(arr) { /* your code */ }
//console.log(maxXorSubarray([8, 1, 2, 12, 7, 6])); // 15
//Q3. Minimum XOR of Any Pair
//Given an array, find the minimum XOR between any two elements (sort + adjacent check).
//
//js
//function minXorPair(arr) { /* sort + compare neighbors */ }
//Q4. XOR Basis (Linear Basis)
//Build a Gaussian elimination basis of at most 32 XOR-independent numbers from an array, then find the maximum XOR achievable from any subset.
//
//js
//function xorBasis(arr) { /* build basis array of size 32 */ }
//function maxSubsetXOR(arr) { /* use basis */ }
//Q5. Reconstruct Array from XOR Array
//Given xorArr where xorArr[i] = arr[i] ^ arr[i+1], and the first element arr[0], reconstruct the original array.
//
//js
//function reconstruct(xorArr, first) { /* your code */ }
//Q6. XOR of All Pairs Bitwise AND
//For all pairs (i, j) where i < j, compute the sum of (arr[i] AND arr[j]) XOR'd together efficiently.
//
//js
//function xorSumPairsAND(arr) { /* O(32·n) solution */ }
//Q7. Minimum Flips to Make a OR b = c
//Use XOR and bit tricks to find the minimum bit flips to satisfy a | b === c.
//
//js
//function minFlips(a, b, c) { /* process bit by bit */ }
//console.log(minFlips(2, 6, 5)); // 3
//Q8. XOR Path in Binary Tree
//Find the path from root to leaf that produces the maximum XOR.
//
//
//function maxXorPath(root) { /* DFS with running XOR */ }
//Q9. Minimum Cost XOR Partition
//Given an array, partition it into k subarrays minimizing the sum of XOR values of each subarray.
//
//function minXorPartition(arr, k) { /* DP + XOR */ }
//Q10. Gray Code Generator Using XOR
//Generate the full n-bit Gray code sequence where consecutive codes differ by exactly 1 bit.
//
//
//function grayCode(n) {
//  return Array.from({length: 1 << n}, (_, i) => i ^ (i >> 1));
//}
//// Verify: each consecutive pair XOR should be a power of 2
//Q11. XOR BST
//Given a BST where node values represent XOR-encoded data, write an in-order traversal that decodes values using a running XOR key from root to node.
//
//js
//function decodeXorBST(root, key) { /* DFS decode */ }
//Q12. Count Triplets Where XOR = 0
//Count all triplets (i, j, k) where arr[i] ^ arr[j] ^ arr[k] === 0 in better than O(n³).
//
//js
//function countZeroXorTriplets(arr) { /* O(n²) using hash map */ }
//console.log(countZeroXorTriplets([2, 3, 1, 6, 7])); // 2