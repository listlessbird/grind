public class Solution {

    public ListNode mergeKLists(ListNode[] lists) {

        if(lists == null || lists.length == 0) return null;

        return mergeKLists(lists, 0, lists.length - 1);
    }

    private ListNode mergeKLists(ListNode[] lists, int start, int end) {

//        base condition

        if(start == end) return lists[start];

        int mid = (start + end) / 2;
        ListNode left = mergeKLists(lists, start, mid);
        ListNode right = mergeKLists(lists, mid + 1, end);
        return  merge(left, right);
    }

    public ListNode merge(ListNode l1, ListNode l2) {

        if (l1 == null) return l2;
        if (l2 == null) return l1;

        ListNode ptr1 = l1;
        ListNode ptr2 = l2;

        ListNode dummy = new ListNode(0);

        ListNode tmp = dummy;

        while (ptr1 != null && ptr2 != null) {
            if (ptr1.val < ptr2.val) {
                tmp.next = ptr1;
                ptr1 = ptr1.next;
            } else {
                tmp.next = ptr2;
                ptr2 = ptr2.next;
            }
            tmp = tmp.next;
        }

        while (ptr1 != null) {
            tmp.next = ptr1;
            ptr1 = ptr1.next;
            tmp = tmp.next;
        }
        while (ptr2 != null) {
            tmp.next = ptr2;
            ptr2 = ptr2.next;
            tmp = tmp.next;
        }

        return dummy.next;
    }

}
