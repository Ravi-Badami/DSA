# Optimized - Two pointer 

No search needed — let me build it visually for you.

## Think of It as Two People Walking

Imagine the array as a row of boxes with numbers written on them:

```
[ 1, 1, 2, 2, 3, 3, 4, 4 ]
```

There are **two people**:
- 🐢 **Slow (i)** — the "writer", stays behind, only moves when something new is found
- 🐇 **Fast (j)** — the "scanner", walks every single box one by one

***

## Step-by-Step Walkthrough

```
[ 1, 1, 2, 2, 3, 3, 4, 4 ]
  🐢  🐇
```
`j` sees `1` → same as `i`'s value `1` → **skip, j moves forward**

```
[ 1, 1, 2, 2, 3, 3, 4, 4 ]
  🐢     🐇
```
`j` sees `2` → different from `i`'s `1` → **🐢 moves one step, then writes `2` there**

```
[ 1, 2, 2, 2, 3, 3, 4, 4 ]
     🐢     🐇
```
`j` sees `2` → same as `i`'s `2` → **skip**

```
[ 1, 2, 2, 2, 3, 3, 4, 4 ]
     🐢        🐇
```
`j` sees `3` → different → **🐢 moves, writes `3`**

```
[ 1, 2, 3, 2, 3, 3, 4, 4 ]
        🐢        🐇
```
...and so on until:

```
[ 1, 2, 3, 4, 3, 3, 4, 4 ]
           🐢              (j finished)
```

Then **trim everything after 🐢** → `[1, 2, 3, 4]` ✅

***

## The One Rule

> 🐢 only moves forward when 🐇 finds something **new**. Everything 🐢 has touched so far = your unique list.

The "junk" at the back doesn't matter — it's just old overwritten data that gets chopped off.