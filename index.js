// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
    drivers.push(name)
}

function destructivelyPrependDriver(name){
    drivers.unshift(name)
}

function destructivelyRemoveFirstDriver(){
    drivers.shift()
}

function destructivelyRemoveLastDriver(){
    drivers.pop()
}

function appendDriver(name){
    let arr = [...drivers, name]
    return arr
}

function prependDriver(name){
    let arr = [name, ...drivers]
    return arr
}

function removeLastDriver(){
    let arr = [...drivers.slice(0,-1)]
    return arr
}

function removeFirstDriver(){
    let arr = drivers.slice(1)
    return arr
}