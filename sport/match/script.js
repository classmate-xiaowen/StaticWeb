// document.querySelectorAll获取所以轮播图图片的元素，并返回一个数组
const move = document.querySelector('.move')
// 获取轮播图里图片的张数
const photosLength = document.querySelectorAll('main .main-left .lunbo-photo .move li').length
// 轮播图左边按钮
const left = document.querySelector('#left_turn')
// 轮播图由边按钮
const right = document.querySelector("#right_turn")

let activeIndex = 0

left.addEventListener('click',()=>{
   changePhoto('left'); 
})

right.addEventListener('click',()=>{
   changePhoto('right');
})

const changePhoto = (index) => {
   const photoWidth = move.clientWidth
   if(index === 'left') {
      activeIndex++
      if(activeIndex > photosLength - 1) {
          activeIndex = 0
      }
  } else if(index === 'right') {
      activeIndex--
      if(activeIndex < 0) {
          activeIndex = photosLength - 1
      }
  }
  move.style.transform = `translateX(-${activeIndex * (photoWidth / photosLength)}px)`
}

let timer = setInterval(()=>{
    activeIndex++;
    if(activeIndex > photosLength - 1){
        activeIndex = 0        
    }
    if(activeIndex < 0) {
        activeIndex = photosLength - 1
    }
    changePhoto()
},5000)