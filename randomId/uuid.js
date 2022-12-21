// generating random strings to get differnt id for notes using uuid 
module.exports =() =>
Math.floor((1+Math.random())* 0x10000)
    .toString(16)
    .substring(1);