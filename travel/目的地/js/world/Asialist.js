// 每个州的容器
var AsiaItem = document.querySelector('.Asia .item-content');

const AsiaArr = [
   ['A','阿富汗 Afghanistan','阿联酋 United Arab Emirates','阿曼 Sultanate of Oman','阿塞拜疆 Azerbaijan'],
   ['B','巴基斯坦 Pakistan','巴勒斯坦 Palestine','巴林 Bahrain'],
   ['C','朝鲜 North Korea'],
   ['D','东帝汶 East Timor'],
   ['F','菲律宾 Philippines'],
   ['G','格鲁吉亚 Georgia'],
   ['H','哈萨克斯坦 The Republic of Kazakhstan','韩国 Korea'],
   ['J','吉尔吉斯斯坦 Kyrgyzstan','柬埔寨 Cambodia'],
   ['K','卡塔尔 The State of Qtar','科威特 The State of Kuwait'],
   ['L','老挝 Laos','黎巴嫩 Lebanon'],
   ['M','马尔代夫 Maldives','马来西亚 Malaysia','蒙古 Mongolia','孟加拉国 Bangladesh','缅甸 MyanmarN'],
   ['N','尼泊尔 NepalR'],
   ['R','日本 JapanS'],
   ['S','沙特阿拉伯 Saudi Arabia','斯里兰卡SnLankaT'],
   ['T','塔吉克斯坦 Tajikistan','泰国 Thailand','土库曼斯坦 TurkmenistanW'],
   ['W','文莱 Brunel Darussalam','乌兹别克斯坦 The Republic of UzbekistanX'],
   ['X','新加坡 Singapore','叙利亚 The Syrian Arab RepublicY'],
   ['Y','亚美尼亚 the Republic of Armenia','也门 The Republic of Yemen','伊拉克 Iraq','伊朗 Iran','以色列 Israel','印度尼西亚 Indonesia','约旦 Jordan','越南 Vietnam'],
   ['Z','中国 China']
]

function Asialist(){
	// 循环
	for(let i = 0; i < AsiaArr.length; i++){

		// 定义新元素容器
      let div = document.createElement('div')
      // 容器结构左右结构 左边是字母 ，右边 是地名
      // 模板字符串
      div.innerHTML = `
            <div></div>
            <ul>

            </ul>
      `;

      // 将定义的容器循环添加到付容器中
      AsiaItem.appendChild(div)

      // 循环变量数组内容创建装有地区的节点
      for(let j = 1; j < AsiaArr[i].length; j++){
         // 将字母循环放进左边容器
         div.children[0].innerHTML = AsiaArr[i][0];
         // 右边创建新的节点li 装地区的节点
         let li = document.createElement('li');
         // 将节点添加进ul中
         div.children[1].appendChild(li)
         // 将地区名逐一放进li节点
         AsiaItem.children[i].children[1].children[j-1].innerHTML = AsiaArr[i][j];
      }
   }
}

Asialist();