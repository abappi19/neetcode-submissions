class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {

        for(let i =0; i<nums.length; i++){
            const num = nums[i];
            if(num > 0 && num !== i+1 && num < nums.length){
                if(nums[num-1] === num) continue;
                nums[i] = nums[num-1];
                nums[num-1] = num;
                if(nums[i]!==i+1 && nums[i] <= nums.length)i--;
            }
        }
        for(let i=0; i<nums.length;i++){
            if(nums[i] !== i+1) return i+1;
        }
        return nums.length+1;

    }
}
