/* 
  两数精准相乘。
  例：
  传参：0.001, 3
  返回值：0.003
*/
module.exports = function multiply(a, b) {
  let x = String(b).indexOf('.') + 1
  let y = String(a).indexOf('.') + 1
  let count = String(b).length - x + String(a).length - y
  return Number((a * b).toFixed(count))
}
