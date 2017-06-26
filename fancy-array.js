function FancyArray(arr, symbol, reversed) {
    for (var i = 0; i < arr.length; i++) {
        if (reversed == false) {
            console.log(i + ' ' + symbol + ' ' + arr[i]);
        } else {
            console.log(arr[i] + ' ' + symbol + ' ' + i);
        }
    }
}

var jNames = ["James", "Jane", "Jill", "Jack"];
FancyArray(jNames,'*---->',false);