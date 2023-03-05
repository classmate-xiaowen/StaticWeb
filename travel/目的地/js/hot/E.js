// 每个州的容器
var EItem = document.querySelector('.place .E');

const EArr = [
   ['马尔代夫','马累','阿雅达岛','薇拉瓦鲁岛','宁静岛'],
   ['阿联酋','伊朗','迪拜','阿布扎比','德黑兰','伊斯法罕','设拉子'],
   ['斯里兰卡','科伦坡','康提','努沃勒埃利耶','尼甘布'],
   ['尼泊尔','加德满都','博卡拉','巴德岗'],
   ['印度','新德里','孟买','阿格拉','斋普尔','瓦拉纳西']
]

function Elist(){
	// 循环
	for(let i = 0; i < EArr.length; i++){

		// 定义新元素容器
      let div = document.createElement('div')
      // 容器结构左右结构 左边是字母 ，右边 是地名
      div.innerHTML = `
            <div></div>
            <ul>

            </ul>
      `;

      // 将定义的容器循环添加到付容器中
      EItem.appendChild(div)

      // 循环变量数组内容创建装有地区的节点
      for(let j = 1; j < EArr[i].length; j++){
         // 将字母循环放进左边容器
         div.children[0].innerHTML = EArr[i][0];
         // 右边创建新的节点li 装地区的节点
         let li = document.createElement('li');
         // 将节点添加进ul中
         div.children[1].appendChild(li)
         // 将地区名逐一放进li节点
         EItem.children[i].children[1].children[j-1].innerHTML = EArr[i][j];
      }
   }
}

Elist();