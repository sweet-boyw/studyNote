/**
 * 视差滚动效果
 */
const images = [
    '../Image/01.jpg',
    '../Image/02.jpg',
    '../Image/03.jpg',
    '../Image/04.jpg',
    '../Image/05.jpg',
]

const scrollContainer = document.querySelector('.scroll-container')
let currentIndex = 0; // 当前展示图片的下标

// 根据下标创建元素
function createItem(index){
    const ImgUrl = images[index]
    const item = document.createElement('div')
    item.classList.add('item')
    item.innerHTML = `<img src="${ImgUrl}" />` // 给div插入图片
    scrollContainer.appendChild(item) // 插入元素到html盒子中
    return item
}

function resetElements(){
    scrollContainer.innerHTML = '';
    const prevIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1
    const nextIndex = currentIndex + 1 > images.length - 1 ? 0 : currentIndex + 1

    createItem(prevIndex).classList.add('prev'); // 创建上一张
    createItem(currentIndex).classList.add('curr'); // 创建当前显示图片
    createItem(nextIndex).classList.add('next'); // 创建下一张图片
}

resetElements()
let isAnimating = false // 当前是否在滚动动画中
// 监听滚动事件
scrollContainer.addEventListener('wheel',(e) =>{
    if(!e.deltaY) {
        return
    }
    if(isAnimating) {
        return
    }
    isAnimating = true
    if(e.deltaY > 0){
        // 向下滚动
        console.log("向下滚动了" + e.deltaY)
        scrollContainer.classList.add('scroll-down')
        currentIndex = currentIndex + 1 > images.length - 1 ? 0 : currentIndex + 1;
    }else{
        console.log("向上滚动了" + e.deltaY)
        scrollContainer.classList.add('scroll-up')
        currentIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1
    }
});
// 监听动画过渡
scrollContainer.addEventListener('transitionend', (e)=>{
    console.log("过渡动画监听",e)
    isAnimating = false;
    scrollContainer.classList.remove('scroll-down');
    scrollContainer.classList.remove('scroll-up');
    resetElements();
})