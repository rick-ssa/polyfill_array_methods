Array.prototype.myMap = function(callback) {
    const newArray = []
    for(let i=0; i<this.length; i++) {
        newArray.push(callback(this[i],i,this)) 
    }
    return newArray
}

Array.prototype.myFilter = function(callback) {
    const newArray = []
    for(let i=0; i<this.length; i++) {
        if(callback(this[i],i,this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

Array.prototype.myReduce = function(callback,initial) {
    let value = initial ? initial : 0;
    for(let i=0; i < this.length; i++) {
        value = callback(value,this[i],i,this)
    }
    return value;
}

let arr = [{nome:'Ricardo'}, {nome:'joão'}]

console.log(arr.myMap((v,i)=>({nome: v.nome + i})))

console.log(arr.myFilter(v=>v.nome==='joão'))

let arr2 = [1, 2, 3, 4, 5, 6]

console.log(arr2.myReduce((valor, v)=>{
    return v + valor
}))

console.log(arr2.myFilter(v=>v>3).myMap(v=>v*2))