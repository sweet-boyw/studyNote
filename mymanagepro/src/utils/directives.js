import Vue from 'vue'


//全局自定义指令--按钮权限控制
// 指令中this指向都是window
// 设置权重，低于权重值的不展示
Vue.directive('has',{
    bind(element,binding){
        console.log('11',element,binding)
        if(binding.value > 10){
            element.style.background = "#3b8eea"
        }
    },
    inserted(element,binding){
        console.log('22',element,binding)
    },
    update(element,binding){
        console.log('33',element,binding)
    }
})

// 第二种写法
Vue.directive('has',function(element,binding){
    console.log(element,binding)
    if(binding.value <= 10){
        element.style.display = "none"
        // element.remove() // 直接删除该元素
    }
})