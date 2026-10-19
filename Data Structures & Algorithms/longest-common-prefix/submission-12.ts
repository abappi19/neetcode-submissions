class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let result = [];
        for(let i=0; i<strs[0].length; i++){
            const s = strs[0][i];
            for(let j=1; j<strs.length; j++ ){
                if(strs[j][i] !== s) return result.join("");
            }
            result.push(s);
        }
        return result.join("");

    }
}
