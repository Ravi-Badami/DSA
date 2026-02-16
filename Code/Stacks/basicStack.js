
let top=-1;
const size=4;
let arr=[];

pop();
//display();

//topVal();

function push(val){
if(top>=size-1){
console.log("Stack overflow");
return;
}else{
top++;
arr[top]=val;
}


}

function pop(){
if(top===-1) {
console.log("Stack underflow");
return;

}
console.log(arr[top]);
top--;
}

function topVal(){
if(top===-1) {
console.log("Stack underflow");
return;

}
console.log(arr[top]);
}

function display(){
for(let i=0;i<=top;i++){
console.log(arr[i]);
}
}


