***

### Core idea in one line

Rotating an array = **cutting it into two parts and rearranging them**.  
Instead of shifting each element one‑by‑one, we **reverse specific chunks** of the array to get the same final order.

***

## Case 1: Right rotation by `k` steps

Pattern (for right rotation):

1. **Reverse the whole array**
2. **Reverse the first `k` elements**
3. **Reverse the remaining `n − k` elements**

Let’s see **why** this works with an example.

### Example: `nums = [1, 2, 3, 4, 5, 6, 7]`, `k = 2`, right

Desired right rotation by 2:

\[
[6, 7, 1, 2, 3, 4, 5]
\]

Split the array into two parts:

- Last `k = 2` elements: `[6, 7]`
- First `n − k = 5` elements: `[1, 2, 3, 4, 5]`

The **final** array is:

\[
[6, 7] + [1, 2, 3, 4, 5]
\]

We want to move the **last `k` block** to the **front**.  
Reversing in three steps does exactly that.

***

### Step‑by‑step intuition (no code, just logic)

1. **Reverse the entire array**  
   Original:  
   \[
   [1, 2, 3, 4, 5, 6, 7]
   \]  
   Reversed:  
   \[
   [7, 6, 5, 4, 3, 2, 1]
   \]

   Now the **last `k` elements `6,7`** have become the **first `k` elements `7,6`** (but reversed).

2. **Reverse the first `k` elements**
  - `k = 2` → reverse indices `[0, 1]`  
    \[
    [7, 6] \rightarrow [6, 7]
    \]  
    So now:  
    \[
    [6, 7, 5, 4, 3, 2, 1]
    \]

3. **Reverse the remaining `n − k` elements**
  - `n − k = 5` → reverse indices `[2, 3, 4, 5, 6]`  
    \[
    [5, 4, 3, 2, 1] \rightarrow [1, 2, 3, 4, 5]
    \]  
    Final array:  
    \[
    [6, 7, 1, 2, 3, 4, 5]
    \]

Exactly the **right‑rotated** result.

***

### Why this works (in words)

- First `reverse(arr)` makes the **last `k` elements** move to the **front** (but backwards).
- Then `reverse(first k)` puts that **front block back in correct order**.
- Then `reverse(rest)` puts the **remaining block back in original order**.

So we have:

\[
\text{move last } k \text{ to front} \quad \Rightarrow \text{ right rotation by } k
\]

***

## Case 2: Left rotation by `k` steps

Pattern (for left rotation):

1. **Reverse the first `k` elements**
2. **Reverse the remaining `n − k` elements**
3. **Reverse the entire array**

Same array: `[1, 2, 3, 4, 5, 6]`, `k = 2`, left.  
Desired result:

\[
[3, 4, 5, 6, 1, 2]
\]

Split:

- First `k = 2`: `[1, 2]`
- Remaining `n − k = 4`: `[3, 4, 5, 6]`

We want:

\[
[3, 4, 5, 6] + [1, 2]
\]

Reversing does this:

1. **Reverse first `k`**: `[1, 2] → [2, 1]`
2. **Reverse remaining**: `[3, 4, 5, 6] → [6, 5, 4, 3]`
3. **Reverse entire array**:

  - After step 1 and 2: `[2, 1, 6, 5, 4, 3]`
  - Reverse whole: `[3, 4, 5, 6, 1, 2]` ✅

***

### Why this works for left rotation

- Reverse first `k` and reverse rest → the **first `k` block** is moved **to the back** but backwards.
- Then reverse whole array → the **back block** (originally the first `k`) moves to the front in correct order, and the **front block** (originally the rest) moves to the back in correct order.

So effectively:

\[
\text{move first } k \text{ to the back} \quad \Rightarrow \text{ left rotation by } k
\]

***

### Why we do `k = k % n`

- Rotate an array of size `n` exactly `n` times → back to original → no change. [geeksforgeeks](https://www.geeksforgeeks.org/dsa/array-rotation/)
- So rotating by `k` is the same as rotating by `k % n`. [geeksforgeeks](https://www.geeksforgeeks.org/dsa/program-for-array-rotation-continued-reversal-algorithm/)

So at the start we always do:

\[
k = k \% n
\]

Then apply the 3‑step reversal pattern above for either **left** or **right**.

***
