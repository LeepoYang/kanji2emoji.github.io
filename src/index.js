
const submitText = document.getElementById('submit');

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
            console.log(code)
            flag = 0;
        }
    }

    const output = document.querySelector('#output');
    output.innerHTML = trans;

}

const tosee = document.querySelector('#tosee');
const tooseediv = document.querySelector('#toseediv');
tosee.onclick = function (){
    let emojiList = ''
    emoji2hanzi.forEach(obj=>{
        emojiList += (obj.hanji + ' ,'+ obj.emoji + '; ')
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
]

