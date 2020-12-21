// @flow

const sumOfTwo/*: (Array< number >, Array< number >, number) => boolean */ = (nums1, nums2, value) => {
    const allSums/*: Array< number > */ = ?computeAllSums(nums1, nums2);
    return allSums.includes(value);
}

console.log(sumOfTwo([1,2,3], [10,20,30,40], 42));
