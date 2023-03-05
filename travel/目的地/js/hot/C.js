// 每个州的容器
var CItem = document.querySelector('.place .C');

const CArr = [
   ['东京','大阪','京都','冲绳','北海道','箱根','札幌','奈良','名古屋','福冈','神户','那霸','函馆','小樽','镰仓']
]

function Clist(){
	// 循环
	for(let i = 0; i < CArr.length; i++){

		// 定义新元素容器
      let div = document.createElement('div')
      // 容器结构左右结构 左边是字母 ，右边 是地名
      div.innerHTML = `
            <div></div>
            <ul>

            </ul>
      `;

      // 将定义的容器循环添加到付容器中
      CItem.appendChild(div)

      // 循环变量数组内容创建装有地区的节点
      for(let j = 1; j < CArr[i].length; j++){
         // 将字母循环放进左边容器
         div.children[0].innerHTML = CArr[i][0];
         // 右边创建新的节点li 装地区的节点
         let li = document.createElement('li');
         // 将节点添加进ul中
         div.children[1].appendChild(li)
         // 将地区名逐一放进li节点
         CItem.children[i].children[1].children[j-1].innerHTML = CArr[i][j];
      }
   }
}

Clist();