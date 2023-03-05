// 每个州的容器
var EuropeItem = document.querySelector('.Europe .item-content');

const EuropeArr = [
   ['A','阿尔巴尼亚 The Republic of Albania','爱尔兰 Ireland','爱沙尼亚 The Republic of Estonia','安道尔 Andorra','奥地利 Austria'],
   ['B','白俄罗斯 Belgium','保加利亚 The Republic of Bulgaria','比利时 Belgium','冰岛 Iceland','波黑 Bosnia and Herzegovina','波兰 Poland'],
   ['D','丹麦 Denmark','德国 Germany'],
   ['E','俄罗斯 Russia'],
   ['F','法国 France','芬兰 Finland'],
   ['H','荷兰 Holland','黑山 Montenegro'],
   ['J','捷克 Czech'],
   ['K','科索沃 The Republic of Kosovo','克罗地亚 Croatia'],
   ['L','拉脱维亚 Latvia','立陶宛 Lithuania','列支敦士登 Liechtenstein','卢森堡 The Grand Duchy of Luxembourg','罗马尼亚 Romania'],
   ['M','马耳他 Malta','马其顿 Macedonia','摩尔多瓦 The Republic of Moldova','摩纳哥 The Principality of Monaco'],
   ['N','挪威 Norway','葡萄牙 Portugal'],
   ['R','瑞典 The Kingdom of Sweden瑞士 Switzerland'],
   ['S','塞尔维亚 The Republic of Serbia','塞浦路斯 Cyprus','圣马力诺 The Republic of San Marino','斯洛伐克 Slovakia','斯洛文尼亚 The Republic of Slovenia'],
   ['T','土耳其 Turkey'],
   ['W','乌克兰 Ukraine'],
   ['X','西班牙 Spain','希腊 Greece','匈牙利 Hungary'],
   ['Y','意大利 Italy','英国 United Kingdom']
]

function Europelist(){
	// 循环
	for(let i = 0; i < EuropeArr.length; i++){

		// 定义新元素容器
      let div = document.createElement('div')
      // 容器结构左右结构 左边是字母 ，右边 是地名
      div.innerHTML = `
            <div></div>
            <ul>

            </ul>
      `;

      // 将定义的容器循环添加到付容器中
      EuropeItem.appendChild(div)

      // 循环变量数组内容创建装有地区的节点
      for(let j = 1; j < EuropeArr[i].length; j++){
         // 将字母循环放进左边容器
         div.children[0].innerHTML = EuropeArr[i][0];
         // 右边创建新的节点li 装地区的节点
         let li = document.createElement('li');
         // 将节点添加进ul中
         div.children[1].appendChild(li)
         // 将地区名逐一放进li节点
         EuropeItem.children[i].children[1].children[j-1].innerHTML = EuropeArr[i][j];
      }
   }
}

Europelist();