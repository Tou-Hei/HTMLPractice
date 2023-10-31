//メソッド作成　戻る値なし　パラメーターなし
function printHello(){
    console.log("hello");
}

//メソッドの呼び出し
printHello();

//戻り値あり　パラメーターあり
function sum(a,b){
    return a + b;
}

//メソッドの呼び出し
console.log(sum(1,2));

//デフォルトパラメーター
function print(str1,str2="世界",str3="!!!!"){
    console.log(str1 + " " + str2 + " " +str3);
}

//呼び出し 使用默认参数来简化函数调用，并在需要时提供自定义值。
print("ヤッホー");
print("ヤッホー","お昼寝したい");
print("ヤッホー","お昼寝したい","おやつも食べたい");

//ラムダ式
let add = (x,y)=>x+y;
console.log(add(2,3));