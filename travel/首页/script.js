// 大轮播图
// document.querySelectorAll获取轮播图图片的元素，并返回一个数组（装着所有图片元素）
const slideArr = document.querySelectorAll('.slide .item li')

// 小轮播图
// document.querySelector获取第一个轮播图图片的元素
const smallSlide = document.querySelector('.mainPage .mainPage-left .card .slide')
const smallSlideArr = document.querySelectorAll('.mainPage .mainPage-left .card .slide li')

var time

// 数组下标
// 大轮播
let indexA = 0
// 小轮播
let indexB = 0


// 两个轮播图合并的函数（indexA为大轮播图的下标，indexB为小轮播图的下标）
// 逻辑：通过下标来找到某个元素或使元素偏移（translateX）到指定位置
const changeSlide = (indexA,indexB) => {
   // 获取所有图片长度总和
   const smallSlideWidth = smallSlide.clientWidth
   // forEach函数，遍历数组每一个元素，将每一个元素的opacity(设置透明度)改为0
   slideArr.forEach((item)=>{
      item.style.opacity = 0;
   })
   // 传进来的形参index为下标，控制指定元素的透明度为 1
   slideArr[indexA].style.opacity = 1;
   //模板字符串写法，使元素向左偏移(0,1,2,3) * (全部图片的长度 / 图片的数量)PX
   smallSlide.style.transform = `translateX(-${indexB * (smallSlideWidth / smallSlideArr.length)}px)`
}

//定时轮播函数 
function timer(){
   // 设置定时器
   time = setInterval(()=>{
      // 下标增加
      indexA++;
      indexB++;
      // 如果轮播的图片为最后一个，则将下标改为0（第一个）,重复循环
      if(indexA > slideArr.length - 1){
         indexA = 0
      }
      if(indexB > smallSlideArr.length - 1){
         indexB = 0
      }
      changeSlide(indexA,indexB)
   },3000)
}

// 调用定时轮播函数
timer()





// 轮播图下面横栏的动态切换
const inputArr = document.querySelectorAll('.slide .form .input input')
const optionArr = document.querySelectorAll('.slide .form .search div')

// 给每一个按钮添加点击事件
inputArr.forEach((item,index) => {
   item.onclick = function(){
      // 每一个div设置不可见
      optionArr.forEach(item=>{
         item.style.display = 'none'
      })
      // 设置指定div可见
      optionArr[index].style.display = 'flex'
   }
})