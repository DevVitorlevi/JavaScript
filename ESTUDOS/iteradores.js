const arr=[10,8,9,2]
const it=arr[Symbol.iterator]()

const texto ="Youtube"
const it_txt = texto[Symbol.iterator]()

console.log(arr)
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log('----------------------')
console.log(texto)
console.log(it_txt.next())
console.log(it_txt.next())
console.log(it_txt.next())
console.log(it_txt.next())
console.log(it_txt.next())
console.log(it_txt.next())
console.log(it_txt.next())
console.log(it_txt.next())
console.log(it_txt.next())

//iterator serve para você proprio percorrer coleções
