public class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();

        // Test Case 1
        ListNode l1 = createLinkedList(new int[]{9});
        ListNode l2 = createLinkedList(new int[]{1,9,9,9,9,9,9,9,9,9});
        System.out.println("Solution: ");
        printLinkedList(solution.addTwoNumbers(l1, l2));

//        // Test Case 2
//        l1 = createLinkedList(new int[]{0});
//        l2 = createLinkedList(new int[]{0});
//        printLinkedList(solution.addTwoNumbers(l1, l2));
//
//        // Test Case 3
//        l1 = createLinkedList(new int[]{9, 9, 9, 9, 9, 9, 9});
//        l2 = createLinkedList(new int[]{9, 9, 9, 9});
//        printLinkedList(solution.addTwoNumbers(l1, l2));
    }

    // Helper method to create a linked list from an array
    private static ListNode createLinkedList(int[] arr) {
        if (arr == null || arr.length == 0) return null;
        ListNode dummy = new ListNode(-1);
        ListNode current = dummy;
        for (int val : arr) {
            current.next = new ListNode(val);
            current = current.next;
        }
        return dummy.next;
    }

    // Helper method to print the linked list
    private static void printLinkedList(ListNode head) {
        ListNode current = head;
        while (current != null) {
            System.out.print(current.val + " ");
            current = current.next;
        }
        System.out.println();
    }
}
