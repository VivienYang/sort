// 计数排序
let list = [3,6,23,2,5,1,3,18,9]
let hash = {}
//入桶
// 遍历需要排序的数组，入桶存入hash中
for(let i=0; i<list.length; i++){
    let num = list[i];
    if(hash[num]){
        hash[num]=hash[num]+1
    }else{
        hash[num]=1
    }
}
console.log(`入桶后的hash为-------`)
console.log(hash)
//出桶
let new_list = [];
//先找到最大值
let max = findMaxNum(list)
for(let j=0; j<max+1; j++){
    if(hash[j]){
        for(let k=0;k<hash[j];k++){
            new_list.push(j)
        }
    }
}
console.log(`排序后的新数组为-------`)
console.log(new_list)
function findMaxNum(arr){
    let max = arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max;
}