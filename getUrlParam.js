/*
  获取 url 中的参数
  1. 指定参数名称，返回该参数的值 或者 空字符串
  2. 不指定参数名称，返回全部的参数对象 或者 {}
  3. 如果存在多个同名参数，则返回数组
  4. 不支持URLSearchParams方法
  例：
  传参：'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe'
  返回值：{ key: ['1', '2', '3'], test: '4' }
*/
function getUrlParam(sUrl) {
  let keyArr = sUrl.split('?')[1].split('#')[0].split('&')
  let keyObj = {}
  for (let item of keyArr) {
    let [key, value] = item.split('=')
    if (!keyObj[key]) keyObj[key] = value
    else keyObj[key] = [...keyObj[key], value]
  }
  return keyObj
}