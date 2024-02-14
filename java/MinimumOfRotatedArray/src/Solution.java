public class Solution {
//    without binary search
    public int findMin(int[] nums) {

        int rotated = nums.length;

        for (int i = 1; i < nums.length; i++) {
            int current = nums[i];
            if(current > nums[i - 1]) {
                continue;
            }
            rotated = i;
        }
        if(rotated == nums.length) return nums[0];
        return nums[rotated];
    }
}
