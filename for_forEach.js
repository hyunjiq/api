const store = ["사과", "파인애플", "수박", "체리"];
//변수 const 선언
//변수 존재여부, 값 편집

for(let x = 0; x < store.length; x++){
    console.log(`for문`,store[x]);
}

for(x in store){
    console.log(`for in 문`,store[x]);
}

store.forEach(function(v , i){
    console.log(`forEach`,v);
})

store.forEach((v, i) => {
    console.log(`forEach`,v);
});

const storetest = [
    ["사과",10000 ,7000]
    ,["파인애플",5000,""]
    ,["수박",15000,""]
    ,["체리",13000,9000]
]

// 1. 하나의 패턴 확인
//console.log(`${storetest[3][0]}는 원가가 ${storetest[3][1]}이고 할인해서 ${storetest[3][2]}에 판매합니다`);

//' 2. x가 받아야 할 변수 확인
for(x in storetest){
    console.log(`${storetest[x][0]}는 원가가 ${storetest[x][1]}이고 할인해서 ${storetest[x][2]}에 판매합니다`);
}

storetest.forEach((vv, ii)=>{
    console.log(`${vv[0]}는 원가가 ${vv[1]}이고 할인해서 ${vv[2]}에 판매합니다`);
})

const stringdataapi = `서울|종로구|명륜3가|감나무집`;
//string [], {} -> JSON.parse
//string -> array 전환 split 에서도
//array -> string 전환 join 에서도
//압축과 푸는개념~~
let charArray = ["H", "e", "l", "l", "o"];
let word = charArray.join("");
console.log(word, typeof word);
// 출력: "Hello"

let characters = "Hello";
let charArray2 = characters.split("");
console.log(charArray);
// 출력: ["H", "e", "l", "l", "o"]