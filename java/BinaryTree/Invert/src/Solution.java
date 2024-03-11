public class Solution {
    public TreeNode invertTree(TreeNode root) {
        if(root == null || root.right == null || root.left == null) return root;

        TreeNode d = root;

        while (root.left != null && root.right != null) {
            TreeNode tmp = root.left;
            root.left = root.right;
            root.right = tmp;
            root = root.left;
        }
        return d;
    }
}
