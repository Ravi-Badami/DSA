const commands = ["push 1", "push 2", "push 3", "pop", "pop", "top"];
const results=[];

function executeStackCommands(commands){

let stack=[];
let results=[];

for(let command of commands){
const parts=command.split(' ');
const operation=parts[0];

console.log(operation);
if(operation==="push"){
const val=parseInt(parts[1]);
stack.push(val);
}else if(operation==="pop"){
stack.pop();
}
}
return stack;
}

const result=executeStackCommands(commands);
console.log(result);