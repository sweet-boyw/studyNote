/**
 * 合并两个有序数组：给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
 * 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
 *  @param {number[]} nums1
 *  @param {number} m
 *  @param {number[]} nums2
 *  @param {number} n
 *  @return {void} Do not return anything, modify nums1 in-place instead.
 */
/**
 * 1.判断数据长度m + n = 1直接返回数组
 * 2.
 */
const merge = (nums1,nums2,n,m) =>{
    if(n == 0 ) return nums1 = nums2
    if(m == 0 ) return nums1
    if(m + n == 2 && nums1[0] > nums2[0]){
        nums1[1] = nums1[0]
        nums1[0] = nums2[0]
        return nums1
    }
    if(m + n == 2 && nums1[0] < nums2[0]){
        nums1[1] = nums2[0]
        return nums1
    }
    /**
     * 先进行数据合并
     * 再进行数据排序
     */
    for(let i = 0; i < m; i++){
        nums1[n + i] = nums2[i]
    }
    console.log(nums1)
    console.log(nums1.sort())
    return nums1.sort()
}
