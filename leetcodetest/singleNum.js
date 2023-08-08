/**
 * @array nums
 * @number num
 */
const singleNum = (nums) =>{
    let num = 0;
    for(const n of nums){
        num ^= n; 
    }
    return num
}