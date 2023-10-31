//ol id を使って要素の取得
let list = document.getElementById("list");

//新しい要素を作成
let newLink = document.createElement("a");
//内容を挿入する
newLink.innerHTML = "developer.mozilla.org";
//要素を最後に挿入
list.append(newLink);
//要素の外側の最後に要素を追加する
//list.after(newLink);

//新しい<li>
let item = document.createElement("li");
list.append(item);
item.append(newLink);

//要素の取得
let removeLink = document.getElementById("link-2");
//要素の削除
//removeLink.remove();
removeLink.parentNode.remove();

//ボタンをクリックしたら
//ボタン1をクリックしました
let btnEvent = document.getElementById("button1");
/**document.getElementById("button").onclick = function() {
  // ここに#buttonをクリックしたら発生させる処理を記述する
}; */
/*btnEvent.onclick = function(){
    console.log("ボタン1をクリックしました");
}
btnEvent.onclick = function(){
    console.log("ボタン2をクリックしました");
}
/**対象の要素.addEventListener(event種類, () => {
  // 処理を記述
}); */
// 対象の要素.addEventListener(種類, function() {
//    // 処理を記述
//  }, false);

btnEvent.addEventListener('click',()=>{
    console.log("ボタン1をクリックしました");
});
btnEvent.addEventListener('click',()=>{
    console.log("ボタン2をクリックしました");
});

//helloメソッドの作成
function hello(){
    console.log("hello");
}




