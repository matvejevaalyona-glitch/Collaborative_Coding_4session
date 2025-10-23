const nums = [2, 7, 11, 15];
const target = 18;

function twoSumOptimized(nums, target){

    const seen = new Map();

    for(let i = 0; i < nums.length; i++){
        const need = target - nums[i];
        if(seen.has(need)){
            return[seen.get(need), i];
        }
        seen.set(nums[i], i);
    }
}
console.log(twoSumOptimized(nums, target));
