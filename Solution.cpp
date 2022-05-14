
#include <unordered_map>
#include <vector>
using namespace std;

class Solution {
    
    unordered_map<int, int> frequency;
    vector<vector<int>> permutations;

public:
    vector<vector<int>> permuteUnique(vector<int>& nums) {
        for (const auto& n : nums) {
            ++frequency[n];
        }
        vector<int> current;
        findPermutations(current, nums.size());
        return permutations;
    }

private:
    void findPermutations(vector<int>& current, int permutationSize) {
        if (current.size() == permutationSize) {
            permutations.emplace_back(current);
            return;
        }

        for (auto& n : frequency) {

            if (n.second > 0) {
                --n.second;
                current.push_back(n.first);

                findPermutations(current, permutationSize);

                ++n.second;
                current.pop_back();
            }
        }
    }
};
