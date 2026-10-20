class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        const total = nums1.length + nums2.length;
        const mid = Math.floor(total / 2);
        const isEven = total % 2 === 0;
        let i = 0,
            j = 0,
            prev;
        for (let k = 0; k < total; k++) {
            const n1 = nums1[i] ?? Infinity,
                n2 = nums2[j] ?? Infinity;
            const min = Math.min(n1, n2);

            if (k === mid) {
                console.log({
                    k,
                    mid,
                    min,
                    isEven,
                    prev,
                    i,
                    j,
                    n1,
                    n2
                })
                if (!isEven) return min;
                else return (min + prev) / 2;
            } else {
                prev = min;

                if (n1 <= n2) i++;
                else j++;
            }
        }
    }
}
