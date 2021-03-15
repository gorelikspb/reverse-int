module.exports = function reverse (n) {
    n = Math.abs(n)
    n = n.toString()
    n = n.split('')
    n = n.reverse()
    n = n.join('')
    return parseInt(n)
  
}
