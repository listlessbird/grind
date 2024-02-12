public class SearchMatrix {
    public boolean searchMatrix(int[][] matrix, int target) {

        int l = 0;
        int cols = matrix[0].length;
        int rows = matrix.length;
        int r = (cols * rows) - 1;

        while (l <= r) {
            int mid = (l + r) / 2;
            int mappedRow = (mid / cols);
            int mappedCol = (mid % cols);
            int el = matrix[mappedRow][mappedCol];
            if (el < target) {
                l = mid + 1;
            } else if (el > target) {
                r = mid - 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
