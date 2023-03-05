// 获取主题精选的四个容器为一个数组
const selectedArr = document.querySelectorAll('.selected .selected-photos .container')
// 获取四个按钮并添加监听事件
const selectedSpanArr = document.querySelectorAll('.selected .selected-option span')


// 监听鼠标移入事件
// 第一个参数为数组的每一个元素，第二个参数为元素下标
selectedSpanArr.forEach((item,index) => {
   item.addEventListener("mouseover",()=>{
      // 一 图片
      // 每个图片容器设置为不可见
      selectedArr.forEach(item => {
         item.style.display = 'none'
      })
      // 指定图片容器设置为可见
      selectedArr[index].style.display = 'grid'


      // 二 选项 
      // 每个样式移除active类名
      selectedSpanArr.forEach(item => {
         item.classList.remove("active")
      })
      // 设置移入的选项设置类名
      item.classList.toggle("active")
   })
})