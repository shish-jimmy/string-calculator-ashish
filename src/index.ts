import { add } from "./StringCalculator";

console.log(add("1,2,3")); 
console.log(add("1\n2,3"));
console.log(add("//;\n1;2"));
console.log(add("1,-2,3,-4"));
console.log(add("2,1001"));