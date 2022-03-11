const submitText = document.getElementById('submit');
const output = document.querySelector('#output');
output.innerHTML = '🉑！非常适合小红📕中的文案';
submitText.onclick = function() {
    let inputText = document.getElementById('input').value;
    let trans = '';

    for (let i = 0; i < inputText.length; i++) {
        let flag = 0;
        let code = inputText[i];
        emoji2hanzi.forEach(object=>{
            if(object.hanji === code){
                trans += object.emoji;
                flag = 1;
            }
        })
        if(flag === 0){
            trans += inputText[i];
            flag = 0;
        }
    }

    for(let i=0;i<trans.length;i++){
        let code =trans[i]+trans[i+1];
        emoji2hanzi.forEach(object=>{
            if(object.hanji === code){
                trans = trans.replace(code,object.emoji)
            }
        })
    }



    output.innerHTML = trans;

}

const tosee = document.querySelector('#tosee');
const tooseediv = document.querySelector('#toseediv');
tosee.onclick = function (){
    let emojiList = ''
    emoji2hanzi.forEach(obj=>{
        emojiList += (obj.hanji + ' ,'+ obj.emoji + '; \n')
    });
    tooseediv.innerHTML = emojiList;
}

const emoji2hanzi = [
    {hanji:"猴",emoji:'🐵'},
    {hanji:"狗",emoji:'🐶'},
    {hanji:"猫",emoji:'🐱'},
    {hanji:"虎",emoji:'🐅'},
    {hanji:"猪",emoji:'🐷'},
    {hanji:"花",emoji:'❀'},
    {hanji:"树",emoji:'🌲'},
    {hanji:"笑",emoji:'😃'},
    {hanji:"困",emoji:'😪'},
    {hanji:"哭",emoji:'😭'},
    {hanji:"马",emoji:'🐎'},
    {hanji:"象",emoji:'🐘'},
    {hanji:"鼠",emoji:'🐭'},
    {hanji:"鸡",emoji:'🐓'},
    {hanji:"龟",emoji:'🐢'},
    {hanji:"鱼",emoji:'🐟'},
    {hanji:"爷",emoji:'👴'},
    {hanji:"嘿嘿",emoji:'🤭'},
    {hanji:"哈哈",emoji:'😃'},
    {hanji:"笑哭",emoji:'😂'},
    {hanji:"苦笑",emoji:'😅'},
    {hanji:"亲亲",emoji:'😗'},
    {hanji:"发财",emoji:'🤑'},
    {hanji:"无语",emoji:'😑'},
    {hanji:"白眼",emoji:'🙄'},
    {hanji:"说谎",emoji:'🤥'},
    {hanji:"恶心",emoji:'🤢'},
    {hanji:"累",emoji:'😫'},
    {hanji:"失望",emoji:'😞'},
    {hanji:"心碎",emoji:'💔'},
    {hanji:"爆炸",emoji:'💥'},
    {hanji:"睡着",emoji:'💤'},
    {hanji:"放屁",emoji:'💨'},
    {hanji:"心",emoji:'❤'},
    {hanji:"红心",emoji:'❤'},
    {hanji:"流汗",emoji:'💦'},
    { hanji:"坳",emoji:"⛰"},
	{ hanji:"懊",emoji:"😩"},
	{ hanji:"敖",emoji:"🦅"},
	{ hanji:"奥",emoji:"🇦"},
	{ hanji:"遨",emoji:"✈"},
	{ hanji:"鰲",emoji:"🐢"},
	{ hanji:"翱",emoji:"✈"},
	{ hanji:"澚",emoji:"🇲"},
	{ hanji:"嗷",emoji:"🐺"},
	{ hanji:"翺",emoji:"✈"},
	{ hanji:"鳌",emoji:"🐢"},
	{ hanji:"熬",emoji:"🔥"},
	{ hanji:"嚣",emoji:"🤬"},
	{ hanji:"夭",emoji:"🌱"},
	{ hanji:"夭",emoji:"🌱"},
	{ hanji:"坝",emoji:"🧱"},
	{ hanji:"笆",emoji:"🎍"},
	{ hanji:"八",emoji:"8"},
        { hanji:"壩",emoji:"🧱"},
	{ hanji:"魞",emoji:"🐟"},
	{ hanji:"捌",emoji:"8"},
        { hanji:"鼥",emoji:"🦨"},
	{ hanji:"粑",emoji:"💩"},
	{ hanji:"罷",emoji:"🈲"},
	{ hanji:"芭",emoji:"🌴"},
	{ hanji:"鼥",emoji:"🦨"},
	{ hanji:"跋",emoji:"🧗"},
	{ hanji:"巴",emoji:"🚌"},
	{ hanji:"罷",emoji:"🈲"},
	{ hanji:"鼥",emoji:"🦨"},
	{ hanji:"茇",emoji:"🌿"},
	{ hanji:"抜",emoji:"🪠"},
	{ hanji:"爸",emoji:"👨"},
	{ hanji:"霸",emoji:"🦖"},
	{ hanji:"疤",emoji:"🤢"},
	{ hanji:"笆",emoji:"🎍"},
	{ hanji:"拔",emoji:"🪠"},
	{ hanji:"魞",emoji:"🐟"},
	{ hanji:"芭",emoji:"🌴"},
	{ hanji:"鼥",emoji:"🦨"},
	{ hanji:"跋",emoji:"🧗"},
	{ hanji:"爸",emoji:"👨"},
	{ hanji:"巴",emoji:"🚌"},
	{ hanji:"罷",emoji:"🈲"},
	{ hanji:"鼥",emoji:"🦨"},
	{ hanji:"霸",emoji:"🦖"},
	{ hanji:"把",emoji:"💩"},
	{ hanji:"罢",emoji:"🈲"},
	{ hanji:"罢",emoji:"🈲"},
	{ hanji:"吧",emoji:"❔"},
	{ hanji:"靶",emoji:"🎯"},
	{ hanji:"罢",emoji:"🈲"},
	{ hanji:"罢",emoji:"🈲"},
	{ hanji:"吧",emoji:"❔"},
	{ hanji:"伯",emoji:"🧓"},
	{ hanji:"耙",emoji:"🧹"},
	{ hanji:"扒",emoji:"👐"},
	{ hanji:"败",emoji:"👎"},
	{ hanji:"粨",emoji:"📏"},
	{ hanji:"白",emoji:"⬜"},
	{ hanji:"白",emoji:"⬜"},
	{ hanji:"敗",emoji:"👎"},
	{ hanji:"拜",emoji:"🙏"},
	{ hanji:"败",emoji:"👎"},
	{ hanji:"白",emoji:"⬜"},
	{ hanji:"百",emoji:"💯"},
	{ hanji:"敗",emoji:"👎"},
	{ hanji:"竡",emoji:"🧪"},
	{ hanji:"摆",emoji:"👋"},
	{ hanji:"擺",emoji:"👋"},
	{ hanji:"佰",emoji:"💯"},
	{ hanji:"拜",emoji:"🙏"},
	{ hanji:"稗",emoji:"🌾"},
	{ hanji:"兡",emoji:"⚖"},
	{ hanji:"兡",emoji:"⚖"},
	{ hanji:"瓸",emoji:"🔌"},
	{ hanji:"瓸",emoji:"🔌"},
	{ hanji:"瓸",emoji:"🔌"},
	{ hanji:"瓸",emoji:"🔌"},
	{ hanji:"A",emoji:"🅰️"},
    { hanji:"AB",emoji:"🆎"},
    { hanji:"B",emoji:"🅱️"},
    { hanji:"CL",emoji:"🆑"},
    { hanji:"免费",emoji:"🆓"},
    { hanji:"信息",emoji:"ℹ️"},
    { hanji:"O",emoji:"🅾️"},
    { hanji:"P",emoji:"🅿️"},
    { hanji:"月",emoji:"🈷️"},
    { hanji:"有",emoji:"🈶"},
    { hanji:"得",emoji:"🉐"},
    { hanji:"可",emoji:"🉑"},
    { hanji:"祝",emoji:"㊗"},
    { hanji:"空",emoji:"🈳"},
    { hanji:"满",emoji:"🈵"},
    { hanji:"营",emoji:"🈺"},
    { hanji:"秘",emoji:"㊙"},
    { hanji:"蘑菇",emoji:"🍄"},
    { hanji:"薯条",emoji:"🍟"},
    { hanji:"红薯",emoji:"🍠"},
    { hanji:"书",emoji:"📕"},
    { hanji:"餐具",emoji:"🍽️"},
    { hanji:"中国",emoji:"🇨🇳"},
    { hanji:"日本",emoji:"🇯🇵"},
    { hanji:"袜子",emoji:"🧦"},
    { hanji:"短裤",emoji:"🩳"},
    { hanji:"电话",emoji:"☎"},
    { hanji:"手机",emoji:"📱"},
    { hanji:"灯笼",emoji:"🏮"},
    { hanji:"日元",emoji:"💴"},
    { hanji:"美元",emoji:"💵"},

]


