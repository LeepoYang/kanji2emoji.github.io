const submitText = document.getElementById('submit');
const output = document.querySelector('#output');
output.innerHTML = 'ποΌιεΈΈιεε°ηΊ’πδΈ­ηζζ‘';
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
    {hanji:"η΄",emoji:'π΅'},
    {hanji:"η",emoji:'πΆ'},
    {hanji:"η«",emoji:'π±'},
    {hanji:"θ",emoji:'π'},
    {hanji:"ηͺ",emoji:'π·'},
    {hanji:"θ±",emoji:'β'},
    {hanji:"ζ ",emoji:'π²'},
    {hanji:"η¬",emoji:'π'},
    {hanji:"ε°",emoji:'πͺ'},
    {hanji:"ε­",emoji:'π­'},
    {hanji:"ι©¬",emoji:'π'},
    {hanji:"θ±‘",emoji:'π'},
    {hanji:"ιΌ ",emoji:'π­'},
    {hanji:"ιΈ‘",emoji:'π'},
    {hanji:"ιΎ",emoji:'π’'},
    {hanji:"ι±Ό",emoji:'π'},
    {hanji:"η·",emoji:'π΄'},
    {hanji:"εΏεΏ",emoji:'π€­'},
    {hanji:"εε",emoji:'π'},
    {hanji:"η¬ε­",emoji:'π'},
    {hanji:"θ¦η¬",emoji:'π'},
    {hanji:"δΊ²δΊ²",emoji:'π'},
    {hanji:"εθ΄’",emoji:'π€'},
    {hanji:"ζ θ―­",emoji:'π'},
    {hanji:"η½ηΌ",emoji:'π'},
    {hanji:"θ―΄θ°",emoji:'π€₯'},
    {hanji:"ζΆεΏ",emoji:'π€’'},
    {hanji:"η΄―",emoji:'π«'},
    {hanji:"ε€±ζ",emoji:'π'},
    {hanji:"εΏη’",emoji:'π'},
    {hanji:"ηηΈ",emoji:'π₯'},
    {hanji:"η‘η",emoji:'π€'},
    {hanji:"ζΎε±",emoji:'π¨'},
    {hanji:"εΏ",emoji:'β€'},
    {hanji:"ηΊ’εΏ",emoji:'β€'},
    {hanji:"ζ΅ζ±",emoji:'π¦'},
    { hanji:"ε³",emoji:"β°"},
	{ hanji:"ζ",emoji:"π©"},
	{ hanji:"ζ",emoji:"π¦"},
	{ hanji:"ε₯₯",emoji:"π¦"},
	{ hanji:"ι¨",emoji:"β"},
	{ hanji:"ι°²",emoji:"π’"},
	{ hanji:"ηΏ±",emoji:"β"},
	{ hanji:"ζΎ",emoji:"π²"},
	{ hanji:"ε·",emoji:"πΊ"},
	{ hanji:"ηΏΊ",emoji:"β"},
	{ hanji:"ι³",emoji:"π’"},
	{ hanji:"η¬",emoji:"π₯"},
	{ hanji:"ε£",emoji:"π€¬"},
	{ hanji:"ε€­",emoji:"π±"},
	{ hanji:"ε€­",emoji:"π±"},
	{ hanji:"ε",emoji:"π§±"},
	{ hanji:"η¬",emoji:"π"},
	{ hanji:"ε«",emoji:"8"},
        { hanji:"ε£©",emoji:"π§±"},
	{ hanji:"ι­",emoji:"π"},
	{ hanji:"ζ",emoji:"8"},
        { hanji:"ιΌ₯",emoji:"π¦¨"},
	{ hanji:"η²",emoji:"π©"},
	{ hanji:"η½·",emoji:"π²"},
	{ hanji:"θ­",emoji:"π΄"},
	{ hanji:"ιΌ₯",emoji:"π¦¨"},
	{ hanji:"θ·",emoji:"π§"},
	{ hanji:"ε·΄",emoji:"π"},
	{ hanji:"η½·",emoji:"π²"},
	{ hanji:"ιΌ₯",emoji:"π¦¨"},
	{ hanji:"θ",emoji:"πΏ"},
	{ hanji:"ζ",emoji:"πͺ "},
	{ hanji:"ηΈ",emoji:"π¨"},
	{ hanji:"ιΈ",emoji:"π¦"},
	{ hanji:"η€",emoji:"π€’"},
	{ hanji:"η¬",emoji:"π"},
	{ hanji:"ζ",emoji:"πͺ "},
	{ hanji:"ι­",emoji:"π"},
	{ hanji:"θ­",emoji:"π΄"},
	{ hanji:"ιΌ₯",emoji:"π¦¨"},
	{ hanji:"θ·",emoji:"π§"},
	{ hanji:"ηΈ",emoji:"π¨"},
	{ hanji:"ε·΄",emoji:"π"},
	{ hanji:"η½·",emoji:"π²"},
	{ hanji:"ιΌ₯",emoji:"π¦¨"},
	{ hanji:"ιΈ",emoji:"π¦"},
	{ hanji:"ζ",emoji:"π©"},
	{ hanji:"η½’",emoji:"π²"},
	{ hanji:"η½’",emoji:"π²"},
	{ hanji:"ε§",emoji:"β"},
	{ hanji:"ιΆ",emoji:"π―"},
	{ hanji:"η½’",emoji:"π²"},
	{ hanji:"η½’",emoji:"π²"},
	{ hanji:"ε§",emoji:"β"},
	{ hanji:"δΌ―",emoji:"π§"},
	{ hanji:"θ",emoji:"π§Ή"},
	{ hanji:"ζ",emoji:"π"},
	{ hanji:"θ΄₯",emoji:"π"},
	{ hanji:"η²¨",emoji:"π"},
	{ hanji:"η½",emoji:"β¬"},
	{ hanji:"η½",emoji:"β¬"},
	{ hanji:"ζ",emoji:"π"},
	{ hanji:"ζ",emoji:"π"},
	{ hanji:"θ΄₯",emoji:"π"},
	{ hanji:"η½",emoji:"β¬"},
	{ hanji:"ηΎ",emoji:"π―"},
	{ hanji:"ζ",emoji:"π"},
	{ hanji:"η«‘",emoji:"π§ͺ"},
	{ hanji:"ζ",emoji:"π"},
	{ hanji:"ζΊ",emoji:"π"},
	{ hanji:"δ½°",emoji:"π―"},
	{ hanji:"ζ",emoji:"π"},
	{ hanji:"η¨",emoji:"πΎ"},
	{ hanji:"ε‘",emoji:"β"},
	{ hanji:"ε‘",emoji:"β"},
	{ hanji:"ηΈ",emoji:"π"},
	{ hanji:"ηΈ",emoji:"π"},
	{ hanji:"ηΈ",emoji:"π"},
	{ hanji:"ηΈ",emoji:"π"},
	{ hanji:"A",emoji:"π°οΈ"},
    { hanji:"AB",emoji:"π"},
    { hanji:"B",emoji:"π±οΈ"},
    { hanji:"CL",emoji:"π"},
    { hanji:"εθ΄Ή",emoji:"π"},
    { hanji:"δΏ‘ζ―",emoji:"βΉοΈ"},
    { hanji:"O",emoji:"πΎοΈ"},
    { hanji:"P",emoji:"πΏοΈ"},
    { hanji:"ζ",emoji:"π·οΈ"},
    { hanji:"ζ",emoji:"πΆ"},
    { hanji:"εΎ",emoji:"π"},
    { hanji:"ε―",emoji:"π"},
    { hanji:"η₯",emoji:"γ"},
    { hanji:"η©Ί",emoji:"π³"},
    { hanji:"ζ»‘",emoji:"π΅"},
    { hanji:"θ₯",emoji:"πΊ"},
    { hanji:"η§",emoji:"γ"},
    { hanji:"θθ",emoji:"π"},
    { hanji:"θ―ζ‘",emoji:"π"},
    { hanji:"ηΊ’θ―",emoji:"π "},
    { hanji:"δΉ¦",emoji:"π"},
    { hanji:"ι€ε·",emoji:"π½οΈ"},
    { hanji:"δΈ­ε½",emoji:"π¨π³"},
    { hanji:"ζ₯ζ¬",emoji:"π―π΅"},
    { hanji:"θ’ε­",emoji:"π§¦"},
    { hanji:"η­θ£€",emoji:"π©³"},
    { hanji:"η΅θ―",emoji:"β"},
    { hanji:"ζζΊ",emoji:"π±"},
    { hanji:"η―η¬Ό",emoji:"π?"},
    { hanji:"ζ₯ε",emoji:"π΄"},
    { hanji:"ηΎε",emoji:"π΅"},

]


