// 每个州的容器
var AfricaItem = document.querySelector('.Africa .item-content');

const AfricaArr = [
   ['A','阿尔及利亚','埃及','埃塞俄比亚','安哥拉'],
   ['B','贝宁','博茨瓦纳','布基纳法索','布隆迪'],
   ['C','赤道几内亚'],
   ['D','多哥'],
   ['E','厄立特里亚'],
   ['F','佛得角'],
   ['G','冈比亚','刚果','刚果民主共和国'],
   ['J','吉布提','几内亚','几内亚比绍','加纳','加蓬','津巴布韦'],
   ['K','科摩罗','科特迪瓦','肯尼亚']
]

function Africalist(){
	// 循环
	for(let i = 0; i < AfricaArr.length; i++){

		// 定义新元素容器
      let div = document.createElement('div')
      // 容器结构左右结构 左边是字母 ，右边 是地名
      div.innerHTML = `
            <div></div>
            <ul>

            </ul>
      `;

      // 将定义的容器循环添加到付容器中
      AfricaItem.appendChild(div)

      // 循环变量数组内容创建装有地区的节点
      for(let j = 1; j < AfricaArr[i].length; j++){
         // 将字母循环放进左边容器
         div.children[0].innerHTML = AfricaArr[i][0];
         // 右边创建新的节点li 装地区的节点
         let li = document.createElement('li');
         // 将节点添加进ul中
         div.children[1].appendChild(li)
         // 将地区名逐一放进li节点
         AfricaItem.children[i].children[1].children[j-1].innerHTML = AfricaArr[i][j];
      }
   }
}

Africalist();