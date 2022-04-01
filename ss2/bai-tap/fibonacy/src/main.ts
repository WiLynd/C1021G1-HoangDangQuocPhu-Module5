let sum : number = 0;
let count: number = 0;

for ( let i = 1; count < 30; i++) {
    sum += fibonacy(i);
    count++;
}

function fibonacy(num: number) : number {
    if (num<=1) return 1;
    return fibonacy(num-1) + fibonacy(num -2);
}

console.log("Tổng của ", count, " số fibonacy là: ", sum);
