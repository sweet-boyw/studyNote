# mytest

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# vue3学习笔记
### 初识setup
1.vue3中数据、方法等需要写在setup配置函数中    
2.setup若返回一个对象，则对象中的属性、方法在模板中可以直接使用    
3.setup不能被async修饰    
### ref函数
1.定义一个响应式数据   
2.语法 const xxx = ref('xxx')(注意引入)    

### reactive函数
1.定义一个响应书数据对象    
2.语法 const xxx = reactive(xxx),返回一个proxy对象    
3.获取对象中的属性不需要.value    

### 