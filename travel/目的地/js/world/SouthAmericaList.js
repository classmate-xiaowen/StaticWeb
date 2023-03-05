// 每个州的容器
var SouthAmericaItem = document.querySelector('.SouthAmerica .item-content');

const SouthAmericaArr = [
   ['A','阿根廷 Argentina'],
   ['B','巴西 Brazil','秘鲁 The Republic of Peru','玻利维亚 Bolivia'],
   ['E','厄瓜多尔 Ecuador'],
   ['G','哥伦比亚 Colombia','圭亚那 Guyana'],
   ['S','苏里南 The Republic of Suriname'],
   ['W','委内瑞拉 Bolivarian Republic of Venezuela','乌拉圭 The Oriental Republic of Uruguay'],
   ['Z','智利 Republic of Chile']
]

function SouthAmericaList(){
	// 循环
	for(let i = 0; i < SouthAmericaArr.length; i++){

		// 定义新元素容器
      let div = document.createElement('div')
      // 容器结构左右结构 左边是字母 ，右边 是地名
      div.innerHTML = `
            <div></div>
            <ul>

            </ul>
      `;

      // 将定义的容器循环添加到付容器中
      SouthAmericaItem.appendChild(div)

      // 循环变量数组内容创建装有地区的节点
      for(let j = 1; j < SouthAmericaArr[i].length; j++){
         // 将字母循环放进左边容器
         div.children[0].innerHTML = SouthAmericaArr[i][0];
         // 右边创建新的节点li 装地区的节点
         let li = document.createElement('li');
         // 将节点添加进ul中
         div.children[1].appendChild(li)
         // 将地区名逐一放进li节点
         SouthAmericaItem.children[i].children[1].children[j-1].innerHTML = SouthAmericaArr[i][j];
      }
   }
}

SouthAmericaList();