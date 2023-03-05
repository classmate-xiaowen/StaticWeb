// document.querySelectorAll获取所以轮播图图片的元素，并返回一个数组（装着所有图片元素）
const move = document.querySelector('.move')
// 获取轮播图里图片的张数
const photosLength = document.querySelectorAll('.lunbo-photo .move li').length

// 轮播图左边按钮
const left = document.querySelector('#left_turn')
// 轮播图右边按钮
const right = document.querySelector("#right_turn")

// 数组下标
let activeIndex = 0

// 左边按钮添加监听点击事件
left.addEventListener('click',()=>{
    // 形参为左
   changePhoto('left'); 
})
// 右边同理
right.addEventListener('click',()=>{
    // 形参为右
   changePhoto('right');
})

// 逻辑：通过下标来找到某个元素或使A盒子横向偏移（translateX）到指定位置
const changePhoto = (index) => {
   // 获取所有图片长度总和/A盒子长度
   const photoWidth = move.clientWidth
    // 判断形参是左还是右执行不同的方向移动    
   if(index === 'right') {
      activeIndex++
        // 到达最后一张图片，则回到第一章图片   
      if(activeIndex > photosLength - 1) {
          activeIndex = 0
      }
  } else if(index === 'left') {
      activeIndex--
        // 到达第一章图片，则回到最后一张图片
      if(activeIndex < 0) {
          activeIndex = photosLength - 1
      }
  }

// 轮播图动起来的主要元素
//模板字符串写法，使元素向左偏移(0,1,2,3) * (全部图片的长度 / 图片的数量)PX
  move.style.transform = `translateX(-${activeIndex * (photoWidth / photosLength)}px)`
}

// 设置定时器 让轮播图自己动起来
let timer = setInterval(()=>{
    activeIndex++;
    if(activeIndex > photosLength - 1){
        activeIndex = 0        
    }
    if(activeIndex < 0) {
        activeIndex = photosLength - 1
    }
    // 调用轮播函数
    changePhoto()
},5000)