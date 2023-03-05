const move = document.querySelector('.move')
const photosLength = document.querySelectorAll('main .main-middle .lunbo-photo .move li').length
// document.querySelectorAll获取轮播图图片的元素，并返回一个数组（装着所有图片元素），每个数组元素可添加事件等等操作
const photoArr = document.querySelectorAll('main .main-middle .lunbo-photo .move li')
const left = document.querySelector('#left_turn')
const right = document.querySelector("#right_turn")

var time
let activeIndex = 0

left.addEventListener('click',()=>{
   // 清空定时轮播函数
   clearInterval(time)
   changePhoto('left'); 
   // 调用定时轮播函数
   timer()
})

right.addEventListener('click',()=>{
   clearInterval(time)
   changePhoto('right');
   timer()
})

const changePhoto = (index) => {
   // forEach函数，遍历数组每一个元素，将每一个元素的opacity(设置透明度)改为0
   photoArr.forEach((item)=>{
      item.style.opacity = 0;
   })
   if(index === 'left') {
      activeIndex++;
      if(activeIndex > photosLength - 1) {
          activeIndex = 0
      }
   }else if(index === 'right') {
      activeIndex--
      if(activeIndex < 0) {
          activeIndex = photosLength - 1
      }
   }
   // 传进来的形参index为下标，控制指定元素的透明度为 1
   // 例如photoArr[0]就是第一个元素，类推。。。
   photoArr[activeIndex].style.opacity = 1;
}

//定时轮播函数 
function timer(){
      // 设置定时器
   time = setInterval(()=>{
      activeIndex++;
      // 如果轮播的图片为最后一个，则将下标改为0（第一个）,重复循环
      if(activeIndex > photosLength - 1){
         activeIndex = 0        
      }
      if(activeIndex < 0) {
         activeIndex = photosLength - 1
      }
      changePhoto()
   },3000)
}

// 调用定时轮播函数
timer()