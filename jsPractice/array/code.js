//配列の初期化
let array = [1,2,3,"Alice",12.5];
//中身の確認
console.log(array);
//要素の個数を確認
console.log(array.length);
//配列に値の追加 push
array.push("追加しました");
console.log(array);
//配列の一番最後のデータの削除
array.pop();
console.log(array);

//配列の作成
let array2 = new Array(5);
array2[0] = 12;
array2[1] = "hello";
console.log(array2);

//オブジェクトの書き方
let obj = {name:"Alice",id:122,isStudent:true};
console.log(obj);
//特定のデータの表示の仕方
console.log(obj.name);
console.log(obj["name"]);
//上書きの仕方
obj.id = 30;
console.log(obj.id);

obj["isStudent"] = false;
console.log(obj["isStudent"]);

//for-of
for(let a of array){
    console.log(a);
}

//for-in
for(let key in obj){
    console.log(key + ":"+obj[key]);
}