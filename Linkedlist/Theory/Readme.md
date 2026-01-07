Linkied list
why linked list way created in the first place

- linked list was first created to solve the limitations of the array.to support more flexible memory and data operations
- Fundamental drawbacks of the Arrays
- Fixed size
  You should decide the size of the array in advance
  growing and strinking of an array is expensive (copying required)
- Costly insertions and deletions
  inserting and deletion required shifting of elements
  required o(n)
- Memory allocation
  arrays need a contineous block of memory
  can fail even if enough memoery exsits but fragmented

why linkedlist was invented
Linkedlist lists solve this problems by storing elements as independent nodes connected by pointers

Dynamic size

- Grow and shrink at runtime
- doesnt need to know the size beforehand

Efficient insertions and deletions

- can delete or update any node if the location is known
- no shifting is needed just change the pointers
- o(1) if the position is known

Non contineous memory

- node can live anywhere in the memory
- can work with fragmented memory

what will a node contain

- value
- next node reference
