// 每个州的容器
var DItem = document.querySelector('.place .D');

const DArr = [
   ['泰国','普吉岛','清迈','曼谷','苏梅岛','甲米','芭提雅','象岛'],
   ['新加坡','印尼','新加坡','巴厘岛','民丹岛'],
   ['马来西亚','沙巴','仙本那','吉隆坡','兰卡威'],
   ['越南','芽庄','岘港','美奈','大叻','河内','胡志明市'],
   ['柬埔寨','缅甸','吴哥窟','暹粒','金边','仰光','蒲甘','曼德勒'],
   ['菲律宾','文莱','长滩岛','杜马盖地','薄荷岛','宿雾','文莱']
]

function Dlist(){
	// 循环
	for(let i = 0; i < DArr.length; i++){

		// 定义新元素容器
      let div = document.createElement('div')
      // 容器结构左右结构 左边是字母 ，右边 是地名
      div.innerHTML = `
            <div></div>
            <ul>

            </ul>
      `;

      // 将定义的容器循环添加到付容器中
      DItem.appendChild(div)

      // 循环变量数组内容创建装有地区的节点
      for(let j = 1; j < DArr[i].length; j++){
         // 将字母循环放进左边容器
         div.children[0].innerHTML = DArr[i][0];
         // 右边创建新的节点li 装地区的节点
         let li = document.createElement('li');
         // 将节点添加进ul中
         div.children[1].appendChild(li)
         // 将地区名逐一放进li节点
         DItem.children[i].children[1].children[j-1].innerHTML = DArr[i][j];
      }
   }
}

Dlist();