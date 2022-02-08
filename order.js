/* 
  对象数组按照某个属性数字大小排序，默认升序，传1降序
  例：
  传参：[{ name: '回向明', age: '22' }, { name: '张三', age: '21' }, { name: '李四', age: '24' }], age, 1
  返回值：[{ name: '张三', age: '21' }, { name: '回向明', age: '22' },  { name: '李四', age: '24' }]
*/
module.exports = function order(arr, key, number) {
  arr.sort(fun(key))
  function fun(props) {
    return function (a, b) {
      return number === 1 ? b[props] - a[props] : a[props] - b[props]
    }
  }
  return arr
}