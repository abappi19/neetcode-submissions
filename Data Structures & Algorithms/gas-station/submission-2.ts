class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas: number[], cost: number[]): number {
        let totalGas = 0;
        let totalCost = 0;
        for (let i = 0; i < gas.length; i++) {
            totalGas += gas[i];
            totalCost += cost[i];
        }
        if (totalGas < totalCost) return -1;

        let idx = 0;
        let carry = 0;
        for (let i = 0; i < gas.length; i++) {
            carry = carry + gas[i] - cost[i];
            if (carry < 0) {
                idx = i + 1;
                carry = 0;
            }
        }

        return idx;
    }
}
