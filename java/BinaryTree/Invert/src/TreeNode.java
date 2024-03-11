public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    public TreeNode(int val) {
        this.val = val;
    }

    public TreeNode(int val, TreeNode l, TreeNode right) {
        this.val = val;
        this.left = l;
        this.right = right;
    }
}
