//Las conversiones pueden ocurrir automáticamente
const STR1 = 42 + "1";
console.log(STR1);//421
console.log(typeof STR1);//string

const STR2 = 42 - "1";
console.log(STR2);//41
console.log(typeof STR2);//number

let num = 42;
console.log(typeof num);

string = num.toString();
console.log(typeof string);