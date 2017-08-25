/**
 * Created by cyz on 2017/8/25.
 */
"use strict";
let nums =[0,1,0,3,12]
let target = 0
chooseOne(nums,target)
function chooseOne(arr,ele){
    let count = 0;
    arr.forEach((item)=>{
        if(ele==item){
            let thisIndex = arr.indexOf(item)
            arr.splice(thisIndex,1)
            count++;
        }
    })
    for(let i=0;i<count;i++){
        arr.push(ele)
    }
    console.log(arr)

}
