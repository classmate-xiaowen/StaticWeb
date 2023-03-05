// 每个州的容器
var GItem = document.querySelector('.place .G');

const GArr = [
   ['澳大利亚','悉尼','墨尔本','凯恩斯','大堡礁','黄金海岸','布里斯班'],
   ['新西兰','奥克兰','皇后镇','基督城'],
   ['澳洲其他','斐济','大溪地'],
   ['埃及','','开罗','卢克索','阿斯旺','红海','亚历山大'],
   ['摩洛哥','马拉喀什','卡萨布兰卡','非斯','舍夫沙万'],
   ['非洲其他','毛里求斯','塞舌尔','肯尼亚','马达加斯加']
]

function Glist(){
	// 循环
	for(let i = 0; i < GArr.length; i++){

		// 定义新元素容器
      let div = document.createElement('div')
      // 容器结构左右结构 左边是字母 ，右边 是地名
      div.innerHTML = `
            <div></div>
            <ul>

            </ul>
      `;

      // 将定义的容器循环添加到付容器中
      GItem.appendChild(div)

      // 循环变量数组内容创建装有地区的节点
      for(let j = 1; j < GArr[i].length; j++){
         // 将字母循环放进左边容器
         div.children[0].innerHTML = GArr[i][0];
         // 右边创建新的节点li 装地区的节点
         let li = document.createElement('li');
         // 将节点添加进ul中
         div.children[1].appendChild(li)
         // 将地区名逐一放进li节点
         GItem.children[i].children[1].children[j-1].innerHTML = GArr[i][j];
      }
   }
}

Glist();