class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const ans = [];
        for(let i=0; i<nums.length; i++){
            ans[i] = nums[i];
            ans[nums.length+i] = nums[i];
        }

        return ans;
    }
}
