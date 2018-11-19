const fs = require('fs')
const crypto = require('crypto')
const hash = crypto.createHash('sha256')
//hash with sha256
// let incon = fs.createReadStream('testforhash.txt')
// incon.on('data' , function(chunk){
// 	hash.update(chunk)
// })
// incon.on('end', function(){
// 	console.log(hash.digest('hex'))
// })

//cipher with aes
const cipher = crypto.createCipher('aes192', '123')
let input = fs.createReadStream('exchange.md')
let output = fs.createWriteStream('exchange.enc')
input.pipe(cipher).pipe(output)

//decipher with aes
// const decipher = crypto.createDecipher('aes192', '123')
// let input = fs.createReadStream('testforCipher.enc')
// let output = fs.createWriteStream('testforCipher.txt')
// input.pipe(decipher).pipe(output)
