// 每个州的容器
var NorthAmericaItem = document.querySelector('.NorthAmerica .item-content');

const NorthAmericaArr = [
   ['A','安提瓜和巴布达 Antigua and Barbuda'],
   ['B','巴巴多斯 Barbados','巴哈马 Bahamas','巴拿马 Panama'],
   ['D','多米尼加 Dominican Republic','多米尼克 Dominica'],
   ['G','哥斯达黎加 Costa Rica','格林纳达 Grenada','古巴 Cuba'],
   ['J','加拿大 Canada'],
   ['M','美国 United States of America','墨西哥 The United Mexican States S','萨瓦尔多日','Salvador'],
   ['T','特立尼达和多巴哥 Trinidad and Tobago'],
   ['Y','牙买加 Jamaica']
]

function NorthAmericaList(){
	// 循环
	for(let i = 0; i < NorthAmericaArr.length; i++){

		// 定义新元素容器
      let div = document.createElement('div')
      // 容器结构左右结构 左边是字母 ，右边 是地名
      div.innerHTML = `
            <div></div>
            <ul>

            </ul>
      `;

      // 将定义的容器循环添加到付容器中
      NorthAmericaItem.appendChild(div)

      // 循环变量数组内容创建装有地区的节点
      for(let j = 1; j < NorthAmericaArr[i].length; j++){
         // 将字母循环放进左边容器
         div.children[0].innerHTML = NorthAmericaArr[i][0];
         // 右边创建新的节点li 装地区的节点
         let li = document.createElement('li');
         // 将节点添加进ul中
         div.children[1].appendChild(li)
         // 将地区名逐一放进li节点
         NorthAmericaItem.children[i].children[1].children[j-1].innerHTML = NorthAmericaArr[i][j];
      }
   }
}

NorthAmericaList();