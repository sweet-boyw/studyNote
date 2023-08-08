/**
 * @function arraymove 数组向后移动 
 * @number n 移动步长,默认移动一步
 */
let arraymove = (nums,n = 1) => {
    if(n == 0) return nums // 步长为0的时候不移动
    let len = nums.length
    for(let i = 0;i < len; i++){
        console.log(nums[len - 1 - i])
        nums[len - 1 + n - i] = nums[len - 1 - i]
        console.log(nums) 
    }
    for(let j = 0; j < n; j++){
        nums[j] = 0
    }
    console.log(nums)
    return nums
}
arraymove([1,23,4],6)