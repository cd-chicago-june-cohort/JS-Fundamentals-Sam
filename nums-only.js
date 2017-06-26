function NumbersOnlyNewArr(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function NumbersOnlySameArr(arr) {
    var index = 0;
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            arr[index] = arr[i];
            index += 1;
        }
    }
    for (index; index > 0; index--) {
        arr.pop();
    }
    return arr;
}

var arr = [1, 'red', 2, 'blue', 'green', 3];
console.log(NumbersOnlyNewArr(arr));
console.log(NumbersOnlySameArr(arr));
console.log(arr);