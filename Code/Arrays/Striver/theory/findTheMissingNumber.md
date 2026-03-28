[Naive Approach]
Linear Search for Missing Number - O(n^2) Time and O(1) Space
This approach iterates through each number from 1 to n (where n is the size of the array + 1) and checks if the number is present in the array. For each number, it
uses a nested loop to search the array. If a number is not found, it is returned as the missing number.

[Better Approach] Using Hashing - O(n) Time and O(n) Space
This approach uses a hash array (or frequency array) to track the presence of each number from 1 to n in the input array. 
It first initializes a hash array to store the frequency of each element. 
Then, it iterates through the hash array to find the number that is missing (i.e., the one with a frequency of 0).

---

## 🧠 Problem Understanding

You are given:
- An array of size **n - 1**
- It contains numbers from **1 to n**
- All numbers are present **except one**

👉 Your goal: **find the missing number**

---

## 💡 Core Idea (Hashing Concept)

We solve this by creating a **tracking system** to record which numbers are present.

Think like this:

> “I will create a separate array where each position tells me whether a number exists or not.”

---

## 🪣 Step 1: Create a Tracking Array

We create a new array (called `hash`) filled with zeros.

👉 Why zeros?  
Because:

- `0` → means “not seen yet”
- `1` (or more) → means “seen”

So initially:

> “I assume no numbers are present.”

---

## 🧠 Step 2: Map Numbers to Positions

Now the key idea:

> “Each number will map to a specific index in the hash array.”

Since array indices start from **0**, but numbers start from **1**, we adjust:

- Number `1` → index `0`
- Number `2` → index `1`
- Number `3` → index `2`
- …
- Number `n` → index `n - 1`

👉 That’s why we use:

> **index = number - 1**

---

## 🏷️ Step 3: Mark Numbers as Present

Now we go through the given array.

For each number:

> “Mark its position in the hash array as present.”

In words:

- Take a number
- Convert it to its index (`number - 1`)
- Mark that position

So mentally:

> “If I see number 4, I go to index 3 and mark it.”

---

## 🔍 Step 4: Find the Missing Number

After marking all numbers, we check the hash array.

> “If any position is still 0, it means that number was never seen.”

So:

- index `i` → represents number `i + 1`

If:

> `hash[i] == 0`

Then:

> Missing number = `i + 1`

---

## 🧠 Full Logic in One Flow

1. Assume all numbers are missing
2. Mark numbers as you see them
3. The one you never marked → is missing

---

## 🎯 Why This Works

Because:
- Every number gets a **unique position**
- You can check presence in **constant time O(1)**
- No need to search repeatedly

---

## ⚡ Time & Space Thinking

- Time: **O(n)** → one pass to mark + one pass to check
- Space: **O(n)** → extra array

---

## 🧠 Memory Trick (Very Important)

If you forget everything, remember this:

> “I use an array where index represents the number, and I mark what I see. The unmarked index gives me the missing number.”

---

## 🧩 Intuition in Real Life

Imagine:

- You have roll numbers from 1 to n
- You mark attendance on a sheet

At the end:

> The student whose row is unmarked → is absent (missing)

---

If you want next step, I can show:
- how to **derive this logic yourself in an interview**
- or how to move from brute force → hashing → optimal 🚀


[Expected Approach 1] Using Sum of n terms Formula - O(n) Time and O(1) Space
The sum of the first n natural numbers is given by the formula (n * (n + 1)) / 2.
The idea is to compute this sum and subtract the sum of all elements in the array from it to get the missing number.

