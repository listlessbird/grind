public class Main {
    public static void main(String[] args) {
        int [][] matrix = { { 1 } , {3}};
        SearchMatrix s = new SearchMatrix();
        System.out.println(
                s.searchMatrix(matrix, 3)
        );
    }
}
