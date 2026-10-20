class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        const len1 = nums1.length;
        const len2 = nums2.length;

        let i = 0,
            j = 0;
        let median1 = 0,
            median2 = 0;

        for (let count = 0; count <= Math.floor(len1 + len2) / 2; count++) {
            median2 = median1;
            if(i<len1 && j<len2){
                if(nums1[i]<=nums2[j]){
                    median1 = nums1[i++]
                }else{
                    median1 = nums2[j++]
                }
            }else if(i<len1){
                median1 = nums1[i++]
            }else if(j<len2){
                median1 = nums2[j++]
            }
        }
        if((len1+len2) % 2 === 0){
            return (median1 + median2) /2;
        }else return median1;
    }
}
