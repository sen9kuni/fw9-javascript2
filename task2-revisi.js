function searchName(paramText, paramLimit, callback) {
    paramText = paramText.toLowerCase()
    const names = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'olivia', 'Penelope']

    function modNames(element) {
        return element.toLowerCase()
    }

    const lowercaseName = names.map(modNames)
    const filterResult = lowercaseName.filter(nameNeed => nameNeed.includes(paramText))

    const condition = paramLimit === 0 ? filterResult.length : paramLimit
    const result = filterResult.slice(0, condition)

    let finalResult = []
    result.forEach(element => {
        const firstChar = element.charAt(0).toUpperCase()
        const finalWords = `${firstChar}${element.slice(1, element.length)}`
        finalResult.push(finalWords)
    })
    callback(finalResult)
}

searchName('An', 3, console.log)