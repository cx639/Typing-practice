const story = [
	"作者:歡迎來到我的打字機效果ㄟ(￣▽￣ㄟ)　**實戰練習**ㄟ(￣▽￣ㄟ)　時間!!!",
	"作者:我只能說啊......(ー_ー)",
	"作者:這效果怎麼可以這麼難做啊!!TAT",
	"作者:花了我一堆時間~~(╥﹏╥)",
	"作者:他奶奶的害我沒法玩絲之歌...我ˋ0ˊ@+%@&$*&",
	"作者:算了，反正我超菜，玩了後搞不會還會更氣╮(￣▽￣)╭",
	"作者:還有那間某某浪部落炭烤的╰（‵□′）╯",
	"作者:害我消化不良，我去他喵的(╯‵□′)╯︵┴─┴",
	"作者:幸好我最近有一堆獎學金入帳~~~(≧∇≦)b",
	"作者:沒人能破壞我的好心情~~哈哈哈哈哈哈!!!",
	"作者:最後提前祝你行憲紀念日快樂",
	"作者:掰掰~~",
	"作者:終於結束了，累死，耶~~(￣▽￣)~*",
	"作者:來去睡覺~~(¦3[▓▓]",
];

const story_test = document.getElementById("text")

let now_story_texe = 0
let now_texe = 0

const typing_speed = 150

let typing = false;

function type(){

	typing = true;

	const fulltext=story[now_story_texe]

	if (now_texe < fulltext.length){
		story_test.textContent +=fulltext.charAt(now_texe);

		now_texe++;

		setTimeout(type,typing_speed);
	}

	else{
		typing=false;

		open_point();
	}
}
const point_test = document.getElementById("point")

function open_point(){
	if (point_test){
		point_test.style.opacity = 1;

		document.addEventListener("click",next,{once:true});

		point_test.flash = setInterval(()=>{
			point_test.style.opacity=point_test.style.opacity == 1 ? 0 : 1;},800)

	}
}

function close_point(){
	if(point_test){
		point_test.style.opacity = 0;
		clearInterval(point_test.flash);
		point_test.flash = null;

	}
}

function next(){
	now_story_texe++;
	if (now_story_texe<story.length){
		story_test.textContent = "";
		now_texe = 0
		close_point();
		type();
	}
	else{
		close_point()
	}
}
type();