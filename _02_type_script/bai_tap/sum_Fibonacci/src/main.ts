// function fibonacci(num:number): any {
//
//     if (num==1 || num==2) {
//         return num;
//     }
//     let arrayNum: Array<number>= [1,1]
//     let temp:number;
//     for (let i=2; i<num;i++) {
//       temp = arrayNum[i-1]+ arrayNum[i-2]
//         arrayNum[i]=temp;
//     }
//     return arrayNum;
// }
//
// let num=50;
//
//  let arrayNum: Array<number>= fibonacci(num);
// let sum:number=0;
// for (let i=0; i<arrayNum.length;i++) {
//     console.log(arrayNum[i]);
//     sum+=arrayNum[i];
// }
// console.log("result" +sum);

// DE QUY
function fibonacciRecursive(number: number): number {
    if (number === 1 || number === 2) return 1;
    return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
}


let sum=0;
function fibonaccies(number: number): void {
    if (number === 0) {
        return;
    }
    let fiboNumber = fibonacciRecursive(number);
    sum += fiboNumber;
    console.log(fiboNumber);
    fibonaccies(--number);
}

fibonaccies(50)
console.log("result" +sum);