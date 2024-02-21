public class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
//        nums1 be the smallest
        if(nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);

        int m = nums1.length;
        int n = nums2.length;

        int totalSize = m + n;
        int half = totalSize / 2;

//        the possible values we can take from arr1 to form the left partition [0, m]
        int left = 0;
        int right = m;

        double res = 0.0;

        while (left <= right) {
//            mid of small array
            int i = (left + right) / 2;

//            requiredLeftPortionFromOtheArray
            int j = half - i;

//            the four values around the median in the possible merged array
//            leftest of arr1[] in the partition. Remember zero indexing
            int l1 = (i == 0) ? Integer.MIN_VALUE: nums1[i - 1];
//            left of arr2[]
            int l2 = (j == 0) ? Integer.MIN_VALUE: nums2[j - 1];

            int r1 = (i == m) ? Integer.MAX_VALUE: nums1[i];
            int r2 = (j == n) ? Integer.MAX_VALUE: nums2[j];

//            correct partition
            if(l1 <= r2 && l2 <= r1) {
//                even num elems
                if(totalSize % 2 ==0) {
                    res = (Math.max(l1, l2) + Math.min(r1, r2)) / 2.0;
                } else {
                    res = Math.min(r1,r2);
                }
                break;
            } else if (l1 > r2) {
                right = i - 1;
            } else {
                left = i + 1;
            }
        }

        return res;
    }
}
