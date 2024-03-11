import java.util.Arrays;

public class Solution {
    public int[] sortArray(int[] nums) {
        mergeSort(nums, 0, nums.length - 1);
        return nums;
    }

    private void mergeSort(int[] arr, int start, int end) {
        if(start >= end) return;

        int mid = (start + end) / 2;

        mergeSort(arr, start, mid);
        mergeSort(arr, mid + 1, end);
        merge(arr, start, mid, end);
    }

//    merge the halves i.e start -> mid, mid + 1 -> end after sorting with 2 ptrs
    private void merge(int[] arr,int start, int mid, int end ) {
        int i = start;
        int j = mid + 1;
        int k = 0;

        int[] tmp = new int[end - start + 1];

        while(i <= mid && j <= end) {
//            only move the ptr of the smallest element
            if(arr[i] <= arr[j]) {
                tmp[k++] = arr[i++];
            } else {
                tmp[k++] = arr[j++];
            }
        }

        while (i <= mid) {
            tmp[k++] = arr[i++];
        }

        while(j <= end) {
            tmp[k++] = arr[j++];
        }

        System.out.println("Temp: " + Arrays.toString(tmp));

        for(int v = 0; v < tmp.length; v++) {
            arr[v + start] = tmp[v];
        }
    }


    public static class Main {
        public static void main(String[] args) {
            int[] nums1 = {3, 2, 1, 5, 4};
            Solution solution = new Solution();
            int[] sortedArray1 = solution.sortArray(nums1);
            System.out.println("Sorted array for test case 1:");
            printArray(sortedArray1);

            int[] nums2 = {9, 7, 8, 5, 6};
            int[] sortedArray2 = solution.sortArray(nums2);
            System.out.println("\nSorted array for test case 2:");
            printArray(sortedArray2);

            int[] nums3 = {1, 2, 5, 4, 3};
            int[] sortedArray3 = solution.sortArray(nums3);
            System.out.println("\nSorted array for test case 3:");
            printArray(sortedArray3);
        }

        private static void printArray(int[] arr) {
            for (int num : arr) {
                System.out.print(num + " ");
            }
            System.out.println();
        }
    }
}
