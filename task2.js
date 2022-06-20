function searchName(data1, data2, callback) {
    const names = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'olivia', 'Penelope']
    return callback(data1, data2, names)
}

function final(paramSorting, paramValue, dataArray) {
    let tempData = dataArray
    let tempFinal = ""

    function filterName(array, reqFilter) {
        reqFilter = paramSorting
        return array.filter(function(valueVilter) {
            return valueVilter.toLowerCase().indexOf(reqFilter.toLowerCase()) !== -1
        })
    }
    tempFinal = filterName(tempData, paramSorting)
    return tempFinal.slice(0, paramValue)
}

console.log(searchName("i", 4, final))