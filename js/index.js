
function getClass(name) {
	return document.getElementsByClassName(name);
}


//----------header--------
var headerTxt = getClass('text')[0];
var headerSelect = getClass('select')[0];
var headerSubmit = getClass('submit')[0];
var headerSearchA = getClass('searchA');
var headerMenu = getClass('headerMenu');
var headerBol = true;
var headerSearchTime;
headerTxt.parentNode.onmouseover = function (){
	if(headerBol){
		headerTxt.style.borderColor = headerSubmit.style.borderColor = '#b0b0b0';
	}
}
headerTxt.onfocus = function (){
	headerBol = false;
	headerSearchA
	setTimeout(function(){
		for (var i = 0; i < headerSearchA.length; i++) {
			headerSearchA[i].style.display = 'none';
		}
	},200)
	headerSelect.style.display = 'block';
	headerTxt.style.borderColor = headerSubmit.style.borderColor = '#ff6700';
}
headerTxt.onblur = function (){
	headerBol = true;
	for (var i = 0; i < headerSearchA.length; i++) {
		headerSearchA[i].style.display = 'block';
	}
	headerSelect.style.display = 'none';

	headerTxt.style.borderColor = headerSubmit.style.borderColor = '#e0e0e0';
}
headerTxt.parentNode.onmouseout = function (){
	if(headerBol){
		headerTxt.style.borderColor = headerSubmit.style.borderColor = '#e0e0e0';
	}
	headerTxt.parentNode.onmouseover = null;
}
for (var i = 0; i < headerSelect.children.length; i++) {
	headerSelect.children[i].onmousedown = function (){
		headerTxt.value = this.firstElementChild.innerText;
	}
}
var headerMenu = getClass('headerMenu')[0];
var headerBtmCon = getClass('headerBtmCon')[0];
var headerMenuArr = [];
var headerBtmTime;
headerMenuArr[0] = [
	{name: '小米8', pic: '2699元起'},
	{name: '小米8 SE', pic: '1799元起'},
	{name: '小米MIX 2S', pic: '3299元起'},
	{name: '小米MIX2', pic: '2599元起'},
	{name: '小米6X', pic: '1599元起'},
	{name: '小米MAX2', pic: '1399元起'}
];
headerMenuArr[1] = [
	{name: '红米Note 5', pic: '1099元起'},
	{name: '红米S2', pic: '999元起'},
	{name: '红米5 Plus', pic: '999元起'},
	{name: '红米5', pic: '799元起'},
	{name: '红米5A', pic: '599元起'}
];
headerMenuArr[2] = [
	{name: '小米电视4 75英寸', pic: '8999元'},
	{name: '小米电视4A 32英寸', pic: '849元'},
	{name: '小米电视4A 43英寸青春版', pic: '1399元'},
	{name: '小米电视4A 50英寸', pic: '1899元'},
	{name: '小米电视4A 55英寸', pic: '2499元'},
	{name: '查看全部', pic: '小米电视'}
];
headerMenuArr[3] = [
	{name: '小米游戏本', pic: '5999元'},
	{name: '小米笔记本 Pro', pic: '5599元'},
	{name: '小米笔记本 Air 系列', pic: '3599元'}
];
headerMenuArr[4] = [
	{name: '小米盒子4', pic: '299元'},
	{name: '小米盒子4c', pic: '199元'},
	{name: '小米盒子3s', pic: '299元'},
	{name: '小米盒子3c', pic: '199元'},
	{name: '小米盒子3 增强版', pic: '399元'},
	{name: '小米家庭影院', pic: '1099元'}
];
headerMenuArr[5] = [
	{name: '小米小爱音响mini', pic: '169元'},
	{name: '70 迈智能记录仪', pic: '199元'},
	{name: 'TS太阳镜 旅行者款 米家定制', pic: '299元'},
	{name: '米家电磁炉', pic: '199元'},
	{name: '知吾煮汤锅 米家定制', pic: '399元'},
	{name: '米家电动剃须刀', pic: '199元'}
];
headerMenuArr[6] = [
	{name: '小米WiFi放大器 Pro', pic: '99元'},
	{name: '小米路由器 3C', pic: '99元'},
	{name: '小米路由器 3A', pic: '99元'},
	{name: '小米路由器 4', pic: '199元'},
	{name: '小米路由器 3G', pic: '399元'},
	{name: '小米路由器 HD/Pro', pic: '199元'}
];
headerMenuArr[7] = [
	{name: '小米小爱音响mini', pic: '99元'},
	{name: '小米无人机', pic: '99元'},
	{name: '小米净水器', pic: '99元'},
	{name: '米家扫地机器人', pic: '199元'},
	{name: '米家压力IH电饭煲', pic: '399元'},
	{name: '查看全部', pic: '智能硬件'}
];
headerBtmCon.parentNode.onmouseover = function (){
	headerBtmCon.parentNode.style.height = '230px';
}
for (var i = 0; i < headerMenu.children.length - 2; i++) {
	headerMenu.children[i].index = i;
	headerMenu.children[i].onmouseover = function (){
		headerBtmCon.parentNode.style.height = '230px';
		for (var j = 0; j < headerBtmCon.children.length; j++) {
			headerBtmCon.children[j].innerHTML = '';
		}
		for (var j = 0; j < headerMenuArr[this.index].length; j++) {
			headerBtmCon.children[j].innerHTML = '<p>新品</p>' + 
			'<div><img src="img/header/' + (this.index + 1) + '.jpg"></div><p>' + 
			headerMenuArr[this.index][j].name + '</p><p>' + 
			headerMenuArr[this.index][j].pic + '</p>';
			if(j == headerMenuArr[this.index].length - 1){
				headerBtmCon.children[j].children[1].style.border = 'none';
			}
		}
	}
}
headerBtmCon.parentNode.onmouseout = headerMenu.onmouseout = function (){
	headerBtmCon.parentNode.style.height = '0px';
	headerBtmCon.parentNode.style.border = 'none';
}


//-----------baner----------------

var banerConImg = getClass('banerConImg')[0];
var banerConCir = getClass('banerConCir')[0];
var banerConImgBtn = getClass('banerConImgBtn')[0];
var banerConImgnum = true;
var banerConImgTime;
for (var i = 0; i < banerConCir.children.length; i++) {
	banerConCir.children[i].index = i;
	banerConCir.children[i].onclick = function (){
		for (var j = 0; j < banerConCir.children.length; j++) {
			banerConImg.children[j].className = '';
			banerConCir.children[j].className = '';
		}
		this.className = 'banerConCirDis';
		banerConImg.children[this.index].className = 'banerConImgDis';
	}
}
banerConImgBtn.onmouseover = function (){
	clearInterval(banerConImgTime);
}
banerConImgBtn.onmouseout = function (){
	clearInterval(banerConImgTime);
	banerConFn();
	banerConImgBtn.onmouseover = null;
}
banerConFn()
function banerConFn(){
	banerConImgTime = setInterval(function (){
		var banerConImgBol = true;
		for (var j = 0; j < banerConImg.children.length; j++) {
			if(banerConImg.children[j].className == 'banerConImgDis' && banerConImgBol){
				for (var k = 0; k < banerConImg.children.length; k++) {
					banerConImg.children[k].className = '';
					banerConCir.children[j].className = '';
				}
				if(j != banerConImg.children.length - 1){
					banerConImgBol = false;
					banerConImg.children[j + 1].className = 'banerConImgDis';
					banerConCir.children[j + 1].className = 'banerConCirDis'
				}else if(j == banerConImg.children.length - 1){
					banerConImgBol = false;
					banerConImg.children[0].className = 'banerConImgDis';
					banerConCir.children[0].className = 'banerConCirDis'
				}
			}
		}
	},3000)
}
for(var i = 0; i < banerConImgBtn.children.length; i++){
	banerConImgBtn.children[i].index = i;
	banerConImgBtn.children[i].onclick = function (){
		var banerConImgBol = true;
		for (var j = 0; j < banerConImg.children.length; j++) {
			if(banerConImg.children[j].className == 'banerConImgDis' && banerConImgBol){
				for (var k = 0; k < banerConImg.children.length; k++) {
					banerConImg.children[k].className = '';
					banerConCir.children[j].className = '';
				}
				if(this.index == 0 && j != 0){
					banerConImg.children[j - 1].className = 'banerConImgDis';
					banerConCir.children[j - 1].className = 'banerConCirDis';
				}else if(this.index == 0 && j == 0){
					banerConCir.children[banerConImg.children.length - 1].className = 'banerConCirDis';
					banerConImg.children[banerConImg.children.length - 1].className = 'banerConImgDis';
				}else if(this.index == 1 && j != banerConImg.children.length - 1){
					banerConImgBol = false;
					banerConImg.children[j + 1].className = 'banerConImgDis';
					banerConCir.children[j + 1].className = 'banerConCirDis'
				}else if(this.index == 1 && j == banerConImg.children.length - 1){
					banerConImgBol = false;
					banerConImg.children[0].className = 'banerConImgDis';
					banerConCir.children[0].className = 'banerConCirDis'
				}
			}
		}
	}
}
var banerConListArr = [];
banerConListArr[0] = ['小米8','小米Max2','移动4G+专区','小米8 SE','红米Note5','对比手机',
	'小米MIX 2S','红米S2','米粉卡日租卡','小米6X','红米5 Plus','小米移动 电话卡',
	'黑鲨游戏手机','红米5','手机上门维修','小米MIX2','红米5A'
];
banerConListArr[1] = ['小米电视4 75英寸','小米电视4A 50英寸','小米电视4C 50英寸',
	'小米电视4S 55英寸曲面','小米电视4A 32英寸','小米电视4A 55英寸',
	'小电视4C 55英','小电视4S 55英','小米电视4A 40英寸',
	'小米电视4A 65英寸','小米电视体育版','小米电视4S 50英',
	'小米电视4A 43英寸','小米电视4X 55英寸','小米电视4 49英',
	'小米电视4S 43英','小米电视4A 43英寸青春版','小米电视4C 32英寸',
	'小米电视455英寸','小米电视4S 32英','小米电视4A 49英寸',
	'小米电视4C 43英寸','小电视465英','小米盒子'
];
banerConListArr[2] = ['小米游戏本15.6"','USB-C电源适配器','小米便携鼠标',
	'笔记本Air12.5"','HDMI转接器','小米无线鼠标',
	'笔记本Air 13.3"独显','VGA千兆网口转接器','鼠标垫',
	'笔记本Air13.3"集显','小米笔记本内胆包','DisplayPort转接器',
	'笔记本Air 13.3"四核增强','悦米机械键盘','USB至千兆网口转接器',
	'笔记本Pro 15.6"','悦米机械键盘Pro静音版'
];
banerConListArr[3] = ['米家投影仪','空净滤芯','水质TDS检测笔',
	'激光投影电视','空气净化器2','净水器(厨下式)',
	'扫地机器人','小米净水器1A (厨 下式)','空气净化器Pro',
	'净水器滤芯','扫地机附件','剃须刀',
	'净化器2S','米家恒温电水壶','米家电饭煲',
	'小米净水器滤芯','净化器MAX','米家电水壶',
	'米家电磁炉','VR眼镜','车载空气净化器',
	'PM2.5检测仪','知吾煮厨具'
];
banerConListArr[4] = ['手环','米家智能插座','吸顶灯',
	'米家智能摄像机1080P','手表','手电筒',
	'智能灯泡','小白智能摄像机大众版','小米体脂秤',
	'米家LED智能台灯','米家小白智能摄像机','米家蓝牙温湿度计',
	'小米体重秤','米家飞利浦台灯','小米米家智能摄像机云台版',
	'米家电动牙刷','米家感应夜灯','小方智能摄像机',
	'智能家庭组合','床头灯','大方智能摄像机'
];
banerConListArr[5] = ['九号平衡车','米兔遥控小飞机','米兔轨道积木',
	'C3小米米家智能后视镜','九号平衡车Plus','米兔儿童手表2',
	'小米无人机','小米小爱音箱mini','米家电动滑板车',
	'米兔智能积木','米家对讲机','电助力折叠自行车',
	'米兔故事机','米家小相机','行车记录仪',
	'积木机器人','米家全景相机','70迈智能后视镜',
	'米兔定位电话','小蚁微单相机'
];
banerConListArr[6] = ['小米路由器4','小米路由器HD','千兆网线',
	'小米路由器3','WiFi放大器2','手机保护套',
	'小米路由器3C','WiFi放大器Pro','手机贴膜',
	'小米路由器3G','WiFi电力猫','自拍杆',
	'小米路由器3A','小米VR眼镜','数据线',
	'小米路由器Pro','随身WIFI','存储卡'
];
banerConListArr[7] = ['新小米移动电源2','彩虹5号电池(10粒装)','米家插线板3位长线版',
	'小米移动电源2C','USB充电器','米家智能插线板',
	'小米移动电源2','小米车载充电器','小米随身手电筒',
	'米家随身风扇','移动电源保护套','小米插线板USB版',
	'彩虹电池7号','米家插线板6位基础版'
];
banerConListArr[8] = ['小米头戴式蓝牙耳机','小米圈铁耳机','小米蓝牙耳机',
	'小米方盒子蓝牙音箱2','小米圈铁耳机2','小米活塞耳机清新版',
	'小米蓝牙音频接收器','小米蓝牙音箱','小米蓝牙项圈耳机',
	'小米降噪耳机','小米头戴式耳机轻松版','小米随身蓝牙音箱',
	'小米游戏耳机','小米头戴式耳机','品牌耳机',
	'小米米兔音箱','小米双单元半入耳式耳机','小米运动蓝牙耳机',
	'小米A音箱','小爱音箱mini','小米圈铁耳机Pro',
	'小米运动蓝牙耳机mini','小米小钢炮蓝牙音箱2'
];
banerConListArr[9] = ['旅行箱','服饰','玻璃保鲜盒',
	'沙发','双肩包','运动鞋',
	'自动折叠伞','枕头','儿童书包',
	'围巾','米家wiha精修螺丝刀套装','被子',
	'胸包','眼镜','米兔玩偶',
	'床垫','钱包','米家签字笔',
	'米兔磁力积木','针织件套','收纳包',
	'文具','牙刷','饰品'
];
var banerConLeft = getClass('banerConLeft')[0];
var banerConList = getClass('banerConList')[0];
for (var i = 0; i < banerConLeft.children.length; i++) {
	banerConLeft.children[i].index = i;
	banerConLeft.onmouseout = banerConList.onmouseout = function(){
		banerConList.style.display = 'none';
		setTimeout(function(){
			if (banerConList.style.display == 'none') {
				for (var j = 0; j < banerConLeft.children.length; j++) {
					banerConLeft.children[j].style.background = 'transparent url(img/baner/right.png) 200px center/15px no-repeat';	
				}
			}
		},10);
		
	}
	banerConList.onmouseover = function(){
		banerConList.style.display = 'block';
		banerConList.style.border = '1px solid #e0e0e0';
	}
	banerConLeft.children[i].onmouseover = function (){
		for (var j = 0; j < banerConLeft.children.length; j++) {
			banerConLeft.children[j].style.background = 'transparent url(img/baner/right.png) 200px center/15px no-repeat';	
		}
		this.style.background = '#ff6700 url(img/baner/right.png) 200px center/15px no-repeat';	
		banerConList.style.display = 'block';
		banerConList.style.border = '1px solid #e0e0e0';
		for (var j = 0; j < banerConList.children.length; j++) {
			banerConList.children[j].innerHTML = '';
		}
		for (var j = 0; j < banerConLeft.children.length; j++) {
			if(this.index == j){
				for (var k = 0; k < banerConListArr[j].length; k++) {
					banerConList.children[parseInt(k / 6)].innerHTML += 
					'<li style="background:url(\'img/baner/L' + j + '.jpg\') 20px center/40px no-repeat;">' + 
					banerConListArr[j][k] + '</li>';
				}
			}
		}
	}
}

//-------------plainBox----------
var chiseTimeList = getClass('chiseTimeList')[0];
var titleBtn = getClass('titleBtn')[0];
var chiseList = getClass('chiseList')[0];
imgTime()
function imgTime() {
	var Time = new Date();
	var toDate = Time.getDate();
	Time.setDate(toDate + 1);
	Time.setHours(0);
	Time.setMinutes(0);
	Time.setSeconds(0);
	var toTimg = Time.getTime() - new Date().getTime();
	var Second = parseInt(toTimg / 1000 % 60);
	var Minute = parseInt(toTimg / 1000 / 60 % 60);
	var Hour = parseInt(toTimg / 1000 / 60 / 60);
	if(Second < 10){
		Second = '0' + Second;
	}
	if(Minute < 10){
		Minute = '0' + Minute;
	}
	if(Hour < 10){
		Hour = '0' + Hour;
	}
	chiseTimeList.children[4].innerHTML = Second;
	chiseTimeList.children[2].innerHTML = Minute;
	chiseTimeList.children[0].innerHTML = Hour;
}
setInterval(imgTime,1000);
for (var i = 0; i < titleBtn.children.length; i++) {
	titleBtn.children[i].index = i;
	titleBtn.children[i].onclick = function (){
		if(chiseList.firstElementChild.style.marginLeft >= '0px' && this.index == 1){
			chiseList.firstElementChild.style.marginLeft = '-248px';
		}else if(chiseList.firstElementChild.style.marginLeft >= '-248px' && this.index == 0){
			chiseList.firstElementChild.style.marginLeft = '0px';
		}
	}
}

//-------------liance----------

var tabList = getClass('tabList')[0];
var minList = getClass('minList');
var lianceADRight = getClass('lianceADRight');
var lianceADRightArr = [[],[],[],[]];
lianceADRightArr[0][0] = ['小米电视4A 43英寸青春版','全高清屏 / 人工智能语音','1399 元','1699 元',
	'安装师傅很给力，很专业，产品质量也很高，非常值得信赖。','来自于 1469449791 的评价'];
lianceADRightArr[0][1] = ['小米电视4C 50英寸','4K HDR / 人工智能语音','1899 元','2199 元',
	'支持国货、电视显示画质很好，价钱合理、用着很流畅很不...','来自于 贝拉安娜 的评价'];
lianceADRightArr[0][2] = ['13.3"小米笔记本Air i5 8G 256G...','全金属超薄机身搭配独显','5199 元','',
	'电脑有了，可还是单身呐，能送个女朋友吗☺☺','来自于 被伤过的人 的评价'];
lianceADRightArr[0][3] = ['15.6"小米笔记本Pro i7 16G MX...','性能更强悍的专业笔记本','6999 元','',
	'外形酷薄  吐槽下小米的logo不应该在屏幕应该在键...','来自于 263705241 的评价'];
lianceADRightArr[0][4] = ['米家空气净化器Pro','OLED 显示屏幕 / 激光颗粒物传感器','1199 元','1499 元',
	'从下单到收货，不到十二小时货就送到了，通上电源就可以...','来自于 1469449791 的评价'];
lianceADRightArr[0][5] = ['米家电水壶','一杯水，是一家人的安心','99元','',
	'电水壶不错，烧水速度快，造型也很漂亮！','来自于 月上弦 的评价  '];
lianceADRightArr[0][6] = ['米家LED吸顶灯','用光线，还原理想生活','399 元','',
	'小米出品，必属精品！不管你信不信，反正我信了。','来自于 31550075 的评价'];
lianceADRightArr[1][0] = ['小米电视4A 55英寸','4K高清HDR / 真四核64位高性能处理器','2499 元','2799 元',
	'我不是来评价电视的我是来拉仇恨的，38.46的电视请...',' 来自于 果然发烧 的评价 '];
lianceADRightArr[1][1] = ['小米电视4 55英寸','4.9mm 极超薄机身 / 2GB+8GB 大内存','3699 元','3999 元',
	'电视还不错，但是我看着好像有一点点弯不知道怎么回事。',' 来自于 到夢魘中去歷險 的评价 '];
lianceADRightArr[1][2] = ['小米电视4A 32英寸','64位四核处理器 / 1GB+4GB大内存 ','849 元','999 元',
	'电脑有了，可还是单身呐，能送个女朋友吗☺☺','来自于 被伤过的人 的评价'];
lianceADRightArr[1][3] = ['小米电视4A 65英寸','4K超高清屏 / 真四核64位高性能处理器','3999 元','4499 元',
	'不错  不错  值得购买 值得购买',' 来自于 笨笨不不喔~ 的评价 '];
lianceADRightArr[1][4] = ['小米电视4A 43英寸青春版','全高清屏 / 人工智能语音 / 大内存','1399 元','1699 元',
	'安装师傅很给力，很专业，产品质量也很高，非常值得信赖。','来自于 1469449791 的评价'];
lianceADRightArr[1][5] = ['小米电视4C 43英寸','人工智能 / 全高清屏幕 / 大内存','1399 元','1799 元',
	'性价比很高，很喜欢，一直都会继续支持小米的。',' 来自于 Biao_ 的评价 '];
lianceADRightArr[1][6] = ['小米盒子3 增强版','高端 4K 网络机顶盒','399 元','449 元',
	'顶级配置，超级享受',' 来自于 陆平 的评价 '];
lianceADRightArr[2][0] = ['12.5"小米笔记本Air M3 4G 128G 银色',' ','3599 元','',
	'非常好的一款笔记本电脑，虽然我现在住在了杂物间，但是...',' 来自于 爱的路太长 的评价 '];
lianceADRightArr[2][1] = ['小米笔记本Air13.3英寸','第7代CPU 2G独显 指纹解锁','4999 元','5199 元',
	'电脑有了，可还是单身呐，能送个女朋友吗☺☺',' 来自于 被伤过的人 的评价 '];
lianceADRightArr[2][2] = ['小米笔记本Air 13.3英寸','Intel 酷睿i5 处理器 独立显卡','4999 元','',
	'还是小米吧！现在哥好像成米粉了！手机！路由器！智能插...',' 来自于 赵阶旭 的评价 '];
lianceADRightArr[2][3] = ['小米笔记本Air 12.5英寸','更轻更薄，像杂志一样随身携带','3999 元','',
	'质量没问题，物流的速度很快，第二天就到了……',' 来自于 泽哥 的评价 '];
lianceADRightArr[2][4] = ['小米无线鼠标','耐脏亲肤涂层，人体工学设计','69 元','',
	'挺好的，大小正合适。照片里的笔记本正是小米笔记本pro',' 来自于 汪小个 的评价 '];
lianceADRightArr[2][5] = ['小米便携鼠标','轻薄便携，铝合金外壳 +ABS 材质','99 元','',
	'外形时尚，触感细腻。不错不错',' 来自于 陈钢 的评价 '];
lianceADRightArr[2][6] = ['悦米机械键盘','铝合金机身，TTC红轴，87 键','289 元','',
	'厚重的机身，舒适按键，一直钟爱米家',' 来自于 charry 的评价 '];
lianceADRightArr[3][0] = ['米家恒温电水壶','水温智能控制，304 不锈钢内胆','179 元','199 元',
	'质量杠杠的。白色好看，就是担心容易脏。喜欢小米能多出...',' 来自于 Orange 的评价 '];
lianceADRightArr[3][1] = ['小米随身手电筒','11 挡调光，随心而亮','79 元','',
	'小巧玲珑，本宝宝很喜欢，扣脚萌妹来波神回复。',' 来自于 色色的大叔 的评价 '];
lianceADRightArr[3][2] = ['米家扫地机器人','智能路径规划，扫得干净扫得快','1699 元','',
	'扫地机非常的牛逼，买的第二个了。家里猫有点怕这个，不...',' 来自于 679474107 的评价 '];
lianceADRightArr[3][3] = ['小米空气净化器2','10分钟，房间空气焕然一新','699 元','',
	'买到办公室的，几个同事一起拆的，拆完装后试验了一下，...',' 来自于 小月亮 的评价 '];
lianceADRightArr[3][4] = ['米家压力IH电饭煲','智能烹饪，灰铸铁粉体涂层内胆','899 元','999 元',
	'突然间成了米粉了！从购买了90分登机箱后，被小米产品...',' 来自于 王爱群 的评价 '];
lianceADRightArr[3][5] = ['飞利浦智睿球泡灯','自由调节亮度，Wi-Fi随时操控','49 元','',
	'这灯泡简直可以说是完美，除了可以调亮度外还有冷光和暖...',' 来自于 王慧勇 的评价 '];
lianceADRightArr[3][6] = ['米家 LED 智能台灯','无可视频闪，四种场景优化调光','149 元','169 元',
	'就像一件艺术品！所以我找了一位代言人！',' 来自于 小白_耐小黑 的评价 '];
var lianceADRightMinArr = [['小米净水器','1799元'],['小米盒子3s','299元'],['多功能转接器','149元'],['Yeelight LE...','319元']];
for (var i = 0; i < tabList.children.length; i++) {
	tabList.children[i].index = i;
	tabList.children[i].onmouseover = function (){
		for (var j = 0; j < tabList.children.length; j++) {
			tabList.children[j].className = '';
		}
		this.className = 'tabListDis';
		minList[7].style.background = '#fff url("img/liance/min' + this.index + '.jpg") 125px center/85px no-repeat';
		minList[7].firstElementChild.innerHTML = lianceADRightMinArr[this.index][0] + 
		'<br><span style="color: #ff6700;">' + lianceADRightMinArr[this.index][1] + '</span>	';
		for (var j = 0; j < lianceADRight[0].children.length - 2; j++) {
			minList[j].style.background = '#fff url("img/liance/L'+ this.index + '.jpg") center 20px/160px no-repeat';
		}
		for (var j = 0; j < lianceADRight[0].children.length - 2; j++) {
			minList[j].innerHTML = '<p>' + lianceADRightArr[this.index][j][0] + '</p>' + 
				'<p>' + lianceADRightArr[this.index][j][1] + '</p>' + 
				'<p>' + lianceADRightArr[this.index][j][2] + ' &nbsp;<span>' + lianceADRightArr[this.index][j][3]+ '</span></p>' + 
				'<p><span>' + lianceADRightArr[this.index][j][4] + '</span></br><span>' + lianceADRightArr[this.index][j][5]+ '</span></p>';
		}
	}
}