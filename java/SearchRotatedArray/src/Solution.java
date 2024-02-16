public class Solution {
    public int search(int[] nums, int target) {

        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;

            if(target == nums[mid]) {
                return mid;
            }
//            determine sorted half and check for the target between the sorted bounds
            if(nums[left] <= nums[mid]) {
                if(nums[left] <= target && target <= nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
//                right sorted and check which of the side of the array to eliminate
                if(target <= nums[right] && target >= nums[mid]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }

        }
        return -1;
    }
}
