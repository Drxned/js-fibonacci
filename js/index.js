function fact(n){
if (n==1||n==2) return 1;
else return fact(n - 1) + fact(n - 2);
}
const n=parseInt(prompt('введіть номер числа'));
alert(fact(n));