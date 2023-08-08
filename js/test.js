// class Animal{
//     constructor(name){
//         this.name = name
//     }
//     jump(){
//         console.log(`this animal name is ${this.name}`)
//     }
// }

// const a = new Animal('wangwanng')
// a.jump()

// 爬楼梯
// function climbing(n){
//     if(n == 1) return 1
//     if(n == 2) return 2
//     return climbing(n-1) + climbing(n-2)
// }

// 非递归方法解决
// function climbing(n){
//     if(n == 1) return 1
//     if(n == 2) return 2
//     let result = 0
//     let pre = 1
//     let prepre = 2
//     for(let i = 3;i <= n; i++){
//       result = pre + prepre
//         pre = prepre
//         prepre = result
//     }
//     return result
// }
// console.log(climbing(4))

// function twosums(num,target){
//     let hasmap = new Map()
//     for(let i = 0;i <= num.length; i++){
//         let another = target - num[i]
//         if(hasmap.has(another)){
//             return [num.indexOf(another),i]
//         }else{
//             hasmap.set(num[i],num[i])
//         }
//     }
// }
// console.log(twosums([3,3],6))
//
// 合并两个数组并排序
// function mergeTwolists(list1,list2){
//     return [...list1,...list2].sort()
// }
// console.log(mergeTwolists([1,2,3],[2,3,4]))

// 不使用es6语法
// function mergeTwolists(list1,list2){
//     let n = list1.length
//     let m = list2.length
//     for(let i = 0; i < m; i++){
//         list1[n + i] = list2[i]
//     }
//     return list1.sort()
// }
// console.log(mergeTwolists([],[1]))

// 移动零
// function moveZeroes(nums){
    // if(nums == null) return
    // if(nums.length == 1) return nums
    // let j = 0
    // let n = 0
    // for(let i = 0; i < nums.length; i++){
    //     if(nums[i] != 0){
    //         nums[j++] = nums[i]
    //     }
    //     n = i - j
    // }
    // for(let i = 0;i <= n; i++){
    //     nums[j++] = 0
    // }
    // return nums
// }
// moveZeroes([0])

// function moveZeroes(nums){
//     let len = nums.length
//     for(let i = 0; i < len; ++i){
//         console.log(i)
//         if(nums[i] === 0){
//             nums.splice(i,1)
//             nums.push(0)
//         }
//     }
//     console.log(nums)
//     return nums
// }
// moveZeroes([0,2,1])

// function findnumber(nums1){
//     let hsamap = new Map()
//     let res = new Array()
//     for(let i = 1; i <= nums1.length; i++){
//         hsamap.set(i,i)
//     }
//     console.log(hsamap)
//     for(let i = 0; i < nums1.length; i++){
//         console.log(nums1[i])
//         if(hsamap.has(nums1[i])){
//             // console.log(nums1[i])
//             res.push(nums1[i])
//         }
//     }
//     console.log(res)
//     return res
// }
// findnumber([4,3,2,7,8,2,3,1])

// 快速排序
// function quickSort(arr) {
//     if (arr.length <= 1) {
//       return arr;
//     }
//     const pivotIndex = Math.floor(arr.length / 2);
//     const pivot = arr[pivotIndex];
//     const left = [];
//     const right = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (i === pivotIndex) {
//         continue;
//       }
//       if (arr[i] < pivot) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)];
//   }

// 反转链表

// var mergeTwoLists = function(l1, l2) {
//     const prehead = new ListNode(-1);

//     let prev = prehead;
//     while (l1 != null && l2 != null) {
//         if (l1.val <= l2.val) {
//             prev.next = l1;
//             l1 = l1.next;
//         } else {
//             prev.next = l2;
//             l2 = l2.next;
//         }
//         prev = prev.next;
//     }

//     // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
//     prev.next = l1 === null ? l2 : l1;
//     console.log(prehead.next)
//     return prehead.next;
// };
// mergeTwoLists([1,2,3],[1,3,4])

let arr = [1,23,4,5]
arr[4] = 9
console.log(arr)