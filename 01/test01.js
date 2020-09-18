var answer1 = prompt('正の値　or　負の値を入力してください');
if (answer1 > 0) {
  alert('正の値です');
} else if (answer1 <0) {
  alert('負の値です');
} else {
  alert('数値を入力してください');
}

var animals = ["パンダ" , "ライオン" ,"キリン"];
var answer2 = prompt("好きな動物は何ですか？");
var i = 0;
while (i < animals.length) {
    if(answer2 == "ライオン"){
        alert("ライオンの添字：１");
        break;
    }else{
  alert(animals[i]);
  i++; 
    }
}

var animals2 = [
  {'name': 'パンダ', 'weight': "80(kg)"},  // 0番目のオブジェクト変数
  {'name': 'ライオン', 'weight': "200(kg)"},  // 1番目のオブジェクト変数
  {'name': 'キリン', 'weight': "300(kg)"}   // 2番目のオブジェクト変数
];
var answer3 = prompt("体重を知りたい動物名を入力してください。");
if(answer3 == animals2[0].name){
  alert(animals2[0].weight);
}else if(answer3 == animals2[1].name){
  alert(animals2[1].weight);
}else if(answer3 == animals2[2].name){
  alert(animals2[2].weight);
}else{
  alert("パンダ or ライオン or キリンを入力してください");
}

function calc(x) {
  return x * x * 3.14;
}

alert(calc(8));