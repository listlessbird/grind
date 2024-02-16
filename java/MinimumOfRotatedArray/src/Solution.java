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

    public int findMinBinarySearchImpl(int[] nums) {
        int left = 0;
        int right = nums.length - 1;

        int minEl = nums[left];


//        determine the sorted half to discard the other half.
        while (left <= right) {
            int mid = (left + right) / 2 ;

//            left part is sorted
            if(nums[mid] > nums[left] && nums[mid] < nums[right]) {
                minEl = Math.min(minEl, nums[left]);
                right = mid - 1;
            } else {
                minEl = Math.min(minEl, nums[right]);
                left = mid + 1;
            }
        }
        return minEl;
    }

}
