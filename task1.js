// 1
// split
// split berfungsi untuk memisah nilai string ke substring dan diubah kedalam array dengan kententuan pemisah yang diginkan
// syntax : split(separator, limit)
// contoh
const goToSchool = 'aku pergi ke sekolah jika tidak hujan'
console.log(goToSchool.split(' ', 7)) //['aku','pergi','ke','sekolah','jika', 'tidak','hujan']


// 2
// slice
// slice berfungsi untuk menduplikat nilai variable array kedalam array yang baru dengan bisa memilih menggambil dari mana awalan(start) dan akhir dari pengambilan(end tetapi nilai end tidak di ikutkan)
// syntax : slice(start, end)
const goodFood = ['rujak', 'acar timun', 'tahu kupat', 'kupat tahu', 'gado-gado']
console.log(goodFood.slice(1, 4)) // [ 'acar timun', 'tahu kupat', 'kupat tahu' ]


// 3
// every
// every berfungsi menguji suatu element dengan perbandingan parameter/fungsi yang disediakan dengan pengembalian/outputnya boolean
// syntax : every(function)
const lessThan = (value) => value < 10
const number1 = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(number1.every(lessThan)) //true


// 4
// includes
// includes berfungsi untuk menentukan apakah array menyertakan nilai tertentu dan mengembalikan dalam true atau false
// syntax : includes(searchElement) / includes(searchElement, fromIndex)
const petHome = ['dog', 'cat', 'fish']
console.log(petHome.includes('pig')) //false


// 5
// reverse
// reverse berfungsi untuk membalik urutan nilai array, array petama menjadi terakhir dan array terakhir menjadi pertama
// syntax : reverse()
const middleStudents = ['maria', 'jhon', 'darius', 'draven']
console.log(middleStudents.reverse()) // [ 'draven', 'darius', 'jhon', 'maria' ]


// 6
// some
// some berfungsi untuk mengetes setidaknya salah satu element di array lulus test yang diterapkan suatu fungsi yang mengembalikan nilai boolean
// syntax :  some()
const score = [1, 5, 7, 56, 4, 7, 43, 12]
const bestScore = (scoreOf) => scoreOf % 3 === 0;
console.log(score.some(bestScore)) // true


// 7
// indexOf
// indexOf berfungsi memberi nilai index pertama yang berisi element yang ada di array, -1 jika tidak ditemukan
// syntax : indexOf(searchElement) / indexOf(searchElement, fromIndex)
const notLikeVegetable = ['pare', 'kacang panjang', 'terong', 'brocoli', 'tomat', 'pakcoy', 'terong']
console.log(notLikeVegetable.indexOf('terong', 3)) // 6


// 8
// toLowerCase
// toLowerCase berfungsi mengubah nilai yang ada di string menjadi lower case/ text kecil
// syntax toLowerCase()
const orderFood = 'CAN i GeT sOMe fOoD, PlEasE'
console.log(orderFood.toLocaleLowerCase()) // can i get some food, please


// 9
// endsWith
// endsWith berfungsi menentukan apakah string diakhiri dengan string yang ditentukan yang menghasilkan output boolean
// syntax : endsWith(searchString) / endsWith(searchString, length)
const talkWithDog = 'Who is good boy?'
console.log(talkWithDog.endsWith('boy?')) // true


// 10
// concat
// concat berguna untuk menggabungkan dua atau lebih array, method ini tidak merubah array yang sudah ada , tetapi menghasilkan array baru
const championIonia = ['yasuo', 'karma', 'irelia', 'kennen']
const championDamacia = ['jarvan', 'lux', 'garen', 'shyvana']
const championFusion = championIonia.concat(championDamacia)
console.log(championFusion)