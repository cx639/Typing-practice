//用列表的方式呈現對話或劇情
const story = [
	"作者:歡迎來到我的打字機效果ㄟ(￣▽￣ㄟ)　**實戰練習**ㄟ(￣▽￣ㄟ)　時間!!!",
	"作者:我只能說啊......(ー_ー)",
	"作者:這效果怎麼可以這麼難做啊!!TAT",
	"作者:花了我一堆時間~~(╥﹏╥)",
	"作者:他奶奶的害我沒法玩絲之歌...我ˋ0ˊ@+%@&$*&",
	"作者:算了，反正我超菜，玩了後搞不好還會更氣╮(￣▽￣)╭",
	"作者:還有那間某某浪部落炭烤的╰（‵□′）╯",
	"作者:害我消化不良，我去他喵的(╯‵□′)╯︵┴─┴",
	"作者:幸好我最近有一堆獎學金入帳~~~(≧∇≦)b",
	"作者:沒人能破壞我的好心情~~哈哈哈哈哈哈!!!",
	"作者:最後提前祝你行憲紀念日快樂",
	"作者:掰掰~~",
	"作者:終於結束了，累死，耶~~(￣▽￣)~*",
	"作者:來去睡覺~~(¦3[▓▓]",
];

//找到HTML中id為text的物件並將其命名為story_text
const story_text = document.getElementById("text")

//設now_story_text為當前對話再story的編號
let now_story_text = 0

//設now_text為當前打到該對話的第幾個字
let now_text = 0


//設typing_speed為打字速度(毫秒)
const typing_speed = 150

//設typing為是否正在打字
let typing = false;

//設fulltext為當前的對話
function type(){

	typing = true;

	//設fulltext為當前的對話
	const fulltext=story[now_story_text]

	//如果當前打的字數還小於該對話的總字數，則在story_text加入fulltext中對應的文字，並在打完該字後使now_text + 1
	if (now_text < fulltext.length){
		story_text.textContent +=fulltext.charAt(now_text);

		now_text++;

		//使用setTimeout(函數，時間(毫秒))函數重複執行typ()函數
		setTimeout(type,typing_speed);
	}

	else{
		typing=false;

		open_point();
	}
}

//找到HTML中id為point的物件並將其命名為point_text
const point_text = document.getElementById("point")

function open_point(){
	//=如果point_text存在，則設point_text的透明度 = 1 ，並生成一個只觀察一次點擊事件就消失的觀察者，並在觀察後呼叫next()函數
	if (point_text){
		point_text.style.opacity = 1;

		document.addEventListener("click",next,{once:true});
		//在point_text加入一個名為flash的屬性，插入setInterval(函數,時間(毫秒))，偵測point_text的透明度是否為1，如果是則換成0，否則換成1
		point_text.flash = setInterval(()=>{
			point_text.style.opacity=point_text.style.opacity == 1 ? 0 : 1;},800)

	}
}

//**setTimeout()與setInterval()的差別是前者指呼喚一次，後者則呼喚無限次

function close_point(){

	//如果point_text存在則設point_text的透明度 = 0 ，
	if(point_text){
		point_text.style.opacity = 0;

		//使用clearInterval(變數.屬性)函數來關閉setInterval()函數
		clearInterval(point_text.flash);

		//將point_text的flash屬性刪除，如果要做邏輯判定這才有用，算是提醒遺下自己而已，在這份網頁中沒任何意義
		point_text.flash = null;

	}
}

function next(){

	now_story_text++;
	//如果當前打完的對話編號還小於總對話的總數 - 1 ，則清除story_text的內容，並設now_text = 0 ，最後在呼叫close_point()與type()函數
	if (now_story_text < story.length){
		story_text.textContent = "";
		now_text = 0
		close_point();
		type();
	}
	//如果打完最後的對話，則呼叫close_point()函數
	else{
		close_point()
	}
}
//網頁開啟時便開始打字
type();