Time Complexity: O(n), We are performing a constant number of linear operations copying `k` elements and shifting up to `n-k` elements.

Space Complexity: O(k) ,A temporary array of size `k` is used to store either the first `k` or last `k` elements depending on the direction of rotation.

# why can't i use unshift and pop here for left rotation
#### Because using unshift and pop the time compexity will be O(n * k )
N because the Unshift will be o(n) as it reset the position of all the indexes.
k because u have to call the unshift k times ( the number of times u need to add the elements at the start)


 # why can't i use slice here for right rotation
```js
arr=arr.slice(0,n-k);
temp=[...temp,...arr];
```
 
 ##### Because this will make the space complexity as O(n).
 only use temp array for storing k elements which u want to put from the back of the array to the front not use temp array to store the result
 

Let’s **trace it step by step** for a small example you already know:

Array:  
`nums = [1, 2, 3, 4, 5, 6, 7]`
`k = 2`, `direction = "right"`

***

### Step 0: Normalize `k`

\[
k = 2,\quad n = 7 \Rightarrow k \% 7 = 2
\]

So we rotate **right by 2 steps**:

- After 1 step: `[7, 1, 2, 3, 4, 5, 6]`
- After 2 steps: `[6, 7, 1, 2, 3, 4, 5]` ← this is our expected answer.

***

### Step 1: Make a copy and create `temp`

```js
const arr = [...nums]; // [1, 2, 3, 4, 5, 6, 7]
const temp = new Array(k); // temp = [_, _]  (size 2)
```

***

### Step 2: Right rotation – store last `k` elements in `temp`

We do:

```js
for (let i = 0; i < k; i++) {
  temp[i] = arr[n - k + i];  // n = 7, k = 2
}
```

Loop:

- `i = 0`:
  \[
  n - k + i = 7 - 2 + 0 = 5 \Rightarrow arr = 6
  \] 
  → `temp[0] = 6`

- `i = 1`:
  \[
  n - k + i = 7 - 2 + 1 = 6 \Rightarrow arr = 7
  \]
  → `temp[1] = 7`

So after this step:

```js
arr = [1, 2, 3, 4, 5, 6, 7]
temp = [6, 7]
```

***

Now we want to **shift the first `n - k = 5` elements** (indices `0` to `4`) **to the right by 2 positions**.

That means:

* `arr[0]` → should go to `arr[2]`

* `arr[1]` → should go to `arr[3]`

* `arr[2]` → should go to `arr[4]`

* `arr[3]` → should go to `arr[5]`

* `arr[4]` → should go to `arr[6]`

We **must move from right to left** (backwards) so we don’t overwrite something before we use it.

***

## Step‑by‑step of the loop

Code:

```js

for (let i = n - k - 1; i >= 0; i--) {
  arr[i + k] = arr[i];
}
```

Here `n = 7`, `k = 2` ⇒ `n - k - 1 = 4`

So `i` goes from `4` down to `0`.

***

## 1. `i = 4`

```js
arr[4 + 2] = arr[4]
```

arr\[6]=arr\[4]=5

Before:

```js
arr = [1, 2, 3, 4, 5, 6, 7]
```

After:

```js
arr = [1, 2, 3, 4, 5, 6, 5]
```

* Index 6 (originally `7`) is now `5` (from index 4).

***

## 2. `i = 3`


```js
arr[3 + 2] = arr[3]
```

arr\[5]=arr\[3]=4

Current:

```js
arr = [1, 2, 3, 4, 5, 6, 5]
```

After:


```js
arr = [1, 2, 3, 4, 5, 4, 5]
```

* Index 5 (originally `6`) is now `4` (from index 3).

***

## 3. `i = 2`

```js
arr[2 + 2] = arr[2]
```

arr\[4]=arr\[2]=3

Current:

```js
arr = [1, 2, 3, 4, 5, 4, 5]
```

After:

```js
arr = [1, 2, 3, 4, 3, 4, 5]
```

* Index 4 (was `5`) is now `3` (from index 2).

***

## 4. `i = 1`

```js
arr[1 + 2] = arr[1]
```

arr\[3]=arr\[1]=2

Current:

```js
arr = [1, 2, 3, 4, 3, 4, 5]
```

After:

```js
arr = [1, 2, 3, 2, 3, 4, 5]
```

* Index 3 (was `4`) is now `2` (from index 1).

***

## 5. `i = 0`

```js
arr[0 + 2] = arr[0]
```

arr\[2]=arr=1

Current:

```
js
arr = [1, 2, 3, 2, 3, 4, 5]
```

After:

```
js
arr = [1, 2, 1, 2, 3, 4, 5]
```

* Index 2 (was `3`) is now `1` (from index 0).

***

## So what have we done?

* Elements that started at:

  * `0 → 2`

  * `1 → 3`

  * `2 → 4`

  * `3 → 5`

  * `4 → 6`

So the **first 5 elements** have all moved **2 positions to the right**.

Right now we have:

```
js
arr = [1, 2, 1, 2, 3, 4, 5]
temp = [6, 7]
```

The **last 2 slots** (`arr[5]` and `arr[6]`) are already filled with other values; we’ll **fix the front** next by putting `temp` there.

***

## Step 4 (quickly, to finish)

Then we do:

```
js
for (let i = 0; i < k; i++) {
  arr[i] = temp[i];
}
```

* `arr[0] = 6`

* `arr[1] = 7`

So:

```
js
arr = [6, 7, 1, 2, 3, 4, 5]
```

Which is exactly the expected right‑rotated output.

