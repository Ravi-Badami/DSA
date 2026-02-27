class Node{
constructor(value){
this.value=value;
this.next=null;
}
}

class LinkedList{
constructor(){
this.head=null;
this.size=0;

}


append(value){
const newNode=new Node(value);

if(!this.head){
this.head=newNode;
this.size++;

}else{
let current=this.head;
if(current.next){
current=current.next;
this.size++
}
current.next=newNode;

}


}


remove(value){
if(!this.head){
console.log("No node");
}else if(this.head.value===value){
this.head=this.head.next;
this.size--;
}else{
let current=this.head;

while(current.next){
if(current.next.value===value){
current.next=current.next.next;
this.size--;
break;
}
current=current.next;
}
}
}

print(){
const result=[];
if(!this.head){
console.log("No node");
}

let current=this.head;
while(current){
result.push(current.value)
current=current.next;
}
console.log(result.join('->'));


}
}

const list=new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.print();
console.log("before remove")
list.remove(10);
list.print();
