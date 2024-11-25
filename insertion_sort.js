function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let k = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > k) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = k;
    }
    return arr; 
}
