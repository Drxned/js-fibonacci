function fib(n){
if (n==1||n==2) return 1;
else return fib(n - 2) + fib(n - 1);
}
const n=+prompt('введіть номер числа');
alert(fib(n));