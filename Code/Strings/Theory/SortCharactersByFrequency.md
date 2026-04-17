
***

## Part 1 — Building the freq Array
```js
let freq = Array(26).fill(0).map((_, i) => [0, String.fromCharCode(i + 97)]);
```
As explained before, this just creates a slot for each letter `a` to `z`:
```
freq = [
  [0, 'a'],  ← index 0
  [0, 'b'],  ← index 1
  [0, 'c'],  ← index 2
  ...
  [0, 'z']   ← index 25
]
```


## Piece 1 — `Array(26)`

```
Array(26)
```

Simply creates an empty array with **26 empty slots** — one for each letter `a` to `z`.

```
[ , , , , , ...26 empty slots... ]
```
***
## Piece 2 — `.fill(0)`
```
Array(26).fill(0)
```
Fills all 26 empty slots with the value `0`.[developer.mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
```
[0, 0, 0, 0, 0, ...26 zeros...]
```
Without `.fill(0)`, the slots are truly empty and `.map()` would **skip** them entirely. So `.fill(0)` is just there to make `.map()` work correctly.
***
## Piece 3 — `.map((_, i) => [0, String.fromCharCode(i + 97)])`
```
.map((_, i) => [0, String.fromCharCode(i + 97)])
```
`.map()` loops through all 26 items and **replaces each `0`** with a small array `[count, letter]`.[geeksforgeeks](https://www.geeksforgeeks.org/javascript/create-an-array-filled-with-given-values-using-javascript/)

* `_` → the current value (just `0`, we don't need it, so we name it `_` to ignore it)
* `i` → the index (0, 1, 2 ... 25)
* `String.fromCharCode(i + 97)` → converts index to a letter:
    * `i=0` → `0+97=97` → `'a'`
    * `i=1` → `1+97=98` → `'b'`
    * `i=25` → `25+97=122` → `'z'`
***
## Final Result
```
text
freq = [
  [0, 'a'],   // index 0
  [0, 'b'],   // index 1
  [0, 'c'],   // index 2
  ...
  [0, 'z']    // index 25
]
```

Every letter starts with a count of `0`. Later in the code, you go to the right slot and increase the count — for example `'e'` is at index `4`, so `freq[4]` becomes `[2, 'e']` after counting.

## Part 2 — Counting Each Letter

```js
for (let ch of s) {
    freq[ch.charCodeAt(0) - 97][0]++;
}
```

This loops through **every character** in the string `s` one by one.

For each character `ch`, it does **two things**:

**Step 1 — Find the right slot:**
```js
ch.charCodeAt(0) - 97
```
- `charCodeAt(0)` converts the letter to its ASCII number
- Why charCodeAt(0)?
  charCodeAt() takes an index — it asks: "which character inside this string do you want the code for?"
- In our loop, ch is already a single character like 'e' or 't'. So it only has one character at index 0.
- Since ch always has just one character, we always pass 0 — meaning "give me the code of the first (and only) character".
- Subtracting `97` converts it to an **index** (0 to 25)
- `'a'` → `97 - 97 = 0` → go to `freq[0]`
- `'e'` → `101 - 97 = 4` → go to `freq [sitepoint](https://www.sitepoint.com/community/t/counting-frequency-of-character/216026)`
- `'t'` → `116 - 97 = 19` → go to `freq[19]`

**Step 2 — Increase the count:**
```js
freq[index][0]++
```
- `[0]` refers to the **first item** in the slot (the count)
- `++` adds 1 to it

***

## Tracing Through `"tree"`

| Character | charCodeAt(0) | index | What happens |
|---|---|---|---|
| `'t'` | 116 | 116-97 = **19** | `freq[19]` → `[0,'t']` becomes `[1,'t']` |
| `'r'` | 114 | 114-97 = **17** | `freq[17]` → `[0,'r']` becomes `[1,'r']` |
| `'e'` | 101 | 101-97 = **4** | `freq [sitepoint](https://www.sitepoint.com/community/t/counting-frequency-of-character/216026)` → `[0,'e']` becomes `[1,'e']` |
| `'e'` | 101 | 101-97 = **4** | `freq [sitepoint](https://www.sitepoint.com/community/t/counting-frequency-of-character/216026)` → `[1,'e']` becomes `[2,'e']` |

After the loop, `freq` looks like:
```
freq [sitepoint](https://www.sitepoint.com/community/t/counting-frequency-of-character/216026)  = [2, 'e']  ← 'e' appeared twice
freq[17] = [1, 'r']  ← 'r' appeared once
freq[19] = [1, 't']  ← 't' appeared once
// all other slots still have count 0
```

The idea is simple — use each letter's position in the alphabet as a **direct index** to find its slot instantly, without searching. This makes counting O(n) — just one pass through the string.

## Step 3 — Sort
```js
freq.sort((a, b) => {
    if (a[0] !== b[0]) return b[0] - a[0];
    return a [geeksforgeeks](https://www.geeksforgeeks.org/dsa/sort-elements-by-frequency/).localeCompare(b [geeksforgeeks](https://www.geeksforgeeks.org/dsa/sort-elements-by-frequency/));
});
```

This rearranges the 26 slots using two rules:

- **Rule 1** → If counts are different, put the **higher count first** (`b[0] - a[0]`)
- **Rule 2** → If counts are the same, put them in **alphabetical order** (`localeCompare`)

After sorting, the top of `freq` looks like:
```
[2, 'e']  ← highest count
[1, 'r']  ← tied at 1, but 'r' < 't' alphabetically
[1, 't']
[0, 'a']
[0, 'b']
... and so on
```

## Now Let's Trace Each Comparison

`.sort()` picks **two items at a time** and decides who comes first.

***

### Comparison 1: `[3,'c']` vs `[5,'b']`

```
a = [3,'c'],  b = [5,'b']

Step 1: Are counts different? 3 !== 5 → YES
Step 2: return b[0] - a[0] = 5 - 3 = +2  (positive)

Positive → SWAP → [5,'b'] comes before [3,'c']
```

Array after: `[5,'b'], [3,'c'], [3,'a'], [1,'d']`

***

### Comparison 2: `[3,'c']` vs `[3,'a']`

```
a = [3,'c'],  b = [3,'a']

Step 1: Are counts different? 3 !== 3 → NO, skip
Step 2: return a.localeCompare(b) 
      = 'c'.localeCompare('a')
      = +1  (positive → 'c' comes AFTER 'a' in alphabet)

Positive → SWAP → [3,'a'] comes before [3,'c']
```

Array after: `[5,'b'], [3,'a'], [3,'c'], [1,'d']`

***

### Comparison 3: `[3,'c']` vs `[1,'d']`

```
a = [3,'c'],  b = [1,'d']

Step 1: Are counts different? 3 !== 1 → YES
Step 2: return b[0] - a[0] = 1 - 3 = -2  (negative)

Negative → KEEP ORDER → [3,'c'] stays before [1,'d']
```

Array after: `[5,'b'], [3,'a'], [3,'c'], [1,'d']`

***

## Final Sorted Result

```js
[5,'b']  ← highest count (5)
[3,'a']  ← tied at 3, but 'a' comes before 'c' alphabetically
[3,'c']  ← tied at 3
[1,'d']  ← lowest count (1)
```

***

## The Two Rules — Plain English

| Situation | What happens | Example |
|---|---|---|
| Counts are **different** | Higher count wins | `5 > 3` → `b` first |
| Counts are **same** | Alphabet order wins | `a` before `c` → `a` first |

> `b[0] - a[0]` handles rule 1. `localeCompare` handles rule 2. Together they cover every possible case. 