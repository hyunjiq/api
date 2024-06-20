const mydata = ["영어","중국어","일본어"];

mydata.forEach(function(value, idx){
    console.log(`forEach의 첫번째 매개인자 :`,value);
    console.log(`array문을 그대로 가져다 씀 :`, mydata[idx]);

})//벨류랑 값을 나눠서 접근

for(idx in mydata){
    console.log(`for in 문 :`, mydata[idx]);
}//벨류만 접근

const testdata = [
    ["네이버","naver"],
    ["다음","daum"],
    ["구글","google"]
]
// 1 daum띄우기
// 2 네이버 다음 구글 띄우기

console.log(testdata[1][1]);
testdata.forEach(function(v, i){
    console.log(v[0]);
})

testdata.forEach((v, i)=>{
    console.log(v[0]);
})

const _testdata = [
    {
        mm:"네이버"
    },
    {
        mm:"다음"
    },
    {
        mm:"구글"
    }
]
_testdata.forEach(function(ee, ii){
    console.log(ee.mm);
    console.log(ee["mm"]);
})

const __testdata = [
    {
        mm:"네이버",
        href:"http://www.naver.com",
        cls: "naver"
    },
    {
        mm:"다음",
        href:"http://www.daum.net",
        cls: "daum"
    },
    {
        mm:"구글",
        href:"http://www.google.com",
        cls: "google"
    }
]

__testdata.forEach(function(eee, iii){
    console.log(`<li class="${eee["cls"]}"><a href="${eee.href}">${eee.mm}</a></li>`)
})

function nomalfun(a , b){
    //선언적 함수 위치 상관없이
    //중요한 함수 무겁다
}
const nomalfun = (a , b)=>{
    //실행위치 엄청 중요
    //1회용 함수 가볍다
}