// 获取热门目的地的七个容器为一个数组
let hotSelectedArr = document.querySelectorAll('#hot-place .place .detail')
// 获取四个按钮并添加监听事件
let hotSelectedSpanArr = document.querySelectorAll('#hot-place .hot-option span')


// 监听鼠标移入事件
// 第一个参数为数组的每一个元素，第二个参数为元素下标
hotSelectedSpanArr.forEach((item,index) => {
   item.addEventListener("mouseover",()=>{
      // 一 图片
      // 每个图片容器设置为不可见
      hotSelectedArr.forEach(item => {
         item.style.display = 'none'
      })
      // 指定图片容器设置为可见
      hotSelectedArr[index].style.display = 'flex'


      // 二 选项 
      // 每个样式移除active类名
      hotSelectedSpanArr.forEach(item => {
         item.classList.remove("active")
      })
      // 设置移入的选项设置类名
      item.classList.toggle("active")
   })
})