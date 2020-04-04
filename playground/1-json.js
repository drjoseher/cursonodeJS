const fs = require('fs')

// const book ={
//     title :'Ego is the enemy',
//     author:'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-JSON.json', bookJSON)

const bufferData = fs.readFileSync('1-JSON.json')
const data = JSON.parse(bufferData)
data.name = 'José'
data.planet = 'Jupiter'
data.age = 30

const dataJSON = JSON.stringify(data)
fs.writeFileSync('1-JSON.json', dataJSON)
