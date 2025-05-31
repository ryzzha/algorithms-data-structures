var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function binSearch(array, element) {
    var low = 0;
    var higth = array.length - 1;
    var i = 0;
    while (low <= higth) {
        i++;
        var mid = Math.floor((low + higth) / 2);
        var midValue = array[mid];
        if (element == midValue) {
            console.log("steps: ".concat(i));
            return midValue;
        }
        else if (element < mid) {
            higth = mid;
        }
        else {
            low = mid;
        }
    }
    return null;
}
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var findedElement = binSearch(array, 8);
console.log(findedElement);
function bubleSort(array, element) {
    var _a;
    var n = array.length - 1;
    var result = __spreadArray([], array, true);
    var it = 0;
    for (var i = 0; i < n; i++) {
        it += i;
        for (var j = 0; j < n - i; j++) {
            it += j;
            if (result[j] < result[i + 1]) {
                _a = [result[j + 1], result[j]], result[j] = _a[0], result[j + 1] = _a[1];
            }
        }
    }
    console.log("iterations -> " + it);
    return result;
}
var arrayTwo = [7, 5, 2, 2, 1, 0, 6];
var findedElementTwo = bubleSort(array, 0);
console.log(findedElementTwo);
function selectionSort(arr) {
    var _a;
    var n = arr.length;
    var result = __spreadArray([], arr, true); // копія масиву
    for (var i = 0; i < n - 1; i++) {
        var minIndex = i;
        // Шукаємо мінімальний елемент у правій частині
        for (var j = i + 1; j < n; j++) {
            if (result[j] < result[minIndex]) {
                minIndex = j;
            }
        }
        // Обмін місцями
        if (minIndex !== i) {
            _a = [result[minIndex], result[i]], result[i] = _a[0], result[minIndex] = _a[1];
        }
    }
    return result;
}
var nums2 = [64, 25, 12, 22, 11];
console.log("Selection sort:", selectionSort(nums2));
