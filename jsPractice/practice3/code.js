let result = document.getElementById("text-result");
let text1 = document.getElementById("change-text1");
let text2 = document.getElementById("change-text2");
let text3 = document.getElementById("change-text3");

text1.addEventListener('click',()=>{
    result.innerHTML=result.innerHTML;
});

text2.addEventListener('click',()=>{
    result.innerHTML=text2.value++;
});

text3.addEventListener('click',()=>{
    result.innerHTML=text3.value--;
});