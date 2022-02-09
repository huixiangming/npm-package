<!--
 *@description:
 *@author: return_to_ming
 *@date: 2022-02-08 16:44
-->

# JS 库

# 项目中使用

- 安装

  - `npm install return-to-ming`
  - `yarn add return-to-ming`

- 使用示例

```js
const { multiply, order } = require("return-to-ming");

console.log(multiply(0.1, 0.2), 0.1 * 0.2);
// 0.02 0.020000000000000004

console.log(
  order(
    [
      { name: "回向明", age: "22" },
      { name: "张三", age: "21" },
      { name: "李四", age: "24" },
    ],
    "age"
  )
);
/* [{ name: '张三', age: '21' },
    { name: '回向明', age: '22' },
    { name: '李四', age: '24' }] */
```

- API

  - multiply：
    - 两数精准相乘。
    - 例：
      - 传参：0.001, 3
      - 返回值：0.003
  - order
    - 对象数组按照某个属性数字大小排序，默认升序，传 1 降序
    - 例：
      - 传参：[{ name: '回向明', age: '22' }, { name: '张三', age: '21' }, { name: '李四', age: '24' }], age, 1
      - 返回值：[{ name: '张三', age: '21' }, { name: '回向明', age: '22' }, { name: '李四', age: '24' }]
  - getUrlParam
    - 获取 url 中的参数。
    - 例：
      - 传参：'http://return-to-ming.com?key=1&key=2&key=3&test=4#hehe'
      - 返回值：{ key: ['1', '2', '3'], test: '4' }
