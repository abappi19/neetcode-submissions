class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let minLength = strs[0].length;

        let result = "";
        for(let i=0; i<minLength; i++){
            const s = strs[0][i];
            for(let j=1; j<strs.length; j++ ){
                if(strs[j][i] !== s) return result;
            }
            result = result + s;
        }
        return result;

    }
}
