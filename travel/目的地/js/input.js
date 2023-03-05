let input = document.querySelector('.nav .nav-right input')

// 获得焦点监听事件
input.addEventListener("focus",()=>{
   input.classList.toggle("stick")
})

// 失去焦点监听事件
input.addEventListener("blur",()=>{
   input.classList.toggle("stick")
})