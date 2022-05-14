
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    this.frequency = new Map();
    for (let n of nums) {
        if (!this.frequency.has(n)) {
            this.frequency.set(n, 0);
        }
        this.frequency.set(n, this.frequency.get(n) + 1);
    }
    this.permutations = [];
    findPermutations([], nums.length);
    return this.permutations;
};


/**
 * @param {number[]} current
 * @param {number} permutationSize 
 * @return {void}
 */
function findPermutations(current, permutationSize) {
    if (current.length === permutationSize) {
        this.permutations.push(Array.from(current));
        return;
    }

    for (let n of this.frequency.keys()) {

        if (this.frequency.get(n) > 0) {
            this.frequency.set(n, this.frequency.get(n) - 1);
            current.push(n);

            findPermutations(current, permutationSize);

            this.frequency.set(n, this.frequency.get(n) + 1);
            current.pop();
        }
    }
}
