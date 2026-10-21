class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas: number[], cost: number[]): number {
        let eq = true;
        for (let i = 0; i < gas.length; i++) {
            if (gas[i] === cost[i]) continue;
            eq = false;
            let stock = 0;
            for (let j = i; j < gas.length + i; j++) {
                const station = j % gas.length;
                const nextCost = cost[station];
                stock = stock + gas[station] - nextCost;
                if (stock < 0) break;
            }
            if (stock >= 0) return i;
        }
        return eq ? 0 : -1;
    }
}
