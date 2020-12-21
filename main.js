// @flow

const computeAllSums/*: (Array< number >, Array< number >) => Array< number > */ = (as, bs) => {
    const summs = [];
    for (i = 0; i < as.length; i++) {
        for (j = 0; j < bs.length; j++) {
            summs.push(as[i] + bs[j]);
        }
    }
    console.log(summs);
    return summs;
};

const sumOfTwo/*: (Array< number >, Array< number >, number) => boolean */ = (nums1, nums2, value) => {
    const allSums/*: Array< number > */ = computeAllSums(nums1, nums2);
    return allSums.includes(value);
}

console.log(sumOfTwo([1,2,3], [10,20,30,40], 42));
