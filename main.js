// @flow

function sumOfTwo(nums1, nums2, value) {
    //  write code here.
    let arrOfSums = []
    for (let i=0; i < nums1.length; i++) {
        for (let j=0; j < nums2.length; j++) {
            arrOfSums.push(nums1[i] + nums2[j])
        }
    }
    console.log(arrOfSums)
    return arrOfSums.includes(value)
    
}
