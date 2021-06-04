function fibonacci(num:number): any {

    if (num==1 || num==2) {
        return num;
    }
    let arrayNum: Array<number>= [1,1]
    let temp:number;
    for (let i=2; i<num;i++) {
      temp = arrayNum[i-1]+ arrayNum[i-2]
        arrayNum[i]=temp;
    }
    return arrayNum;
}

let num=50;

 let arrayNum: Array<number>= fibonacci(num);
let sum:number=0;
for (let i=0; i<arrayNum.length;i++) {
    console.log(arrayNum[i]);
    sum+=arrayNum[i];
}
console.log("tong la" +sum);