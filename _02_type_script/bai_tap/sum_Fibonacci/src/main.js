function fibonacci(num) {
    if (num == 1 || num == 2) {
        return num;
    }
    var arrayNum = [1, 1];
    var temp;
    for (var i = 2; i < num; i++) {
        temp = arrayNum[i - 1] + arrayNum[i - 2];
        arrayNum[i] = temp;
    }
    return arrayNum;
}
var num = 50;
var arrayNum = fibonacci(num);
var sum = 0;
for (var i = 0; i < arrayNum.length; i++) {
    console.log(arrayNum[i]);
    sum += arrayNum[i];
}
console.log("tong la " + sum);
