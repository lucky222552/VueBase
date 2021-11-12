// /* eslint-disable-no-unused-vars */
// // 局部禁用当前这个类型的错误（至今用当前文件的这个类型的报错）

// import Vue from 'vue/dist/vue.esm.js'// 我们自己找到的带解析器的版本
import Vue from 'vue' // 默认引入的是runtime-only版本的，不带解析器
import App from '@/App'

// new Vue({
//   el: '#app',
//   components: {
//     App,
//   },
//   template: '<App/>'
// })


//  h => h(App) 必须用箭头函数 内部有用到this
new Vue({
  el: '#app',
  render: h => h(App) // 这个函数与上面我们自己写的  功能差不多
  // 引入并注册了App 
  // 使用了App组件
  //  比上面写法多干了一件事，就是寻找解析器的loader
})

// 这个使用render函数 为什么就可以使用runtime版本的vue



// 以后我们要使用的是下面这种
// 下面写法的打包项目体积小  效率问题





