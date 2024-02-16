import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Solution s = new Solution();
        int[][] tests = {{ 3,4,5,1,2 }, { 4,5,6,7,0,1,2 }, { 11,13,15,17 }};
        for(int[] test: tests) {
            int out = s.findMinBinarySearchImpl(test);
            System.out.println(Arrays.toString( test) + " min is " + out);
        }
    }
}
