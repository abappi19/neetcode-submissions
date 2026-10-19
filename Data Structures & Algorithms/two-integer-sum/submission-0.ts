class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number,number>();

        for(let i = 0; i<nums.length; i++){
            const num = nums[i];
            if(map.has(num) && map.get(num) !== i){
                return [map.get(num), i];
            }
            map.set(target-num, i);
        }

    }
}
