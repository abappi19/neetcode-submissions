class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        return this.toSorted(s) === this.toSorted(t);
    }

    toSorted(s:string){ return s.split('').sort().join(''); }
}
