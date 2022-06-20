function sortingNumber(firstNumber, lastNumber, dataArray) {
    let tempArray = dataArray
    tempArray.sort((a, b) => a - b)
    if (firstNumber < lastNumber && dataArray.length > 5) {
        function reqNilai(tempNumber) {
            if (tempNumber > firstNumber && tempNumber < lastNumber) {
                return tempNumber;
            }
        }
        return tempArray.filter(reqNilai)
    } else if (dataArray.length < 5) {
        return "dataArray harus lebih dari 5"
    } else if (lastNumber < firstNumber) {
        return "nilai akhir harus lebih dari nilai awal"
    }
}

// benar 1
console.log(sortingNumber(2, 40, [2, 5, 39, 74, 1, 9, 20]))

// // benar 2
// console.log(sortingNumber(10, 100, [30, 5, 4, 1, 20, 14, 67]))

// // salah jumlah dataArray
// console.log(sortingNumber(2, 30, [74, 1, 9, 20]))

// // salah nilai awal lebih dari nilai akhir
// console.log(sortingNumber(100, 1, [30, 5, 4, 1, 20, 14, 67]))